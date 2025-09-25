"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"

// Books data
const books = [
  {
    id: 1,
    title: "Man's Search for Meaning",
    author: "Viktor E. Frankl",
    year: 2006,
    category: "Autobiography",
    image: "/men_search_meaning.jpg", // Add book cover images to /public folder
    rating: 5,
    notes: "Caught between free will and destiny, we face the question: do we discover meaning, create it, or leave it as our legacy?!",
  },
  {
    id: 2,
    title: "Sapiens: A Brief History of Humankind",
    author: "Yuval Noah Harari",
    year: 2014,
    category: "History",
    image: "/sapiens.jpg",
    rating: 5,
    notes: "How did we get where we are? (Short intro!)",
  },
  // Add more books here
]

export default function BooksPage() {
  const categories = Array.from(new Set(books.map((book) => book.category)))

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-foreground text-balance">My Books</h1>
              <p className="text-sm text-muted-foreground">Thoughts on my favorite reads</p>
            </div>
            <a
              href="/"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              ← Back to Home
            </a>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-7xl mx-auto px-6 py-8 space-y-10">
        {/* Introduction */}
        <section className="text-center space-y-4">
          <h2 className="text-3xl font-bold text-foreground text-balance">Book Collection & Notes</h2>
          <p className="text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Here's a collection of books that have shaped my thinking, sparked curiosity, or simply provided great entertainment.
            Each entry includes my personal notes on what I found compelling about the book.
          </p>
        </section>

        <Separator className="my-8" />

        {/* Books Grid */}
        <section className="space-y-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {books.map((book) => (
              <Card key={book.id} className="border-border hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="space-y-4">
                    {/* Book Cover */}
                    <div className="flex justify-center">
                      <div className="w-24 h-32 bg-muted rounded-lg flex items-center justify-center overflow-hidden shadow-md">
                        <img
                          src={book.image}
                          alt={`${book.title} cover`}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            // Fallback to book emoji if image fails to load
                            e.currentTarget.style.display = 'none'
                            const parent = e.currentTarget.parentNode as HTMLElement
                            if (parent) {
                              parent.innerHTML = '<span class="text-4xl">📖</span>'
                            }
                          }}
                        />
                      </div>
                    </div>

                    {/* Book Info */}
                    <div className="text-center space-y-2">
                      <h3 className="text-lg font-semibold text-foreground leading-tight">
                        {book.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        by {book.author} ({book.year})
                      </p>
                      <div className="flex items-center justify-center space-x-2">
                        <Badge variant="outline" className="text-xs">
                          {book.category}
                        </Badge>
                        <div className="flex items-center space-x-1">
                          {[...Array(5)].map((_, i) => (
                            <span
                              key={i}
                              className={`text-sm ${
                                i < book.rating ? 'text-yellow-500' : 'text-muted-foreground'
                              }`}
                            >
                              ★
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Personal Notes */}
                    <div className="space-y-2">
                      <h4 className="text-sm font-semibold text-foreground">My Notes:</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed text-pretty">
                        {book.notes}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Add more books prompt */}
        <section className="text-center py-8">
          <Card className="border-dashed border-2 border-muted">
            <CardContent className="p-8">
              <div className="space-y-2">
                <div className="text-4xl">📚</div>
                <h3 className="text-lg font-semibold text-muted-foreground">More books coming soon...</h3>
                <p className="text-sm text-muted-foreground">
                  I'm always reading something new. Check back for more reviews and recommendations!
                </p>
              </div>
            </CardContent>
          </Card>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border bg-card/50 mt-12">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="text-center">
            <p className="text-sm text-muted-foreground">© 2025 Amirhesam Abedsoltan. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}