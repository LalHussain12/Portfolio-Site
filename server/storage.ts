import { type Project, type InsertProject, type Testimonial, type InsertTestimonial, type BlogPost, type InsertBlogPost, type ContactMessage, type InsertContactMessage } from "@shared/schema";
import { projects, testimonials, blogPosts, contactMessages } from "@shared/schema";
import { db } from "./db";
import { eq } from "drizzle-orm";
import { randomUUID } from "crypto";

export interface IStorage {
  // Projects
  getProjects(): Promise<Project[]>;
  getFeaturedProjects(): Promise<Project[]>;
  getProject(id: string): Promise<Project | undefined>;
  createProject(project: InsertProject): Promise<Project>;

  // Testimonials
  getTestimonials(): Promise<Testimonial[]>;
  getFeaturedTestimonials(): Promise<Testimonial[]>;
  createTestimonial(testimonial: InsertTestimonial): Promise<Testimonial>;

  // Blog Posts
  getBlogPosts(): Promise<BlogPost[]>;
  getPublishedBlogPosts(): Promise<BlogPost[]>;
  getBlogPost(slug: string): Promise<BlogPost | undefined>;
  createBlogPost(blogPost: InsertBlogPost): Promise<BlogPost>;

  // Contact Messages
  getContactMessages(): Promise<ContactMessage[]>;
  createContactMessage(message: InsertContactMessage): Promise<ContactMessage>;
}

export class MemStorage implements IStorage {
  private projects: Map<string, Project>;
  private testimonials: Map<string, Testimonial>;
  private blogPosts: Map<string, BlogPost>;
  private contactMessages: Map<string, ContactMessage>;

  constructor() {
    this.projects = new Map();
    this.testimonials = new Map();
    this.blogPosts = new Map();
    this.contactMessages = new Map();

    // Initialize with sample data
    this.initializeSampleData();
  }

  private initializeSampleData() {
    // Sample Projects
    const sampleProjects: Project[] = [
      {
        id: "1",
        title: "Fashion Store",
        description: "Custom WooCommerce store with advanced filtering, wishlist functionality, and payment integration.",
        image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&w=600&h=400&fit=crop",
        liveUrl: "#",
        githubUrl: "#",
        technologies: ["WordPress", "WooCommerce", "Elementor"],
        featured: true,
        createdAt: new Date(),
      },
      {
        id: "2",
        title: "Restaurant Chain",
        description: "Multi-location restaurant website with online reservations, menu management, and delivery integration.",
        image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&w=600&h=400&fit=crop",
        liveUrl: "#",
        githubUrl: "#",
        technologies: ["WordPress", "ACF", "Custom Theme"],
        featured: true,
        createdAt: new Date(),
      },
      {
        id: "3",
        title: "Tech Startup",
        description: "Modern corporate website with custom animations, team profiles, and lead generation forms.",
        image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&w=600&h=400&fit=crop",
        liveUrl: "#",
        githubUrl: "#",
        technologies: ["WordPress", "Gutenberg", "Contact Form 7"],
        featured: true,
        createdAt: new Date(),
      },
      {
        id: "4",
        title: "Digital Magazine",
        description: "Content-rich magazine website with advanced search, author profiles, and subscription management.",
        image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?ixlib=rb-4.0.3&w=600&h=400&fit=crop",
        liveUrl: "#",
        githubUrl: "#",
        technologies: ["WordPress", "Custom Post Types", "Membership"],
        featured: false,
        createdAt: new Date(),
      },
      {
        id: "5",
        title: "Property Portal",
        description: "Real estate platform with property listings, advanced filters, and agent management system.",
        image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&w=600&h=400&fit=crop",
        liveUrl: "#",
        githubUrl: "#",
        technologies: ["WordPress", "WP Real Estate", "Maps API"],
        featured: false,
        createdAt: new Date(),
      },
      {
        id: "6",
        title: "Learning Platform",
        description: "E-learning platform with course management, student progress tracking, and certification system.",
        image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-4.0.3&w=600&h=400&fit=crop",
        liveUrl: "#",
        githubUrl: "#",
        technologies: ["WordPress", "LearnDash", "BuddyPress"],
        featured: false,
        createdAt: new Date(),
      },
    ];

    // Sample Testimonials
    const sampleTestimonials: Testimonial[] = [
      {
        id: "1",
        name: "Sarah Johnson",
        position: "CEO",
        company: "TechStart Inc.",
        content: "Lal delivered an exceptional WordPress solution for our e-commerce store. His attention to detail and technical expertise exceeded our expectations. The site loads incredibly fast and conversions have increased by 40%.",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&w=100&h=100&fit=crop",
        rating: 5,
        featured: true,
        createdAt: new Date(),
      },
      {
        id: "2",
        name: "Maria Rodriguez",
        position: "Owner",
        company: "Bella Vista Restaurant",
        content: "Working with Lal was a game-changer for our restaurant business. He created a beautiful, functional website that handles our online reservations seamlessly. Professional, responsive, and highly skilled!",
        avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b17c?ixlib=rb-4.0.3&w=100&h=100&fit=crop",
        rating: 5,
        featured: true,
        createdAt: new Date(),
      },
      {
        id: "3",
        name: "David Chen",
        position: "Marketing Director",
        company: "GrowthCo",
        content: "Lal transformed our outdated website into a modern, high-performing platform. His expertise in WordPress optimization reduced our loading time by 70%. I highly recommend his services to anyone serious about their online presence.",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&w=100&h=100&fit=crop",
        rating: 5,
        featured: true,
        createdAt: new Date(),
      },
    ];

    // Sample Blog Posts
    const sampleBlogPosts: BlogPost[] = [
      {
        id: "1",
        title: "10 WordPress Performance Tips That Actually Work",
        excerpt: "Learn proven strategies to speed up your WordPress site and improve user experience with these actionable optimization techniques.",
        content: "Full blog post content here...",
        image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&w=600&h=300&fit=crop",
        slug: "wordpress-performance-tips",
        tags: ["WordPress", "Performance"],
        readTime: 5,
        published: true,
        publishedAt: new Date("2024-03-15"),
        createdAt: new Date("2024-03-15"),
      },
      {
        id: "2",
        title: "Building Custom WooCommerce Features",
        excerpt: "A comprehensive guide to extending WooCommerce functionality with custom hooks, filters, and API integrations.",
        content: "Full blog post content here...",
        image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&w=600&h=300&fit=crop",
        slug: "custom-woocommerce-features",
        tags: ["WooCommerce", "PHP"],
        readTime: 8,
        published: true,
        publishedAt: new Date("2024-03-10"),
        createdAt: new Date("2024-03-10"),
      },
      {
        id: "3",
        title: "WordPress Security Best Practices in 2024",
        excerpt: "Essential security measures every WordPress site owner should implement to protect against common vulnerabilities and attacks.",
        content: "Full blog post content here...",
        image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&w=600&h=300&fit=crop",
        slug: "wordpress-security-best-practices",
        tags: ["Security", "WordPress"],
        readTime: 6,
        published: true,
        publishedAt: new Date("2024-03-05"),
        createdAt: new Date("2024-03-05"),
      },
    ];

    // Initialize data
    sampleProjects.forEach(project => this.projects.set(project.id, project));
    sampleTestimonials.forEach(testimonial => this.testimonials.set(testimonial.id, testimonial));
    sampleBlogPosts.forEach(post => this.blogPosts.set(post.id, post));
  }

  // Projects
  async getProjects(): Promise<Project[]> {
    return Array.from(this.projects.values()).sort((a, b) => 
      new Date(b.createdAt || new Date()).getTime() - new Date(a.createdAt || new Date()).getTime()
    );
  }

  async getFeaturedProjects(): Promise<Project[]> {
    return Array.from(this.projects.values())
      .filter(project => project.featured)
      .sort((a, b) => new Date(b.createdAt || new Date()).getTime() - new Date(a.createdAt || new Date()).getTime());
  }

  async getProject(id: string): Promise<Project | undefined> {
    return this.projects.get(id);
  }

  async createProject(insertProject: InsertProject): Promise<Project> {
    const id = randomUUID();
    const project: Project = {
      ...insertProject,
      id,
      createdAt: new Date(),
      liveUrl: insertProject.liveUrl || null,
      githubUrl: insertProject.githubUrl || null,
      featured: insertProject.featured || false,
    };
    this.projects.set(id, project);
    return project;
  }

  // Testimonials
  async getTestimonials(): Promise<Testimonial[]> {
    return Array.from(this.testimonials.values()).sort((a, b) => 
      new Date(b.createdAt || new Date()).getTime() - new Date(a.createdAt || new Date()).getTime()
    );
  }

  async getFeaturedTestimonials(): Promise<Testimonial[]> {
    return Array.from(this.testimonials.values())
      .filter(testimonial => testimonial.featured)
      .sort((a, b) => new Date(b.createdAt || new Date()).getTime() - new Date(a.createdAt || new Date()).getTime());
  }

  async createTestimonial(insertTestimonial: InsertTestimonial): Promise<Testimonial> {
    const id = randomUUID();
    const testimonial: Testimonial = {
      ...insertTestimonial,
      id,
      createdAt: new Date(),
      avatar: insertTestimonial.avatar || null,
      rating: insertTestimonial.rating || 5,
      featured: insertTestimonial.featured || false,
    };
    this.testimonials.set(id, testimonial);
    return testimonial;
  }

  // Blog Posts
  async getBlogPosts(): Promise<BlogPost[]> {
    return Array.from(this.blogPosts.values()).sort((a, b) => 
      new Date(b.createdAt || new Date()).getTime() - new Date(a.createdAt || new Date()).getTime()
    );
  }

  async getPublishedBlogPosts(): Promise<BlogPost[]> {
    return Array.from(this.blogPosts.values())
      .filter(post => post.published)
      .sort((a, b) => new Date(b.createdAt || new Date()).getTime() - new Date(a.createdAt || new Date()).getTime());
  }

  async getBlogPost(slug: string): Promise<BlogPost | undefined> {
    return Array.from(this.blogPosts.values()).find(post => post.slug === slug);
  }

  async createBlogPost(insertBlogPost: InsertBlogPost): Promise<BlogPost> {
    const id = randomUUID();
    const blogPost: BlogPost = {
      ...insertBlogPost,
      id,
      createdAt: new Date(),
      published: insertBlogPost.published || false,
      publishedAt: insertBlogPost.publishedAt || null,
    };
    this.blogPosts.set(id, blogPost);
    return blogPost;
  }

  // Contact Messages
  async getContactMessages(): Promise<ContactMessage[]> {
    return Array.from(this.contactMessages.values()).sort((a, b) => 
      new Date(b.createdAt || new Date()).getTime() - new Date(a.createdAt || new Date()).getTime()
    );
  }

  async createContactMessage(insertMessage: InsertContactMessage): Promise<ContactMessage> {
    const id = randomUUID();
    const message: ContactMessage = {
      ...insertMessage,
      id,
      read: false,
      createdAt: new Date(),
      projectType: insertMessage.projectType || null,
      budget: insertMessage.budget || null,
    };
    this.contactMessages.set(id, message);
    return message;
  }
}

export class DatabaseStorage implements IStorage {
  async getProjects(): Promise<Project[]> {
    return await db.select().from(projects);
  }

  async getFeaturedProjects(): Promise<Project[]> {
    return await db.select().from(projects).where(eq(projects.featured, true));
  }

  async getProject(id: string): Promise<Project | undefined> {
    const [project] = await db.select().from(projects).where(eq(projects.id, id));
    return project || undefined;
  }

  async createProject(project: InsertProject): Promise<Project> {
    const [newProject] = await db.insert(projects).values(project).returning();
    return newProject;
  }

  async getTestimonials(): Promise<Testimonial[]> {
    return await db.select().from(testimonials);
  }

  async getFeaturedTestimonials(): Promise<Testimonial[]> {
    return await db.select().from(testimonials).where(eq(testimonials.featured, true));
  }

  async createTestimonial(testimonial: InsertTestimonial): Promise<Testimonial> {
    const [newTestimonial] = await db.insert(testimonials).values(testimonial).returning();
    return newTestimonial;
  }

  async getBlogPosts(): Promise<BlogPost[]> {
    return await db.select().from(blogPosts);
  }

  async getPublishedBlogPosts(): Promise<BlogPost[]> {
    return await db.select().from(blogPosts).where(eq(blogPosts.published, true));
  }

  async getBlogPost(slug: string): Promise<BlogPost | undefined> {
    const [post] = await db.select().from(blogPosts).where(eq(blogPosts.slug, slug));
    return post || undefined;
  }

  async createBlogPost(blogPost: InsertBlogPost): Promise<BlogPost> {
    const [newPost] = await db.insert(blogPosts).values(blogPost).returning();
    return newPost;
  }

  async getContactMessages(): Promise<ContactMessage[]> {
    return await db.select().from(contactMessages);
  }

  async createContactMessage(message: InsertContactMessage): Promise<ContactMessage> {
    const [newMessage] = await db.insert(contactMessages).values(message).returning();
    return newMessage;
  }
}

export const storage = new DatabaseStorage();
