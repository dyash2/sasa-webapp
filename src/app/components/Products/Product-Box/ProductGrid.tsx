"use client";
import { IoStar } from "react-icons/io5";
import Link from "next/link";

const products = [
  {
    title: "Mens Winter Leathers Jackets",
    category: "jacket",
    defaultImg: "/images/products/jacket-3.jpg",
    hoverImg: "/images/products/jacket-4.jpg",
    badge: "15%",
    badgeClass: "",
    currentPrice: "$48.00",
    oldPrice: "$75.00",
    rating: 3,
  },
  {
    title: "Pure Garment Dyed Cotton Shirt",
    category: "shirt",
    defaultImg: "/images/products/shirt-1.jpg",
    hoverImg: "/images/products/shirt-2.jpg",
    badge: "sale",
    badgeClass: "angle black",
    currentPrice: "$45.00",
    oldPrice: "$56.00",
    rating: 3,
  },
  {
    title: "MEN Yarn Fleece Full-Zip Jacket",
    category: "Jacket",
    defaultImg: "/images/products/jacket-5.jpg",
    hoverImg: "/images/products/jacket-6.jpg",
    badge: null,
    badgeClass: "",
    currentPrice: "$58.00",
    oldPrice: "$65.00",
    rating: 3,
  },
  {
    title: "Black Floral Wrap Midi Skirt",
    category: "skirt",
    defaultImg: "/images/products/clothes-3.jpg",
    hoverImg: "/images/products/clothes-4.jpg",
    badge: "new",
    badgeClass: "angle pink",
    currentPrice: "$25.00",
    oldPrice: "$35.00",
    rating: 5,
  },
  {
    title: "Casual Men's Brown shoes",
    category: "casual",
    defaultImg: "/images/products/shoe-2.jpg",
    hoverImg: "/images/products/shoe-2_1.jpg",
    badge: null,
    badgeClass: "",
    currentPrice: "$99.00",
    oldPrice: "$105.00",
    rating: 5,
  },
  {
    title: "Pocket Watch Leather Pouch",
    category: "watches",
    defaultImg: "/images/products/watch-3.jpg",
    hoverImg: "/images/products/watch-4.jpg",
    badge: "sale",
    badgeClass: "angle black",
    currentPrice: "$150.00",
    oldPrice: "$170.00",
    rating: 3,
  },
  {
    title: "Smart watche Vital Plus",
    category: "watches",
    defaultImg: "/images/products/watch-1.jpg",
    hoverImg: "/images/products/watch-2.jpg",
    badge: null,
    badgeClass: "",
    currentPrice: "$100.00",
    oldPrice: "$120.00",
    rating: 4,
  },
  {
    title: "Womens Party Wear Shoes",
    category: "party wear",
    defaultImg: "/images/products/party-wear-1.jpg",
    hoverImg: "/images/products/party-wear-2.jpg",
    badge: "sale",
    badgeClass: "angle black",
    currentPrice: "$25.00",
    oldPrice: "$30.00",
    rating: 3,
  },
  {
    title: "Mens Winter Leathers Jackets",
    category: "jacket",
    defaultImg: "/images/products/jacket-1.jpg",
    hoverImg: "/images/products/jacket-2.jpg",
    badge: null,
    badgeClass: "",
    currentPrice: "$32.00",
    oldPrice: "$45.00",
    rating: 4,
  },
  {
    title: "Trekking & Running Shoes - black",
    category: "sports",
    defaultImg: "/images/products/sports-2.jpg",
    hoverImg: "/images/products/sports-4.jpg",
    badge: "sale",
    badgeClass: "angle black",
    currentPrice: "$58.00",
    oldPrice: "$64.00",
    rating: 3,
  },
  {
    title: "Men's Leather Formal Wear shoes",
    category: "formal",
    defaultImg: "/images/products/shoe-1.jpg",
    hoverImg: "/images/products/shoe-1_1.jpg",
    badge: null,
    badgeClass: "",
    currentPrice: "$50.00",
    oldPrice: "$65.00",
    rating: 4,
  },
  {
    title: "Better Basics French Terry Sweatshorts",
    category: "shorts",
    defaultImg: "/images/products/shorts-1.jpg",
    hoverImg: "/images/products/shorts-2.jpg",
    badge: "sale",
    badgeClass: "angle black",
    currentPrice: "$78.00",
    oldPrice: "$85.00",
    rating: 3,
  },
];

const renderStars = (rating: number) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    stars.push(
      <IoStar
        key={i}
        className={i <= rating ? "text-yellow-500" : "text-gray-300"}
      />
    );
  }
  return stars;
};

export default function ProductGrid() {
  // const router = useRouter(); // Not needed with Link component

  return (
    <div className="product-main">
      <h2 className="title">New Products</h2>
      <div className="product-grid">
        {products.map((product, index) => (
          <div className="showcase" key={index}>
            <div className="showcase-banner">
              {/* ... (image and badge elements) ... */}
              <img
                src={product.defaultImg}
                alt={product.title}
                width="300"
                className="product-img default"
              />
              <img
                src={product.hoverImg}
                alt={product.title}
                width="300"
                className="product-img hover"
              />
              {product.badge && (
                <p className={`showcase-badge ${product.badgeClass}`}>
                  {product.badge}
                </p>
              )}
              <div className="showcase-actions">
                {/* ... (action buttons) ... */}
              </div>
            </div>

            <div className="showcase-content">
              <a href="#" className="showcase-category">
                {product.category}
              </a>
              
              {/* --- 🔑 Key Change: Using Link to pass data --- */}
              <Link
                // Pass the entire product object in the 'query' property
                href={{
                  pathname: "/product",
                  query: {
                    data: JSON.stringify(product), // Stringify the product data
                  },
                }}
                className="showcase-title cursor-pointer"
              >
                <h3>{product.title}</h3>
              </Link>
              {/* ----------------------------------------------- */}
              
              <div className="showcase-rating">
                {renderStars(product.rating)}
              </div>
              <div className="price-box">
                <p className="price">{product.currentPrice}</p>
                <del>{product.oldPrice}</del>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
