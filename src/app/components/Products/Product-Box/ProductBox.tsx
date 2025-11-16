"use-client";

import ProductGrid from "./ProductGrid";
import ProductMinimal from "./ProductMininmal";

export default function ProductBox() {
  return (
    <div className="product-box">
      <ProductMinimal></ProductMinimal>
      {/* <ProductFeatured></ProductFeatured> */}
      <ProductGrid></ProductGrid>
    </div>
  );
}
