"use client";

import ProductBox from "./Product-Box/ProductBox";
import ProductSidebar from "./Sidebar";
import { Suspense } from "react";

export default function Product() {
  return (
    <Suspense fallback={<div className="text-center py-10">Loading products...</div>}>
      <div className="product-container">
        <div className="container">
          <ProductBox />
          <ProductSidebar />
        </div>
      </div>
    </Suspense>
  );
}
