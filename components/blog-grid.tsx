"use client"

import Link from "next/link"
import { Calendar, User, ArrowRight } from "lucide-react"

export function BlogGrid() {
  const articles = [
    {
      id: 2,
      title: "Economic Growth Through Progress",
      excerpt:
        "Strategic investments in infrastructure and education are key drivers of sustainable development and prosperity for all citizens.",
      date: "March 8, 2025",
      author: "Economic Policy Team",
      image: "/placeholder.svg?key=economy1",
      category: "Economy",
      readTime: "5 min read",
    },
    {
      id: 3,
      title: "Leadership for Tomorrow",
      excerpt:
        "Meet the visionary leaders of SFUP who are committed to bringing about transformative change and better governance.",
      date: "March 5, 2025",
      author: "Editorial Team",
      image: "/placeholder.svg?key=leader1",
      category: "Leadership",
      readTime: "4 min read",
    },
    {
      id: 4,
      title: "Healthcare Reform: A Right for All",
      excerpt:
        "Comprehensive healthcare access is fundamental to national development. Learn about our healthcare policy initiatives.",
      date: "March 1, 2025",
      author: "Healthcare Committee",
      image: "/placeholder.svg?key=health1",
      category: "Healthcare",
      readTime: "6 min read",
    },
    {
      id: 5,
      title: "Education as Foundation for Change",
      excerpt:
        "Quality education empowers individuals and communities. Discover our vision for transforming Tanzania's education system.",
      date: "February 28, 2025",
      author: "Education Policy Team",
      image: "/placeholder.svg?key=education1",
      category: "Education",
      readTime: "7 min read",
    },
    {
      id: 6,
      title: "Youth Engagement and Civic Participation",
      excerpt:
        "Young citizens are the future. Explore how SFUP is mobilizing youth in political participation and nation-building.",
      date: "February 25, 2025",
      author: "Youth Mobilization Team",
      image: "/placeholder.svg?key=youth1",
      category: "Youth",
      readTime: "5 min read",
    },
    {
      id: 7,
      title: "Rural Development: Bridging the Gap",
      excerpt:
        "Equal development opportunities for rural areas are essential. Learn about our rural development initiatives.",
      date: "February 22, 2025",
      author: "Regional Development Team",
      image: "/placeholder.svg?key=rural1",
      category: "Development",
      readTime: "6 min read",
    },
    {
      id: 8,
      title: "Environmental Sustainability and Progress",
      excerpt:
        "Protecting our environment while pursuing economic growth. Our commitment to sustainable development for future generations.",
      date: "February 20, 2025",
      author: "Environmental Affairs",
      image: "/placeholder.svg?key=environment1",
      category: "Environment",
      readTime: "5 min read",
    },
    {
      id: 9,
      title: "Technology and Digital Transformation",
      excerpt:
        "Digital innovation is driving national competitiveness. Discover our digital transformation and technology strategy.",
      date: "February 18, 2025",
      author: "Innovation Task Force",
      image: "/placeholder.svg?key=tech1",
      category: "Technology",
      readTime: "6 min read",
    },
  ]

  const categories = [
    "All",
    "Economy",
    "Leadership",
    "Healthcare",
    "Education",
    "Youth",
    "Development",
    "Environment",
    "Technology",
  ]

  return (
    <section className="w-full py-16 md:py-24 bg-background">
      <div className="max-w-6xl mx-auto px-4">
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8 text-balance">All Articles</h2>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  category === "All"
                    ? "bg-secondary text-white"
                    : "bg-muted text-foreground hover:bg-secondary hover:text-white"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article) => (
            <article
              key={article.id}
              className="bg-card border border-border rounded-lg overflow-hidden hover:shadow-lg transition-shadow flex flex-col"
            >
              <img src={article.image || "/placeholder.svg"} alt={article.title} className="w-full h-48 object-cover" />
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold bg-secondary text-white px-3 py-1 rounded-full">
                    {article.category}
                  </span>
                  <span className="text-xs text-muted-foreground">{article.readTime}</span>
                </div>

                <h3 className="text-xl font-bold text-foreground mb-3 line-clamp-2">{article.title}</h3>

                <p className="text-sm text-foreground/70 mb-4 line-clamp-2 flex-1">{article.excerpt}</p>

                <div className="space-y-2 mb-4 text-xs text-foreground/60">
                  <div className="flex items-center gap-2">
                    <Calendar size={14} />
                    <span>{article.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <User size={14} />
                    <span>{article.author}</span>
                  </div>
                </div>

                <Link
                  href={`/shared-ui/blog/${article.id}`}
                  className="inline-flex items-center gap-2 text-secondary font-bold hover:gap-3 transition-all"
                >
                  Read More <ArrowRight size={16} />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
