"use client";
import Testimonial from "./Testimonial";
import CTA from "./CTA";
import Services from "./Services";

export default function TestimonialsCTAService() {
  return (
    <div className="container">
      <div className="testimonials-box">
        <Testimonial />
        <CTA />
        <Services />
      </div>
    </div>
  );
}
