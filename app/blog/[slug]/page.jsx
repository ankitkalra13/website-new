import blogPosts from '../../../lib/blogs.json';
import { notFound } from 'next/navigation';
import BlogDetailClient from './BlogDetailClient.jsx';

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default function BlogDetailPage({ params }) {
  const blog = blogPosts.find((post) => post.slug === params.slug);
  if (!blog) return notFound();

  const latestBlogs = blogPosts
    .filter((post) => post.slug !== params.slug)
    .slice(0, 3); // Show top 5 latest blogs excluding current

  return <BlogDetailClient blog={blog} latestBlogs={latestBlogs} />;
}

