"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Calendar, Filter, SortAsc, SortDesc } from "lucide-react"

// Sample data - replace with your actual content
const publications = [
  {
    id: 1,
    title: "Advanced Machine Learning Techniques in Healthcare",
    journal: "Journal of Medical AI",
    year: 2024,
    topic: "Machine Learning",
    date: "2024-03-15",
    authors: "Your Name, et al.",
    abstract:
      "This paper explores the application of advanced machine learning techniques in healthcare diagnostics...",
  },
  {
    id: 2,
    title: "Sustainable Computing: Green Algorithms for the Future",
    journal: "Environmental Computing Review",
    year: 2023,
    topic: "Sustainability",
    date: "2023-11-20",
    authors: "Your Name, Co-Author Name",
    abstract:
      "An investigation into environmentally conscious computing practices and their impact on carbon footprint...",
  },
  {
    id: 3,
    title: "Neural Networks in Natural Language Processing",
    journal: "AI Communications",
    year: 2023,
    topic: "Machine Learning",
    date: "2023-08-10",
    authors: "Your Name, Research Team",
    abstract: "Exploring the latest developments in neural network architectures for NLP applications...",
  },
  {
    id: 4,
    title: "Quantum Computing Applications in Cryptography",
    journal: "Quantum Science & Technology",
    year: 2022,
    topic: "Quantum Computing",
    date: "2022-12-05",
    authors: "Your Name, Quantum Research Group",
    abstract: "A comprehensive study of quantum computing's potential impact on modern cryptographic systems...",
  },
]

const newsItems = [
  {
    id: 1,
    title: "Our paper, “Fast Training of Large Kernel Models with Delayed Projections.” was spotlighted at NeurIPS.",
    date: "September 2025",
    description: "In this paper, we significantly reduced the runtime of kernel solvers from days to minutes by using delayed projections in Preconditioned Stochastic Gradient Descent.",
  },
  {
    id: 2,
    title: "I started an AI resaerch intern at Figma.",
    date: "June 2025",
    description: "I will be working on multi-agent workflows for prompt-to-design applications extending agent-squad from AWS.",
  },
  {
    id: 3,
    title: "Our paper, Task Generalization With AutoRegressive Compositional Structure: Can Learning From D Tasks Generalize to Dᵀ Tasks? was accepted at ICML.",
    date: "August 2025",
    description: "We study task generalization through an autoregressive compositional framework, showing that training on only a small subset of tasks enables exponential generalization to a much larger class.\
     As an example, we demonstrate that Transformers trained on sparse parity tasks generalize in-context through chain-of-thought reasoning, and further extend to arithmetic and translation.",
  },
]

const hobbies = [
  {
    name: "Photography",
    description: "Capturing landscapes and urban architecture, with a focus on natural lighting and composition.",
    icon: "📸",
  },
  {
    name: "Hiking",
    description: "Exploring mountain trails and nature reserves, combining physical activity with mindfulness.",
    icon: "🥾",
  },
  {
    name: "Reading",
    description: "Enjoying science fiction novels, philosophy, and biographies of innovative thinkers.",
    icon: "📚",
  },
  {
    name: "Cooking",
    description: "Experimenting with international cuisines and sustainable, locally-sourced ingredients.",
    icon: "👨‍🍳",
  },
]

export default function HomePage() {
  const [sortBy, setSortBy] = useState<"date" | "topic">("date")
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("desc")
  const [filterTopic, setFilterTopic] = useState<string>("all")

  const topics = Array.from(new Set(publications.map((pub) => pub.topic)))

  const sortedAndFilteredPublications = publications
    .filter((pub) => filterTopic === "all" || pub.topic === filterTopic)
    .sort((a, b) => {
      if (sortBy === "date") {
        const dateA = new Date(a.date).getTime()
        const dateB = new Date(b.date).getTime()
        return sortOrder === "desc" ? dateB - dateA : dateA - dateB
      } else {
        return sortOrder === "desc" ? b.topic.localeCompare(a.topic) : a.topic.localeCompare(b.topic)
      }
    })

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-foreground text-balance">Amirhesam Abedsoltan</h1>
              <p className="text-sm text-muted-foreground">PhD Candidate at UC San Diego</p>
            </div>
            <nav className="hidden md:flex space-x-4">
              <a href="#bio" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                About
              </a>
              <a href="#news" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                News
              </a>
              <a href="#publications" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Publications
              </a>
              <a href="#hobbies" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Hobbies
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-7xl mx-auto px-6 py-8 space-y-10">
        {/* Bio Section */}
        <section id="bio" className="space-y-6">
          <div className="text-center space-y-2">
            <h2 className="text-2xl font-bold text-foreground text-balance">About Me</h2>
            <div className="w-16 h-0.5 bg-primary mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-4 gap-8 items-start">
            <div className="flex justify-center">
              <div className="w-48 h-48 bg-muted rounded-full flex items-center justify-center overflow-hidden shadow-lg">
                <img
                  src="/profile.jpg"
                  alt="Profile photo"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="md:col-span-3 space-y-4">
              <div className="prose max-w-none">
                <p className="text-base text-foreground leading-relaxed text-pretty">
                Hi, I'm Amirhesam Abedsoltan, a Ph.D. candidate at UC San Diego. I was lucky to be advised by{" "}
                <a
                  href="https://misha.belkin-wang.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  Prof. Mikhail Belkin
                </a>.
                 My work broadly focuses on machine learning, spanning both theory and practice, with an interest in scaling methods and understanding how modern AI systems learn and generalize.
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-foreground">Education</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0"></div>
                    <div>
                      <span className="font-medium text-foreground">Ph.D. Computer Science</span>
                      <span className="text-muted-foreground ml-2">University of California San Diego, 2021 - Present</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0"></div>
                    <div>
                      <span className="font-medium text-foreground">M.S. Computer Science</span>
                      <span className="text-muted-foreground ml-2">MIT, 2021</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0"></div>
                    <div>
                      <span className="font-medium text-foreground">B.S. Electrical Engineering</span>
                      <span className="text-muted-foreground ml-2">Sharif University of Technology, 2014</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Separator className="my-8" />

        {/* Recent News Section */}
        <section id="news" className="space-y-6">
          <div className="text-center space-y-2">
            <h2 className="text-2xl font-bold text-foreground text-balance">Recent News</h2>
            <div className="w-16 h-0.5 bg-primary mx-auto rounded-full"></div>
          </div>

          <div className="space-y-3">
            {newsItems.map((item) => (
              <Card key={item.id} className="border-border hover:shadow-md transition-shadow">
                <CardContent className="p-4">
                  <div className="flex items-start space-x-3">
                    <Calendar className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <div className="flex-1 space-y-1">
                      <div className="flex items-start justify-between gap-4">
                        <h3 className="text-base font-semibold text-foreground text-balance leading-tight">
                          {item.title}
                        </h3>
                        <Badge variant="secondary" className="text-xs whitespace-nowrap">
                          {item.date}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed text-pretty">{item.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <Separator className="my-8" />

        {/* Publications Section */}
        <section id="publications" className="space-y-6">
          <div className="text-center space-y-2">
            <h2 className="text-2xl font-bold text-foreground text-balance">Selected Publications</h2>
            <div className="w-16 h-0.5 bg-primary mx-auto rounded-full"></div>
          </div>

          {/* Sorting and Filtering Controls */}
          <div className="flex flex-wrap gap-3 items-center justify-between bg-card p-3 rounded-lg border border-border">
            <div className="flex items-center space-x-3">
              <div className="flex items-center space-x-2">
                <Filter className="w-3 h-3 text-muted-foreground" />
                <select
                  value={filterTopic}
                  onChange={(e) => setFilterTopic(e.target.value)}
                  className="bg-background border border-border rounded px-2 py-1 text-xs"
                >
                  <option value="all">All Topics</option>
                  {topics.map((topic) => (
                    <option key={topic} value={topic}>
                      {topic}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <span className="text-xs text-muted-foreground">Sort:</span>
              <Button
                variant={sortBy === "date" ? "default" : "outline"}
                size="sm"
                onClick={() => setSortBy("date")}
                className="text-xs h-7"
              >
                Date
              </Button>
              <Button
                variant={sortBy === "topic" ? "default" : "outline"}
                size="sm"
                onClick={() => setSortBy("topic")}
                className="text-xs h-7"
              >
                Topic
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setSortOrder(sortOrder === "desc" ? "asc" : "desc")}
                className="text-xs h-7 px-2"
              >
                {sortOrder === "desc" ? <SortDesc className="w-3 h-3" /> : <SortAsc className="w-3 h-3" />}
              </Button>
            </div>
          </div>

          {/* Publications List */}
          <div className="space-y-4">
            {sortedAndFilteredPublications.map((pub) => (
              <Card key={pub.id} className="border-border hover:shadow-md transition-shadow">
                <CardContent className="p-4">
                  <div className="space-y-3">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <h3 className="text-base font-semibold text-foreground text-balance leading-tight">
                          {pub.title}
                        </h3>
                        <p className="text-xs text-muted-foreground mt-1">{pub.authors}</p>
                      </div>
                      <div className="flex flex-col items-end space-y-1">
                        <Badge variant="outline" className="text-xs">
                          {pub.topic}
                        </Badge>
                        <span className="text-xs text-muted-foreground">{pub.year}</span>
                      </div>
                    </div>
                    <p className="text-xs font-medium text-primary">{pub.journal}</p>
                    <p className="text-sm text-muted-foreground leading-relaxed text-pretty">{pub.abstract}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <Separator className="my-8" />

        {/* Hobbies Section */}
        <section id="hobbies" className="space-y-6">
          <div className="text-center space-y-2">
            <h2 className="text-2xl font-bold text-foreground text-balance">Personal Interests</h2>
            <div className="w-16 h-0.5 bg-primary mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {hobbies.map((hobby, index) => (
              <Card key={index} className="border-border hover:shadow-md transition-shadow">
                <CardContent className="p-4">
                  <div className="flex items-start space-x-3">
                    <div className="text-2xl flex-shrink-0">{hobby.icon}</div>
                    <div className="space-y-1">
                      <h3 className="text-base font-semibold text-foreground">{hobby.name}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed text-pretty">{hobby.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border bg-card/50 mt-12">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="text-center space-y-3">
            <p className="text-sm text-muted-foreground">© 2025 Amirhesam Abedsoltan. All rights reserved.</p>
            <div className="flex justify-center space-x-4">
              <a
                href="mailto:your.email@university.edu"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Email
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                LinkedIn
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Google Scholar
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                ORCID
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
