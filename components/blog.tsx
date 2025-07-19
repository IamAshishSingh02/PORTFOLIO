"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, ArrowRight } from "lucide-react"
import Image from "next/image"

const blogPosts = [
  {
    title: "Building Scalable React Applications with TypeScript",
    excerpt:
      "Learn how to structure and build maintainable React applications using TypeScript, best practices, and modern development patterns.",
    image: "/blog images/b1?height=200&width=400",
    date: "2024-01-15",
    readTime: "8 min read",
    category: "React",
    slug: "building-scalable-react-applications",
  },
  {
    title: "The Future of Web Development: Trends to Watch",
    excerpt:
      "Exploring the latest trends in web development including AI integration, serverless architecture, and the evolution of JavaScript frameworks.",
    image: "/blog images/b2?height=200&width=400",
    date: "2024-01-10",
    readTime: "6 min read",
    category: "Web Development",
    slug: "future-of-web-development",
  },
  {
    title: "Optimizing Performance in Next.js Applications",
    excerpt:
      "A comprehensive guide to improving performance in Next.js applications through code splitting, image optimization, and caching strategies.",
    image: "/blog images/b3?height=200&width=400",
    date: "2024-01-05",
    readTime: "10 min read",
    category: "Next.js",
    slug: "optimizing-nextjs-performance",
  },
]

export default function Blog() {
  return (
    <section id="blog" className="py-20 relative overflow-hidden fade-in">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-100/50 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800/50">
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23f3f4f6' fillOpacity='0.4'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
          }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(99,102,241,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_75%,rgba(236,72,153,0.1),transparent_50%)]"></div>
      </div>

      {/* Decorative Books/Articles */}
      <div className="absolute top-20 left-20 w-16 h-20 bg-gradient-to-r from-amber-400/20 to-orange-400/20 rounded-sm rotate-12 blur-sm"></div>
      <div className="absolute bottom-20 right-20 w-20 h-16 bg-gradient-to-r from-emerald-400/20 to-teal-400/20 rounded-sm -rotate-12 blur-sm"></div>
      <div className="absolute top-1/2 left-10 w-12 h-16 bg-gradient-to-r from-rose-400/20 to-pink-400/20 rounded-sm rotate-45 blur-sm"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4"
          >
            Latest Blog Posts
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
          >
            Thoughts, tutorials, and insights about web development, technology, and the ever-evolving digital
            landscape.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {blogPosts.map((post, index) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group cursor-pointer"
            >
              <Card className="h-full overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 dark:bg-gray-800">
                <div className="relative overflow-hidden">
                  <Image
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    width={400}
                    height={200}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-white text-gray-900">{post.category}</Badge>
                  </div>
                </div>
                <CardHeader>
                  <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400 mb-2">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {new Intl.DateTimeFormat("en-GB", {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      }).format(new Date(post.date))}
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {post.readTime}
                    </div>
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors">
                    {post.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    {post.excerpt}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button
                    variant="ghost"
                    className="p-0 h-auto font-semibold text-gray-900 dark:text-white group-hover:text-gray-700 dark:group-hover:text-gray-300"
                  >
                    Read More
                    <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <Button size="lg" variant="outline" className="px-8 py-3 bg-transparent">
              View All Posts
              <ArrowRight className="h-5 w-5 ml-2" />
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
