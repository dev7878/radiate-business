import React, { useState } from 'react';
import { PayPalScriptProvider, PayPalButtons, usePayPalScriptReducer } from '@paypal/react-paypal-js';
import { useCartStore } from '../store/cartStore';
import { useNavigate } from 'react-router-dom';
import { Loader2 } from 'lucide-react';

const PAYPAL_CLIENT_ID = 'AS8zv3cC5Fnxp3N3ZMQu900btFnuEdouJI5e-Uzx63PTPGDurtTRTxWmE58VbFjCW8bUbnLCg_Yajaw';

function ButtonWrapper() {
  const [{ isPending, isRejected }] = usePayPalScriptReducer();
  const { items, total, clearCart } = useCartStore();
  const navigate = useNavigate();

  const handleApprove = (data: any, actions: any) => {
    return actions.order.capture().then(() => {
      clearCart();
      navigate('/checkout/success');
    });
  };

  if (isPending) {
    return (
      <div className="flex items-center justify-center py-4">
        <Loader2 className="h-6 w-6 animate-spin text-purple-500" />
      </div>
    );
  }

  if (isRejected) {
    return (
      <div className="text-red-500 text-center py-4">
        PayPal failed to load. Please refresh the page or try again later.
      </div>
    );
  }

  return (
    <PayPalButtons
      style={{ layout: "vertical" }}
      createOrder={(data, actions) => {
        return actions.order.create({
          purchase_units: [{
            amount: {
              currency_code: "CAD",
              value: total.toFixed(2),
              breakdown: {
                item_total: {
                  currency_code: "CAD",
                  value: total.toFixed(2)
                }
              }
            },
            items: items.map(item => ({
              name: item.name,
              unit_amount: {
                currency_code: "CAD",
                value: item.price.toFixed(2)
              },
              quantity: item.quantity.toString()
            }))
          }]
        });
      }}
      onApprove={handleApprove}
    />
  );
}

export default function PayPalCheckout() {
  return (
    <PayPalScriptProvider 
      options={{ 
        "client-id": PAYPAL_CLIENT_ID,
        currency: "CAD",
        intent: "capture"
      }}
    >
      <ButtonWrapper />
    </PayPalScriptProvider>
  );
}