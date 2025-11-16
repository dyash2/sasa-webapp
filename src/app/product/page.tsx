"use client";

import React, { Suspense } from "react";
import ProductPageComponent from "./ProductPageComponent";

export default function ProductPage() {
  return (
    <Suspense fallback={<div className="text-center py-10">Loading...</div>}>
      <ProductPageComponent />
    </Suspense>
  );
}
