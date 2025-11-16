"use client";

import Image from "next/image";

export default function Category() {
  const categories = [
    { img: "/images/icons/dress.svg", title: "Dress & frock", count: 53 },
    { img: "/images/icons/coat.svg", title: "Winter wear", count: 58 },
    { img: "/images/icons/glasses.svg", title: "Glasses & lens", count: 68 },
    { img: "/images/icons/shorts.svg", title: "Shorts & jeans", count: 84 },
    { img: "/images/icons/tee.svg", title: "T-shirts", count: 35 },
    { img: "/images/icons/jacket.svg", title: "Jacket", count: 16 },
    { img: "/images/icons/watch.svg", title: "Watch", count: 27 },
    { img: "/images/icons/hat.svg", title: "Hat & caps", count: 39 },
  ];

  return (
    <section className="category">
      <div className="container">
        <div className="category-item-container has-scrollbar">

          {categories.map((cat, index) => (
            <div className="category-item" key={index}>
              
              <div className="category-img-box">
                <Image
                  src={cat.img}
                  alt={cat.title}
                  width={30}
                  height={30}
                />
              </div>

              <div className="category-content-box">
                
                <div className="category-content-flex">
                  <h3 className="category-item-title">{cat.title}</h3>
                  <p className="category-item-amount">({cat.count})</p>
                </div>

                <a href="#" className="category-btn">Show all</a>

              </div>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
