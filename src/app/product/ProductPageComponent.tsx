"use client";

import { useSearchParams, useRouter } from "next/navigation";
import React, { useState } from "react";
import { IoStar } from "react-icons/io5";
import { FaPlus, FaMinus } from "react-icons/fa";
import { FiHeart } from "react-icons/fi";
import { useAuth } from "@clerk/nextjs";

import "../product/product-page.css";

// Define the single, unified Local Storage key to match the CartPage logic
const CART_KEY = 'sasa_unified_cart'; 

interface ProductData {
  title: string;
  category: string;
  defaultImg: string;
  currentPrice: string;
  oldPrice: string;
  rating: number;

  description?: string;
  howToUse?: string;
  note?: string;
}

const renderStars = (rating: number) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    stars.push(
      <IoStar key={i} className={`star-icon ${i <= rating ? "" : "gray"}`} />
    );
  }
  return stars;
};

export default function ProductPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const productDataString = searchParams.get("data");
  const { userId } = useAuth(); // Retained for future features/context
  const [quantity, setQuantity] = useState(1);

  let product: ProductData | null = null;

  try {
    if (productDataString) {
      const parsedProduct = JSON.parse(productDataString);

      product = {
        ...parsedProduct,
        description:
          parsedProduct.description ||
          "La Mer Moisturizing Cream contains nutrient-rich Miracle Broth™. In a short period of time, skin becomes softer and firmer. Ageing lines and pores are noticeably less visible.",
        howToUse:
          parsedProduct.howToUse ||
          "Apply on a cleansed but dry face, neck and even the eye contour in the morning and evening.",
        note:
          parsedProduct.note ||
          "***Different version will be delivered randomly.",
      };
    }
  } catch (error) {
    console.error("Error parsing product data:", error);
  }

  // --- CORRECTED Add To Cart Handler ---
  const handleAddToCart = () => {
    if (!product) return;

    const cartItem = {
      title: product.title,
      img: product.defaultImg,
      price: product.currentPrice,
      qty: quantity,
      // Ensure the ID is unique for cart list keying
      id: `${product.title.replace(/\s/g, '-')}-${Date.now()}`, 
    };

    let currentCart: any[] = [];
    
    // 1. Retrieve the existing cart from Local Storage using the unified key
    try {
      const existingCartString = localStorage.getItem(CART_KEY);
      if (existingCartString) {
        currentCart = JSON.parse(existingCartString);
      }
    } catch (e) {
      console.error("Local Storage cart corrupted.", e);
    }
    
    // Optional alert based on status
    if (userId) {
      console.log(`[USER LOGGED IN]: Item added to unified cart. User ID: ${userId}`);
    } else {
      console.log(`[GUEST MODE]: Item added to unified cart.`);
    }

    // 2. Add the new item
    currentCart.push(cartItem);

    // 3. Save the updated cart array back to Local Storage using the unified key
    localStorage.setItem(CART_KEY, JSON.stringify(currentCart));
    
    alert("Product Added to Cart!");

    // 4. Navigate to the cart page
    router.push("/cart");
  };
  // ------------------------------------

  if (!product) {
    return (
      <div className="product-page-container flex items-center justify-center">
        <div className="product-wrapper text-center p-8 max-w-lg">
          <h1 className="text-2xl font-bold text-red-600">
            Product Data Invalid or Missing
          </h1>
          <p className="mt-2 text-gray-700">
            Please check the URL or the passing logic.
          </p>
        </div>
      </div>
    );
  }

  const oldPriceNum = parseFloat(product.oldPrice.replace(/[^0-9.]/g, ""));
  const currentPriceNum = parseFloat(
    product.currentPrice.replace(/[^0-9.]/g, "")
  );

  const savedAmountNum = oldPriceNum - currentPriceNum;

  const savePercentage = ((savedAmountNum / oldPriceNum) * 100).toFixed(0);

  return (
    <div className="product-page-container">
      <div className="product-wrapper">
        <div className="product-content-flex">
          {/* LEFT SECTION: Main Product Image */}
          <div className="product-image-section">
            <img
              src={product.defaultImg}
              alt={product.title}
              className="product-image"
            />
          </div>

          {/* RIGHT SECTION: Product Details */}
          <div className="product-details-section">
            <h1 className="product-title">{product.title}</h1>

            {/* Rating and Reviews */}
            <div className="product-rating">
              <div className="flex mr-2">{renderStars(product.rating)}</div>
              <span>2 reviews</span>
            </div>

            {/* Price */}
            <div className="price-box">
              <span className="old-price">{product.oldPrice} USD</span>
              <span className="current-price">{product.currentPrice} USD</span>
            </div>

            {/* "Save" badge - NOW DYNAMIC */}
            <div className="save-badge">Save {savePercentage}%</div>

            {/* Shipping Info */}
            <p className="text-sm text-gray-500 mb-12">
              Shipping calculated at checkout.
            </p>
            <div className="promotion-box">
              Eligible for following Promotion(s).
              <br />
              The latest discount will be applied to the order and will be shown
              at the checkout page.
            </div>

            {/* Quantity Selector */}
            <div className="mb-6">
              <label htmlFor="quantity" className="quantity-selector-label">
                Quantity
              </label>
              <div className="quantity-control">
                <button
                  onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
                  className="qty-button"
                >
                  <FaMinus className="w-3 h-3" />
                </button>
                <input
                  type="text"
                  value={quantity}
                  readOnly
                  className="qty-input"
                />
                <button
                  onClick={() => setQuantity((prev) => prev + 1)}
                  className="qty-button"
                >
                  <FaPlus className="w-3 h-3" />
                </button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="action-buttons-group">
              <button className="btn-primary" onClick={handleAddToCart}>
                Add to cart
              </button>
              <button className="btn-secondary">
                <FiHeart className="w-5 h-5" /> Add to wishlist
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}