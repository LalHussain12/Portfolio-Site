import { db } from "./db";
import { projects, testimonials, blogPosts } from "@shared/schema";

async function seed() {
  console.log("🌱 Seeding database...");

  // Clear existing data
  await db.delete(projects);
  await db.delete(testimonials);
  await db.delete(blogPosts);

  // Seed projects
  await db.insert(projects).values([
    {
      title: "Fashion Store",
      description: "Custom WooCommerce store with advanced filtering, wishlist functionality, and payment integration.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&w=600&h=400&fit=crop",
      liveUrl: "#",
      githubUrl: "#",
      technologies: ["WordPress", "WooCommerce", "Elementor"],
      featured: true,
    },
    {
      title: "Restaurant Chain",
      description: "Multi-location restaurant website with online reservations, menu management, and delivery integration.",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&w=600&h=400&fit=crop",
      liveUrl: "#",
      githubUrl: "#",
      technologies: ["WordPress", "ACF", "Custom Theme"],
      featured: true,
    },
    {
      title: "Tech Startup",
      description: "Modern corporate website with custom animations, team profiles, and lead generation forms.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&w=600&h=400&fit=crop",
      liveUrl: "#",
      githubUrl: "#",
      technologies: ["WordPress", "Gutenberg", "Contact Form 7"],
      featured: true,
    },
    {
      title: "Digital Magazine",
      description: "Content-rich magazine website with advanced search, author profiles, and subscription management.",
      image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?ixlib=rb-4.0.3&w=600&h=400&fit=crop",
      liveUrl: "#",
      githubUrl: "#",
      technologies: ["WordPress", "Custom Post Types", "Membership"],
      featured: false,
    },
    {
      title: "Property Portal",
      description: "Real estate platform with property listings, advanced filters, and agent management system.",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&w=600&h=400&fit=crop",
      liveUrl: "#",
      githubUrl: "#",
      technologies: ["WordPress", "WP Real Estate", "Maps API"],
      featured: false,
    },
    {
      title: "Learning Platform",
      description: "E-learning platform with course management, student progress tracking, and certification system.",
      image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-4.0.3&w=600&h=400&fit=crop",
      liveUrl: "#",
      githubUrl: "#",
      technologies: ["WordPress", "LearnDash", "BuddyPress"],
      featured: false,
    },
  ]);

  // Seed testimonials
  await db.insert(testimonials).values([
    {
      name: "Sarah Johnson",
      position: "CEO",
      company: "TechStart Inc.",
      content: "Lal delivered an exceptional WordPress solution for our e-commerce store. His attention to detail and technical expertise exceeded our expectations. The site loads incredibly fast and conversions have increased by 40%.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&w=100&h=100&fit=crop",
      rating: 5,
      featured: true,
    },
    {
      name: "Michael Chen",
      position: "Marketing Director",
      company: "Digital Dynamics",
      content: "Working with Lal was a game-changer for our business. He transformed our outdated website into a modern, responsive platform that perfectly represents our brand. The project was completed on time and within budget.",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&w=100&h=100&fit=crop",
      rating: 5,
      featured: true,
    },
    {
      name: "Emily Rodriguez",
      position: "Founder",
      company: "Creative Solutions",
      content: "Lal's expertise in WordPress development is unmatched. He built us a custom e-learning platform that handles thousands of users seamlessly. His ongoing support has been invaluable to our growth.",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612c7c0?ixlib=rb-4.0.3&w=100&h=100&fit=crop",
      rating: 5,
      featured: true,
    },
    {
      name: "David Thompson",
      position: "Operations Manager",
      company: "Restaurant Group",
      content: "The multi-location restaurant website Lal developed for us has streamlined our operations significantly. Online reservations have increased by 60%, and the management dashboard makes everything so much easier.",
      avatar: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&w=100&h=100&fit=crop",
      rating: 5,
      featured: false,
    }
  ]);

  // Seed blog posts
  await db.insert(blogPosts).values([
    {
      title: "10 WordPress Performance Tips That Actually Work",
      excerpt: "Discover proven techniques to dramatically improve your WordPress site speed and boost your search engine rankings with these actionable optimization strategies.",
      content: "Full blog post content here...",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&w=600&h=400&fit=crop",
      slug: "wordpress-performance-tips",
      tags: ["WordPress", "Performance", "SEO"],
      readTime: 8,
      published: true,
      publishedAt: new Date(),
    },
    {
      title: "The Complete Guide to WooCommerce Optimization",
      excerpt: "Learn how to optimize your WooCommerce store for better conversion rates, faster checkout, and improved user experience with these expert techniques.",
      content: "Full blog post content here...",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&w=600&h=400&fit=crop",
      slug: "woocommerce-optimization-guide",
      tags: ["WooCommerce", "E-commerce", "Optimization"],
      readTime: 12,
      published: true,
      publishedAt: new Date(),
    },
    {
      title: "WordPress Security Best Practices for 2024",
      excerpt: "Protect your WordPress site from threats with these essential security measures and best practices recommended by experts in the field.",
      content: "Full blog post content here...",
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&w=600&h=400&fit=crop",
      slug: "wordpress-security-best-practices",
      tags: ["WordPress", "Security", "Best Practices"],
      readTime: 10,
      published: true,
      publishedAt: new Date(),
    }
  ]);

  console.log("✅ Database seeded successfully!");
  process.exit(0);
}

seed().catch((error) => {
  console.error("❌ Seeding failed:", error);
  process.exit(1);
});