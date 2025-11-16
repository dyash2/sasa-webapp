"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function NotificationToast() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShow(false), 5000); // auto hide
    return () => clearTimeout(timer);
  }, []);

  if (!show) return null;

  return (
    <div className="notification-toast" data-toast>

      <button
        className="toast-close-btn"
        data-toast-close
        onClick={() => setShow(false)}
      >
        ✖
      </button>

      <div className="toast-banner">
        <Image
          src="/images/products/jewellery-1.jpg"
          alt="Rose Gold Earrings"
          width={80}
          height={70}
        />
      </div>

      <div className="toast-detail">
        <p className="toast-message">Someone just bought</p>
        <p className="toast-title">Rose Gold Earrings</p>
        <p className="toast-meta">
          <time>2 Minutes</time> ago
        </p>
      </div>

    </div>
  );
}
