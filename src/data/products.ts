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
    image: "https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&q=80&w=800",
    description: "Personalized neon sign perfect for bedrooms and events.",
    category: "custom"
  },
  {
    id: 2,
    name: "Lightning Bolt",
    price: 99.99,
    image: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&q=80&w=800",
    description: "Energetic lightning bolt design that adds a spark to any room.",
    category: "symbols"
  },
  {
    id: 3,
    name: "Heart Beat",
    price: 129.99,
    image: "https://images.unsplash.com/photo-1519608425089-7f3bfa6f6bb8?auto=format&fit=crop&q=80&w=800",
    description: "Romantic heartbeat design perfect for couples and love themes.",
    category: "symbols"
  },
  {
    id: 4,
    name: "Cocktail Bar",
    price: 199.99,
    image: "https://images.unsplash.com/photo-1542634093-e0198d4d1e46?auto=format&fit=crop&q=80&w=800",
    description: "Classic cocktail glass design ideal for bars and entertainment areas.",
    category: "business"
  },
  {
    id: 5,
    name: "Cloud Nine",
    price: 159.99,
    image: "https://images.unsplash.com/photo-1504595403659-9088ce801e29?auto=format&fit=crop&q=80&w=800",
    description: "Dreamy cloud design with stars, perfect for bedroom decor.",
    category: "symbols"
  },
  {
    id: 6,
    name: "Good Vibes",
    price: 179.99,
    image: "https://images.unsplash.com/photo-1577401239170-897942555fb3?auto=format&fit=crop&q=80&w=800",
    description: "Positive message sign to brighten up any space.",
    category: "quotes"
  }
];