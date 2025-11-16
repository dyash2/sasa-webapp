"use client";
import Image from "next/image";

export default function Testimonial() {
  return (
    <div className="testimonial">
      <h2 className="title">Testimonial</h2>

      <div className="testimonial-card">
        <Image
          src="/images/testimonial-1.jpg"
          alt="Nita Ambani"
          width={80}
          height={80}
          className="testimonial-banner"
        />

        <p className="testimonial-name">Alan Doe</p>
        <p className="testimonial-title">CEO & Founder Invision</p>

        <Image
          src="/images/icons/quotes.svg"
          alt="quotation"
          width={26}
          height={26}
          className="quotation-img"
        />

        <p className="testimonial-desc">
          Lorem ipsum dolor sit amet consectetur Lorem ipsum
          dolor dolor sit amet.
        </p>
      </div>
    </div>
  );
}
