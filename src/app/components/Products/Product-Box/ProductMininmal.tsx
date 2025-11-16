import React from 'react';
import Link from 'next/link'; 

interface ProductData {
  id: number;
  title: string;
  category: string;
  defaultImg: string; 
  currentPrice: string; 
  oldPrice: string;
  rating: number; 
  
}

const getRating = (index: number) => {
    
    if (index % 5 === 0) return 5;
    if (index % 4 === 0) return 4;
    return 3;
};

const newArrivalsData: ProductData[] = [
  { id: 1, title: "Relaxed Short full Sleeve T-Shirt", category: "Clothes", defaultImg: "/images/products/clothes-1.jpg", currentPrice: "$45.00", oldPrice: "$12.00", rating: getRating(1) },
  { id: 2, title: "Girls pnk Embro design Top", category: "Clothes", defaultImg: "/images/products/clothes-2.jpg", currentPrice: "$61.00", oldPrice: "$9.00", rating: getRating(2) },
  { id: 3, title: "Black Floral Wrap Midi Skirt", category: "Clothes", defaultImg: "/images/products/clothes-3.jpg", currentPrice: "$76.00", oldPrice: "$25.00", rating: getRating(3) },
  { id: 4, title: "Pure Garment Dyed Cotton Shirt", category: "Mens Fashion", defaultImg: "/images/products/shirt-1.jpg", currentPrice: "$68.00", oldPrice: "$31.00", rating: getRating(4) },
  { id: 5, title: "MEN Yarn Fleece Full-Zip Jacket", category: "Winter wear", defaultImg: "/images/products/jacket-5.jpg", currentPrice: "$61.00", oldPrice: "$11.00", rating: getRating(5) },
  { id: 6, title: "Mens Winter Leathers Jackets", category: "Winter wear", defaultImg: "/images/products/jacket-1.jpg", currentPrice: "$32.00", oldPrice: "$20.00", rating: getRating(6) },
  { id: 7, title: "Mens Winter Leathers Jackets", category: "Jackets", defaultImg: "/images/products/jacket-3.jpg", currentPrice: "$50.00", oldPrice: "$25.00", rating: getRating(7) },
  { id: 8, title: "Better Basics French Terry Sweatshorts", category: "Shorts", defaultImg: "/images/products/shorts-1.jpg", currentPrice: "$20.00", oldPrice: "$10.00", rating: getRating(8) },
];

const trendingData: ProductData[] = [
  { id: 9, title: "Running & Trekking Shoes - White", category: "Sports", defaultImg: "/images/products/sports-1.jpg", currentPrice: "$49.00", oldPrice: "$15.00", rating: getRating(9) },
  { id: 10, title: "Trekking & Running Shoes - black", category: "Sports", defaultImg: "/images/products/sports-2.jpg", currentPrice: "$78.00", oldPrice: "$36.00", rating: getRating(10) },
  { id: 11, title: "Womens Party Wear Shoes", category: "Party wear", defaultImg: "/images/products/party-wear-1.jpg", currentPrice: "$94.00", oldPrice: "$42.00", rating: getRating(11) },
  { id: 12, title: "Sports Claw Women's Shoes", category: "Sports", defaultImg: "/images/products/sports-3.jpg", currentPrice: "$54.00", oldPrice: "$65.00", rating: getRating(12) },
  { id: 13, title: "Air Trekking Shoes - white", category: "Sports", defaultImg: "/images/products/sports-6.jpg", currentPrice: "$52.00", oldPrice: "$55.00", rating: getRating(13) },
  { id: 14, title: "Boot With Suede Detail", category: "boots", defaultImg: "/images/products/shoe-3.jpg", currentPrice: "$20.00", oldPrice: "$30.00", rating: getRating(14) },
  { id: 15, title: "Men's Leather Formal Wear shoes", category: "formal", defaultImg: "/images/products/shoe-1.jpg", currentPrice: "$56.00", oldPrice: "$78.00", rating: getRating(15) },
  { id: 16, title: "Casual Men's Brown shoes", category: "Casual", defaultImg: "/images/products/shoe-2.jpg", currentPrice: "$50.00", oldPrice: "$55.00", rating: getRating(16) },
];

const topRatedData: ProductData[] = [
  { id: 17, title: "Pocket Watch Leather Pouch", category: "Watches", defaultImg: "/images/products/watch-3.jpg", currentPrice: "$50.00", oldPrice: "$34.00", rating: getRating(17) },
  { id: 18, title: "Silver Deer Heart Necklace", category: "Jewellery", defaultImg: "/images/products/jewellery-3.jpg", currentPrice: "$84.00", oldPrice: "$30.00", rating: getRating(18) },
  { id: 19, title: "Titan 100 Ml Womens Perfume", category: "Perfume", defaultImg: "/images/products/perfume.jpg", currentPrice: "$42.00", oldPrice: "$10.00", rating: getRating(19) },
  { id: 20, title: "Men's Leather Reversible Belt", category: "Belt", defaultImg: "/images/products/belt.jpg", currentPrice: "$24.00", oldPrice: "$10.00", rating: getRating(20) },
  { id: 21, title: "platinum Zircon Classic Ring", category: "jewellery", defaultImg: "/images/products/jewellery-2.jpg", currentPrice: "$62.00", oldPrice: "$65.00", rating: getRating(21) },
  { id: 22, title: "Smart watche Vital Plus", category: "Watches", defaultImg: "/images/products/watch-1.jpg", currentPrice: "$56.00", oldPrice: "$78.00", rating: getRating(22) },
  { id: 23, title: "shampoo conditioner packs", category: "cosmetics", defaultImg: "/images/products/shampoo.jpg", currentPrice: "$20.00", oldPrice: "$30.00", rating: getRating(23) },
  { id: 24, title: "Rose Gold Peacock Earrings", category: "jewellery", defaultImg: "/images/products/jewellery-1.jpg", currentPrice: "$20.00", oldPrice: "$30.00", rating: getRating(24) },
];




interface ShowcaseProps {
  product: ProductData;
}

const Showcase: React.FC<ShowcaseProps> = ({ product }) => (
  <div className="showcase">
    <a href="#" className="showcase-img-box">
      <img 
        src={product.defaultImg} 
        alt={product.title.toLowerCase()} 
        width="70" 
        className="showcase-img" 
      />
    </a>

    <div className="showcase-content">
      <a href="#" className="showcase-category">{product.category}</a>
      
      {/* --- 🔑 NEW: Link Component Logic --- */}
      <Link
        href={{
          pathname: "/product",
          query: {
            
            data: JSON.stringify(product), 
          },
        }}
        className="showcase-title cursor-pointer"
      >
        <h4 className="showcase-title">{product.title}</h4>
      </Link>
      {/* ------------------------------------ */}
      
      <div className="price-box">
        <p className="price">{product.currentPrice}</p>
        <del>{product.oldPrice}</del>
      </div>
    </div>
  </div>
);




interface ProductSectionProps {
  title: string;
  data: ProductData[];
}


const ProductSection: React.FC<ProductSectionProps> = ({ title, data }) => {
  
  const container1Data = data.slice(0, 4);
  const container2Data = data.slice(4, 8);

  return (
    <div className="product-showcase">
      <h2 className="title">{title}</h2>
      <div className="showcase-wrapper has-scrollbar">
        
        {/* First Column/Container */}
        <div className="showcase-container">
          {container1Data.map(product => (
            <Showcase key={product.id} product={product} />
          ))}
        </div>
        
        {/* Second Column/Container */}
        <div className="showcase-container">
          {container2Data.map(product => (
            <Showcase key={product.id} product={product} />
          ))}
        </div>
        
      </div>
    </div>
  );
};


export default function ProductMinimal() {
  return (
    <div className="product-minimal">
      
      {/* New Arrivals Section */}
      <ProductSection title="New Arrivals" data={newArrivalsData} />

      {/* Trending Section */}
      <ProductSection title="Trending" data={trendingData} />

      {/* Top Rated Section */}
      <ProductSection title="Top Rated" data={topRatedData} />

    </div>
  );
}