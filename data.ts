import { Product, Category } from './types';

export const CATEGORIES: Category[] = [
  { id: 'summer', name: 'Summer Collection', image: 'https://picsum.photos/seed/summer/400/400' },
  { id: 'party', name: 'Party Dresses', image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=600&auto=format&fit=crop' },
  { id: 'casual', name: 'Casual Wear', image: 'https://picsum.photos/seed/casual/400/400' },
  { id: 'accessories', name: 'Accessories', image: 'https://picsum.photos/seed/acc/400/400' },
];

export const PRODUCTS: Product[] = [
  {
    id: 1,
    name: "Floral Chiffon Maxi",
    category: "Summer Collection",
    price: 2450,
    image: "https://th.bing.com/th/id/R.e8e15905c6e2cb1b38a4e346d71027e8?rik=rz3di5tCwJkz2A&pid=ImgRaw&r=0",
    description: "A breezy floral maxi dress perfect for beach weddings or garden parties."
  },
  {
    id: 2,
    name: "Embroidered Velvet Anarkali",
    category: "Party Dresses",
    price: 8500,
    image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=800&auto=format&fit=crop",
    description: "Elegant deep red velvet Anarkali suit with intricate gold embroidery."
  },
  {
    id: 3,
    name: "Cotton Sundress",
    category: "Casual Wear",
    price: 1250,
    image: "https://n.nordstrommedia.com/it/4eac1274-802a-4712-9f68-c34b98ec7c4e.jpeg?h=368&w=240&dpr=2",
    description: "Lightweight cotton dress for everyday comfort."
  },
  {
    id: 4,
    name: "Luxury Chiffon Party Suit",
    category: "Party Dresses",
    price: 6500,
    image: "https://tse4.mm.bing.net/th/id/OIP.yET3SY6G1vtVCDZRqiOabgHaKT?cb=ucfimg2&ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3",
    description: "Premium pink chiffon party wear with delicate stone work and dupatta."
  },
  {
    id: 5,
    name: "Boho Lace Midi",
    category: "Summer Collection",
    price: 2100,
    image: "https://tse1.explicit.bing.net/th/id/OIP.P8mM89TTGSEh2OediUquKwHaLH?cb=ucfimg2&ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3",
    description: "Vintage-inspired lace details with a comfortable fit."
  },
  {
    id: 6,
    name: "Denim Pinafore",
    category: "Casual Wear",
    price: 1550,
    image: "https://picsum.photos/seed/dress6/600/800",
    description: "Classic denim pinafore, styles perfectly with a tee."
  },
  {
    id: 7,
    name: "Silk Scarf",
    category: "Accessories",
    price: 650,
    image: "https://picsum.photos/seed/acc1/600/800",
    description: "100% silk scarf to add a pop of color."
  },
  {
    id: 8,
    name: "Pearl Hair Clips",
    category: "Accessories",
    price: 350,
    image: "https://picsum.photos/seed/acc2/600/800",
    description: "Set of 3 pearl-adorned hair clips."
  },
   {
    id: 9,
    name: "tshirt",
    category: "Summer Collection",
    price: 450,
    image: "https://th.bing.com/th/id/R.ec4da48c00d2154596f7f3e77eaa6298?rik=R3ddQrszW7SsZQ&pid=ImgRaw&r=0",
    description: "Girl's tshirt"
  }
];