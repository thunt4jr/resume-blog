import { Metadata } from "next"
import { notFound } from "next/navigation"
import Link from "next/link"
import { Calendar, Clock, User, ArrowLeft, Share2 } from "lucide-react"
import { getBlogPost, getRelatedPosts, blogPosts } from "@/lib/blog-data"
import { formatDate } from "@/lib/utils"

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const post = getBlogPost(params.slug)

  if (!post) {
    return {
      title: "Post Not Found",
    }
  }

  return {
    title: post.title,
    description: post.metaDescription,
    keywords: post.keywords,
    authors: [{ name: post.author }],
    openGraph: {
      title: post.title,
      description: post.metaDescription,
      type: "article",
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt,
      authors: [post.author],
      tags: post.tags,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.metaDescription,
    },
  }
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = getBlogPost(params.slug)

  if (!post) {
    notFound()
  }

  const relatedPosts = getRelatedPosts(post.slug, post.category, 3)

  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      {/* Back Button */}
      <div className="mb-8">
        <Link
          href="/blog"
          className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Blog
        </Link>
      </div>

      {/* Article Header */}
      <header className="mb-12">
        <div className="mb-6">
          <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
            {post.category}
          </span>
        </div>
        
        <h1 className="text-4xl font-bold tracking-tight text-foreground mb-6 lg:text-5xl">
          {post.title}
        </h1>
        
        <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
          {post.excerpt}
        </p>
        
        <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <User className="h-4 w-4" />
            <span>{post.author}</span>
          </div>
          
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4" />
            <time dateTime={post.publishedAt}>
              {formatDate(post.publishedAt)}
            </time>
          </div>
          
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4" />
            <span>{post.readTime} min read</span>
          </div>
          
          <button className="flex items-center gap-2 hover:text-foreground transition-colors">
            <Share2 className="h-4 w-4" />
            <span>Share</span>
          </button>
        </div>
      </header>

      {/* Featured Image */}
      {post.image && (
        <div className="mb-12">
          <img
            src={post.image}
            alt={post.title}
            className="w-full rounded-lg border border-border shadow-sm"
          />
        </div>
      )}

      {/* Article Content */}
      <article className="prose prose-lg max-w-none dark:prose-invert">
        <div dangerouslySetInnerHTML={{ __html: post.content }} />
      </article>

      {/* Tags */}
      <div className="mt-12 pt-8 border-t border-border">
        <h3 className="text-sm font-medium text-foreground mb-4">Tags</h3>
        <div className="flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <Link
              key={tag}
              href={`/blog/tag/${tag.toLowerCase().replace(/\s+/g, '-')}`}
              className="inline-flex items-center rounded-md bg-secondary px-3 py-1 text-sm font-medium text-secondary-foreground hover:bg-secondary/80 transition-colors"
            >
              {tag}
            </Link>
          ))}
        </div>
      </div>

      {/* Author Bio */}
      <div className="mt-12 pt-8 border-t border-border">
        <div className="bg-card rounded-lg border border-border p-6">
          <div className="flex items-start gap-4">
            <div className="h-16 w-16 rounded-full bg-muted flex items-center justify-center">
              <User className="h-8 w-8 text-muted-foreground" />
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-card-foreground mb-2">
                {post.author}
              </h3>
              <p className="text-muted-foreground mb-4">
                A passionate developer sharing insights about modern web development, 
                TypeScript, React, and the latest technologies. Always learning and 
                exploring new ways to build better software.
              </p>
              <div className="flex gap-4">
                <Link
                  href="/about"
                  className="text-sm font-medium text-primary hover:text-primary/80 transition-colors"
                >
                  View Profile
                </Link>
                <Link
                  href="/contact"
                  className="text-sm font-medium text-primary hover:text-primary/80 transition-colors"
                >
                  Get in Touch
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <div className="mt-16">
          <h2 className="text-2xl font-bold tracking-tight text-foreground mb-8">
            Related Posts
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {relatedPosts.map((relatedPost) => (
              <article
                key={relatedPost.id}
                className="group bg-card rounded-lg border border-border p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                  <Calendar className="h-4 w-4" />
                  <time dateTime={relatedPost.publishedAt}>
                    {formatDate(relatedPost.publishedAt)}
                  </time>
                </div>
                
                <h3 className="text-lg font-semibold text-card-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
                  <Link href={`/blog/${relatedPost.slug}`}>
                    {relatedPost.title}
                  </Link>
                </h3>
                
                <p className="text-muted-foreground text-sm line-clamp-3 mb-4">
                  {relatedPost.excerpt}
                </p>
                
                <Link
                  href={`/blog/${relatedPost.slug}`}
                  className="inline-flex items-center text-sm font-medium text-primary hover:text-primary/80 transition-colors"
                >
                  Read more →
                </Link>
              </article>
            ))}
          </div>
        </div>
      )}

      {/* Newsletter CTA */}
      <div className="mt-16 bg-muted/30 rounded-lg p-8 text-center">
        <h3 className="text-2xl font-bold tracking-tight text-foreground mb-4">
          Enjoyed this article?
        </h3>
        <p className="text-muted-foreground mb-6">
          Subscribe to get notified when I publish new articles about web development and technology.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          />
          <button className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-2 text-sm font-medium text-primary-foreground shadow hover:bg-primary/90 transition-colors">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  )
}
