"use client";

import { useSearchParams } from "next/navigation";
import React from "react";
// Import the custom CSS file
import "./Blog.css";

interface BlogData {
  img: string;
  category: string;
  title: string;
  author: string;
  date: string;
}

// Placeholder content for the main article body
const LOREM_IPSUM_CONTENT = {
  p1: "The fashion world is undergoing a seismic shift, driven by increasing consumer awareness regarding environmental and social impact. This change is particularly pronounced in the high-end streetwear segment, where exclusivity and ethical sourcing are starting to converge. What was once a niche movement has rapidly become a central design imperative, pushing major brands to rethink their supply chains and material usage, from raw material cultivation to garment disposal.",
  p2: "Central to this evolution is the integration of sustainable fabrics. Materials like Tencel, organic cotton, recycled polyester (made from plastic bottles), and innovative synthetic fibers derived from ocean waste are now staples in collections previously dominated by conventional synthetics. This not only significantly reduces the ecological footprint but also opens up new avenues for texture, drape, and durability, challenging the old notion that eco-friendly must inherently mean less luxurious or fashionable.",
  p3: "As regulatory pressures increase and Gen Z consumers prioritize conscious consumption, the trend is poised to accelerate globally. The future of contemporary style is inextricably linked to traceability and transparency. Consumers demand to know the origin of their garments, and brands are responding by embedding digital tracking into their products. This definitive move towards full disclosure solidifies sustainability as a non-negotiable benchmark for modern luxury and street culture alike, promising a more responsible industry.",
};

export default function BlogDetailPage() {
  const searchParams = useSearchParams();
  const blogDataString = searchParams.get("data");

  let blogPost: BlogData | null = null;

  try {
    if (blogDataString) {
      blogPost = JSON.parse(blogDataString) as BlogData;
    }
  } catch (error) {
    console.error("Error parsing blog data:", error);
  }

  // --- Loading/Error State ---
  if (!blogPost) {
    return (
      <div className="blog-detail-container">
        <div className="text-center py-20">
          <h1 className="text-3xl font-bold text-red-600">
            Blog Post Not Found
          </h1>
          <p className="mt-4 text-gray-600">
            The article data is missing or corrupted. Please navigate back to
            the blog list.
          </p>
        </div>
      </div>
    );
  }

  // --- Successful Render ---
  return (
    <div className="blog-detail-container">
      {/* Article Header */}
      <header className="blog-header">
        <span className="blog-category">{blogPost.category}</span>
        <h1 className="blog-title">{blogPost.title}</h1>
        <div className="blog-metadata">
          <span>By: {blogPost.author}</span>
          <span className="metadata-separator"></span>
          <span>Published: {blogPost.date}</span>
        </div>
      </header>

      {/* Featured Image */}
      <img
        src={blogPost.img}
        alt={blogPost.title}
        className="blog-feature-img"
        onError={(e) => {
          // Placeholder fallback in case the image path is broken
          (
            e.target as HTMLImageElement
          ).src = `https://placehold.co/1000x500/E5E7EB/4B5563?text=Article+Image`;
        }}
      />

      {/* Article Content */}
      <div className="blog-content">
        <p>{LOREM_IPSUM_CONTENT.p1}</p>
        <p>{LOREM_IPSUM_CONTENT.p2}</p>
        <p>{LOREM_IPSUM_CONTENT.p3}</p>
      </div>
    </div>
  );
}
