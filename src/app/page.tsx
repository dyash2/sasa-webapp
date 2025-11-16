import Banner from "./components/Banner";
import BlogSection from "./components/Blog/BlogSection";
import Category from "./components/Category";
import Product from "./components/Products/Product";
import TestimonialsCTAService from "./components/Testimonials/TestimonialsCTAService";
import NotificationToast from "./components/Notification/NotificationToast";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <NotificationToast />
      {/* Existing Content */}
      <Banner></Banner>
      <Category></Category>
      <Product></Product>
      <div style={{ height: "10px" }}></div>
      <TestimonialsCTAService></TestimonialsCTAService>
      <BlogSection></BlogSection>
      {/* <img
        src="/images/banner-2.jpg"
        alt="modern sunglasses"
        className="w-full h-[420px] object-cover"
      /> */}
    </div>
  );
}
