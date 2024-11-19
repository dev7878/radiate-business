export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
  category: string;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Custom Name Neon",
    price: 149.99,
    image: "/signs/sign_1.png",
    description: "Personalized neon sign perfect for bedrooms and events.",
    category: "custom"
  },
  {
    id: 2,
    name: "Lightning Bolt",
    price: 99.99,
    image: "/signs/sign_2.png",
    description: "Energetic lightning bolt design that adds a spark to any room.",
    category: "symbols"
  },
  {
    id: 3,
    name: "Heart Beat",
    price: 129.99,
    image: "/signs/sign_3.png",
    description: "Romantic heartbeat design perfect for couples and love themes.",
    category: "symbols"
  },
  {
    id: 4,
    name: "Cocktail Bar",
    price: 199.99,
    image: "/signs/sign_4.png",
    description: "Classic cocktail glass design ideal for bars and entertainment areas.",
    category: "business"
  },
  {
    id: 5,
    name: "Cloud Nine",
    price: 159.99,
    image: "/signs/sign_5.png",
    description: "Dreamy cloud design with stars, perfect for bedroom decor.",
    category: "symbols"
  },
  {
    id: 6,
    name: "Good Vibes",
    price: 179.99,
    image: "/signs/sign_6.png",
    description: "Positive message sign to brighten up any space.",
    category: "quotes"
  }
];