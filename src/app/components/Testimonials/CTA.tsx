"use client";
import Image from "next/image";

export default function CTA() {
  return (
    <div className="cta-container">
      <Image
        src="/images/cta-banner.jpg"
        alt="summer collection"
        width={450}
        height={300}
        className="cta-banner"
      />

      <a href="#" className="cta-content">
        <p className="discount">25% Discount</p>
        <h2 className="cta-title">Summer collection</h2>
        <p className="cta-text">Starting @ $10</p>
        <button className="cta-btn">Shop now</button>
      </a>
    </div>
  );
}
