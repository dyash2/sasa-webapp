"use client";

import React, { useState, useEffect } from "react";
import { useAuth } from "@clerk/nextjs";
import { IoCloseCircleOutline } from "react-icons/io5"; // Import the delete icon
import "../cart/Cart.css";
import ProductFeatured from "../components/Products/Product-Box/ProductFeatured";

// Use a single, unified key for all users, logged in or out.
const CART_KEY = 'sasa_unified_cart';

interface CartItemData {
  title: string;
  img: string;
  price: string;
  qty: number;
  id: string; // Used as the unique identifier for deletion
}

export default function CartPage() {
  const { userId } = useAuth(); 

  const [cartItems, setCartItems] = useState<CartItemData[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // --- Fetch Cart from Local Storage ---
  useEffect(() => {
    const fetchCartItems = () => {
      try {
        const storedCart = localStorage.getItem(CART_KEY); 
        if (storedCart) {
          setCartItems(JSON.parse(storedCart) as CartItemData[]);
        }
      } catch (e) {
        console.error("Failed to load cart from storage:", e);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCartItems();
  }, []); // Load once on component mount

  // --- DELETE HANDLER ---
  const handleRemoveItem = (itemId: string, itemTitle: string) => {
    // 1. Show confirmation alert
    const isConfirmed = window.confirm(
      `Are you sure you want to remove "${itemTitle}" from your cart?`
    );

    if (isConfirmed) {
      // 2. Filter out the item to create a new array
      const updatedCart = cartItems.filter(item => item.id !== itemId);
      
      // 3. Update state
      setCartItems(updatedCart);

      // 4. Persist the change to Local Storage
      try {
        localStorage.setItem(CART_KEY, JSON.stringify(updatedCart));
        console.log(`Item ${itemId} removed and cart updated in localStorage.`);
      } catch (e) {
        console.error("Failed to update cart in storage after removal:", e);
      }
    }
  };
  // ----------------------

  const calculateSubtotal = () => {
    return cartItems
      .reduce((total, item) => {
        const priceNum = parseFloat(item.price.replace(/[^0-9.]/g, ""));
        return total + priceNum * item.qty;
      }, 0)
      .toFixed(2);
  };

  // --- Loading State (Unchanged) ---
  if (isLoading) {
    return (
      <div className="cart-page-container">
        <div className="cart-wrapper">
          <div className="empty-cart-message">
            <h1>Loading Your Cart...</h1>
          </div>
        </div>
      </div>
    );
  }

  // --- Empty Cart State (Unchanged) ---
  if (cartItems.length === 0) {
    return (
      <div className="cart-page-container">
        <div className="cart-wrapper">
          <div className="empty-cart-message">
            <h1>Your Shopping Cart is Empty 🛒</h1>
            <p>No items have been added yet.</p>
          </div>
        </div>
        <h2 className="deal-of-the-day-title-3">OUR CUSTOMERS LOVE</h2>
        <ProductFeatured />
      </div>
    );
  }

  // --- Populated Cart View ---
  return (
    <div className="cart-page-container">
      <div className="cart-wrapper">
        <h1 className="cart-header">
          Your Cart ({cartItems.length}{" "}
          {cartItems.length === 1 ? "Item" : "Items"})
        </h1>

        <ul className="cart-list">
          {cartItems.map((cartItem) => (
            <li key={cartItem.id} className="cart-item">
              
              {/* Image */}
              <img
                src={cartItem.img}
                alt={cartItem.title}
                className="cart-item-image"
              />

              <div className="item-details">
                {/* Title */}
                <h2 className="item-title">{cartItem.title}</h2>

                {/* Price */}
                <p className="item-price">{cartItem.price} USD</p>

                {/* Quantity */}
                <p className="item-quantity">Qty: {cartItem.qty}</p>
              </div>

              {/* --- 🌟 NEW DELETE BUTTON 🌟 --- */}
              <button 
                onClick={() => handleRemoveItem(cartItem.id, cartItem.title)}
                className="remove-item-btn"
                // Inline styles for basic positioning/look if CSS class is missing
                style={{ 
                  background: 'none', 
                  border: 'none', 
                  cursor: 'pointer', 
                  color: '#b40000', 
                  marginLeft: 'auto', // Push it to the right
                  fontSize: '1.5rem',
                  padding: '5px'
                }}
                aria-label={`Remove ${cartItem.title} from cart`}
              >
                <IoCloseCircleOutline />
              </button>
              {/* ---------------------------------- */}
              
            </li>
          ))}
        </ul>

        {/* Subtotal */}
        <div
          className="pt-4 mt-4 text-right"
          style={{ borderTop: "1px solid #ddd", paddingTop: "1rem" }}
        >
          <span
            className="text-lg font-semibold text-gray-800"
            style={{ fontSize: "1.2rem", fontWeight: "bold" }}
          >
            Subtotal: ${calculateSubtotal()}
          </span>
        </div>
      </div>

      {/* Featured Products Section with Decoration */}
      <h2
        className="deal-of-the-day-title-3"
        style={{ textAlign: "center", margin: "2rem auto" }}
      >
        OUR CUSTOMERS LOVE
      </h2>
      <ProductFeatured />
    </div>
  );
}