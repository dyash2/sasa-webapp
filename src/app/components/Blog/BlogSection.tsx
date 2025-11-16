import BlogCard from "./BlogCard";
import Link from "next/link";

export default function BlogSection() {
  const blogs = [
    {
      img: "/images/blog-1.jpg",
      category: "Fashion",
      title: "The Rise of Sustainable Fabrics in High-End Streetwear.",
      author: "Ms. Evelyn Reed",
      date: "Oct 28, 2024",
    },
    {
      img: "/images/blog-2.jpg",
      category: "Clothes",
      title: "Decoding the Latest Trends in Minimalist Capsule Wardrobes.",
      author: "Dr. Alex Chen",
      date: "Sep 01, 2024",
    },
    {
      img: "/images/blog-3.jpg",
      category: "Shoes",
      title: "Sneaker Culture's Impact on Modern Athletic Shoe Design.",
      author: "Mr. Julian Vance",
      date: "Nov 15, 2024",
    },
    {
      img: "/images/blog-4.jpg",
      category: "Electronics",
      title: "Wearable Tech Integration: Style Meets Smart Functionality.",
      author: "Mx. Riley K.",
      date: "Aug 10, 2024",
    },
  ];

  return (
    <div className="blog">
      <div className="container">
        <div className="blog-container has-scrollbar">
          {blogs.map((item, index) => (
            <Link
              key={index}
              href={{
                pathname: "/blog",
                query: {
                  data: JSON.stringify(item),
                },
              }}
              style={{ display: "block", textDecoration: "none" }}
            >
              <BlogCard
                img={item.img}
                category={item.category}
                title={item.title}
                author={item.author}
                date={item.date}
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
