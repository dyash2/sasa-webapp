import Image from "next/image";

interface BlogCardProps {
  img: string;
  category: string;
  title: string;
  author: string;
  date: string;
}

export default function BlogCard({
  img,
  category,
  title,
  author,
  date,
}: BlogCardProps) {
  return (
    <div className="blog-card">

      <a href="#">
        <Image
          src={img}
          alt={title}
          width={300}
          height={200}
          className="blog-banner"
        />
      </a>

      <div className="blog-content">

        <a href="#" className="blog-category">{category}</a>

        <a href="#">
          <h3 className="blog-title">{title}</h3>
        </a>

        <p className="blog-meta">
          By <cite>{author}</cite> / <time>{date}</time>
        </p>

      </div>

    </div>
  );
}
