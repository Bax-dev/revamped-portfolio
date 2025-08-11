"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Calendar, Clock, ArrowRight } from "lucide-react"
import { siteConfig } from "@/lib/config"

export default function Blog() {
  return (
    <section id="blog" className="py-20 px-8">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary">Latest Articles</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Sharing insights, tutorials, and thoughts on web development, technology trends, and best practices.
          </p>
        </motion.div>

        {/* Featured Article */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <Card className="bg-gradient-to-r from-primary/5 to-primary/10 border-primary/30 hover:border-primary/50 transition-all duration-300 group">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="relative overflow-hidden">
                <img
                  src={siteConfig.blog.featured.image || "/placeholder.svg?height=300&width=500"}
                  alt={siteConfig.blog.featured.title}
                  className="w-full h-64 md:h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-primary text-primary-foreground">Featured</Badge>
                </div>
              </div>

              <CardContent className="p-8 flex flex-col justify-center">
                <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-4">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    {siteConfig.blog.featured.date}
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    {siteConfig.blog.featured.readTime}
                  </div>
                </div>

                <CardTitle className="text-2xl mb-4 text-foreground group-hover:text-primary transition-colors">
                  {siteConfig.blog.featured.title}
                </CardTitle>

                <p className="text-muted-foreground mb-6 leading-relaxed">{siteConfig.blog.featured.excerpt}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {siteConfig.blog.featured.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs bg-primary/20 text-primary">
                      {tag}
                    </Badge>
                  ))}
                </div>

                <Button asChild className="w-fit bg-primary hover:bg-primary/90 text-primary-foreground">
                  <a href={siteConfig.blog.featured.url} target="_blank" rel="noopener noreferrer">
                    Read on Medium
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </a>
                </Button>
              </CardContent>
            </div>
          </Card>
        </motion.div>

        {/* Recent Articles Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {siteConfig.blog.articles.map((article, index) => (
            <motion.div
              key={article.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full bg-card border-primary/30 hover:border-primary/50 transition-all duration-300 group cursor-pointer">
                <div className="relative overflow-hidden">
                  <img
                    src={article.image || "/placeholder.svg?height=200&width=400"}
                    alt={article.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>

                <CardHeader className="pb-3">
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-2">
                    <div className="flex items-center">
                      <Calendar className="w-3 h-3 mr-1" />
                      {article.date}
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-3 h-3 mr-1" />
                      {article.readTime}
                    </div>
                  </div>
                  <CardTitle className="text-lg leading-tight group-hover:text-primary transition-colors">
                    {article.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="pt-0">
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-3">{article.excerpt}</p>

                  <div className="flex flex-wrap gap-1 mb-4">
                    {article.tags.slice(0, 3).map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs bg-primary/20 text-primary">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <Button
                    asChild
                    variant="ghost"
                    size="sm"
                    className="w-full justify-between text-primary hover:bg-primary/10"
                  >
                    <a href={article.url} target="_blank" rel="noopener noreferrer">
                      Read More
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* View All Articles Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8">
            <a href={siteConfig.blog.mediumProfile} target="_blank" rel="noopener noreferrer">
              View All Articles on Medium
              <ExternalLink className="w-5 h-5 ml-2" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
