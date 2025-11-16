import ProductBox from "./Product-Box/ProductBox";
import ProuductSidebar from "./Sidebar";

export default function Product() {
  return (
    <div className="product-container">
      <div className="container">
        <ProductBox></ProductBox>
        <ProuductSidebar></ProuductSidebar>
      </div>
    </div>
  );
}
