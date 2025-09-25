"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Calendar, Filter, SortAsc, SortDesc, Mail, GraduationCap } from "lucide-react"

// Sample data - replace with your actual content
const publications = [
  {
    id: 1,
    title: "Fast training of large kernel models with delayed projections",
    journal: "39th Conference on Neural Information Processing Systems (NeurIPS 2025-Spotlight)",
    year: 2025,
    topics: ["Kernel methods", "Optimization", "Preconditioning"],
    date: "2024-11-25",
    authors: "A Abedsoltan, S Ma, P Pandit, M Belkin",
    abstract: "Classical kernel machines have historically faced significant challenges in scaling to large datasets and model sizes--a key ingredient that has driven the success of neural networks. \
     In this paper, we present a new methodology for building kernel machines that can scale efficiently with both data size and model size. \
     Our algorithm introduces delayed projections to Preconditioned Stochastic Gradient Descent (PSGD) allowing the training of much larger models than was previously feasible, \
      pushing the practical limits of kernel-based learning. We validate our algorithm, EigenPro4, across multiple datasets, demonstrating drastic training speed up over \
      the existing methods while maintaining comparable or better classification accuracy.",
  },
  {
    
    id: 2,
    title: "Task Generalization With AutoRegressive Compositional Structure: Can Learning From D Tasks Generalize to Dᵀ Tasks?",
    journal: "42nd International Conference on Machine Learning (ICML2025)",
    year: 2025,
    topics: ["In-context learning", "Task generalization", "Chain-Of-Thought"],
    date: "2025-08-01",
    authors: "A Abedsoltan, H Zhang, K Wan, H Lin, J Zhang, M Belkin",
    abstract: "Large language models (LLMs) exhibit remarkable task generalization, solving tasks they were never explicitly trained on with only a few demonstrations. \
    This raises a fundamental question: When can learning from a small set of tasks generalize to a large task family? In this paper, we investigate task generalization \
    through the lens of autoregressive compositional structure, where each task is a composition of T operations, and each operation is among a finite family of d subtasks. \
     This yields a total class of size d^T. We first show that generalization to all d^T tasks is theoretically achievable by training on only Õ(d) tasks. \
      Empirically, we demonstrate that Transformers achieve such exponential task generalization on sparse parity functions via In-context Learning (ICL) and chain-of-thought (CoT) reasoning. \
       We further show generalization in arithmetic and translation, beyond parity functions.",
  },

  {
    id: 3,
    title: "Context-Scaling versus Task-Scaling in In-Context Learning",
    journal: "arXiv preprint arXiv:2410.12783",
    year: 2024,
    topics: ["In-context learning", "Transformers"],
    date: "2024-10-16",
    authors: "A Abedsoltan, A Radhakrishnan, J Wu, M Belkin",
    abstract: "Transformers exhibit In-Context Learning (ICL), where these models solve new tasks by using examples in the prompt without additional training. \
    In our work, we identify and analyze two key components of ICL: (1) context-scaling, where model performance improves as the number of in-context examples increases and \
     (2) task-scaling, where model performance improves as the number of pre-training tasks increases. While transformers are capable of both context-scaling and task-scaling, \
      we empirically show that standard Multi-Layer Perceptrons (MLPs) with vectorized input are only capable of task-scaling. To understand how transformers are capable of context-scaling, \
       we first propose a significantly simplified transformer architecture without key, query, value weights. We show that it performs ICL comparably to the original GPT-2 model \
       in various statistical learning tasks including linear regression, teacher-student settings. Furthermore, a single block of our simplified transformer can be viewed as data dependent \
        feature map followed by an MLP. This feature map on its own is a powerful predictor that is capable of context-scaling but is not capable of task-scaling. We show empirically that concatenating \
         the output of this feature map with vectorized data as an input to MLPs enables both context-scaling and task-scaling. This finding provides a simple setting to study context and task-scaling for ICL.",
  },
  {
    id: 4,
    title: "On the Nyström approximation for preconditioning in kernel machines",
    journal: "International Conference on Artificial Intelligence and Statistics (AISTATS 2024)",
    year: 2024,
    topics: ["Kernel methods", "Nyström approximation", "Preconditioning"],
    date: "2024-05-02",
    authors: "A Abedsoltan, P Pandit, L Rademacher, M Belkin",
    abstract: "Kernel methods are a popular class of nonlinear predictive models in machine learning. Scalable algorithms for learning kernel models need to be iterative in nature, \
    but convergence can be slow due to poor conditioning. Spectral preconditioning is an important tool to speed-up the convergence of such iterative algorithms for training kernel models. \
    However computing and storing a spectral preconditioner can be expensive which can lead to large computational and storage overheads, precluding the application of kernel methods to problems with large datasets. \
    A Nystrom approximation of the spectral preconditioner is often cheaper to compute and store, and has demonstrated success in practical applications. \
    In this paper we analyze the trade-offs of using such an approximated preconditioner. Specifically, we show that a sample of logarithmic size (as a function of the size of the dataset) enables the Nyström-based approximated preconditioner \
    to accelerate gradient descent nearly as well as the exact preconditioner, while also reducing the computational and storage overheads.",
  },
  {
    id: 5,
    title: "Toward Large Kernel Models",
    journal: "40th International Conference on Machine Learning (ICML2023)",
    year: 2023,
    topics: ["Kernel methods", "Nyström approximation", "Preconditioning"],
    date: "2023-07-23",
    authors: "A Abedsoltan, M Belkin, P Pandit",
    abstract: "Recent studies indicate that kernel machines can often perform similarly or better than deep neural networks (DNNs) on small datasets. \
    The interest in kernel machines has been additionally bolstered by the discovery of their equivalence to wide neural networks in certain regimes. \
    However, a key feature of DNNs is their ability to scale the model size and training data size independently, whereas in traditional kernel machines model \
    size is tied to data size. Because of this coupling, scaling kernel machines to large data has been computationally challenging. In this paper, \
    we provide a way forward for constructing large-scale general kernel models, which are a generalization of kernel machines that decouples the model and data, \
    allowing training on large datasets. Specifically, we introduce EigenPro 3.0, an algorithm based on projected dual preconditioned SGD and show scaling to model and data sizes \
    which have not been possible with existing kernel methods. We provide a PyTorch based implementation which can take advantage of multiple GPUs.",
  },
  {
    id: 6,
    title: "Benign, tempered, or catastrophic: A taxonomy of overfitting",
    journal: "36th Conference on Neural Information Processing Systems (NeurIPS 2022)",
    year: 2022,
    topics: ["Overfitting", "Generalization"],
    date: "2022-12-06",
    authors: "N Mallinar, JB Simon, A Abedsoltan, P Pandit, M Belkin, P Nakkiran",
    abstract: "The practical success of overparameterized neural networks has motivated the recent scientific study of interpolating methods-- learning methods which are able fit their training data perfectly. \
    Empirically, certain interpolating methods can fit noisy training data without catastrophically bad test performance, which defies standard intuitions from statistical learning theory. \
     Aiming to explain this, a large body of recent work has studied benign overfitting, a behavior seen in certain asymptotic settings under which interpolating methods approach Bayes-optimality, \
      even in the presence of noise. In this work, we argue that, while benign overfitting has been instructive to study, real interpolating methods like deep networks do not fit benignly. \
       That is, noise in the train set leads to suboptimal generalization, suggesting that these methods fall in an intermediate regime between benign and catastrophic overfitting, \
        in which asymptotic risk is neither Bayes-optimal nor unbounded, with the confounding effect of the noise being tempered but non-negligible. We call this behavior tempered overfitting. \
        We first provide broad empirical evidence for our three-part taxonomy, demonstrating that deep neural networks and kernel machines fit to noisy data can be reasonably well classified as \
         benign, tempered, or catastrophic. We then specialize to kernel (ridge) regression (KR), obtaining conditions on the ridge parameter and kernel eigenspectrum under which KR exhibits each of the three behaviors, \
         demonstrating the consequences for KR with common kernels and trained neural networks of infinite width using experiments on natural and synthetic datasets.",
  },
  {
    id: 7,
    title: "Uncertainty estimation with recursive feature machines",
    journal: "The 40th Conference on Uncertainty in Artificial Intelligence",
    year: 2024,
    topics: ["Uncertainty estimation", "Feature Learning", "Kernel methods"],
    date: "2024-07-15",
    authors: "D Gedon, A Abedsoltan, TB Schön, M Belkin",
    abstract: "In conventional regression analysis, predictions are typically represented as point estimates derived from covariates. \
     The Gaussian Process (GP) offer a kernel-based framework that predicts and additionally quantifies associated uncertainties. \
      However, kernel-based methods often underperform ensemble-based decision tree approaches in regression tasks involving tabular and categorical data. \
       Recently, Recursive Feature Machines (RFMs) were proposed as a novel feature-learning kernel which strengthens the capabilities of kernel machines. \
       In this study, we harness the power RFMs in a probabilistic GP-based approach to enhance uncertainty estimation through feature extraction within kernel methods. \
        We employ this learned kernel for in-depth uncertainty analysis. On tabular datasets, our RFM-based method surpasses other leading uncertainty estimation techniques, \
        including NGBoost and CatBoost-ensemble. Additionally, when assessing out-of-distribution performance, we found that boosting-based methods are surpassed by our RFM-based approach.",
  },
  {
    id: 8,
    title: "On emergence of clean-priority learning in early stopped neural networks",
    journal: "arXiv preprint arXiv:2306.02533",
    year: 2023,
    topics: ["Neural networks", "Early stopping", "Optimization"],
    date: "2023-06-05",
    authors: "C Liu, A Abedsoltan, M Belkin",
    abstract: "When random label noise is added to a training dataset, the prediction error of a neural network on a label-noise-free test dataset initially improves during early training but eventually deteriorates, \
     following a U-shaped dependence on training time. This behaviour is believed to be a result of neural networks learning the pattern of clean data first and fitting the noise later in the training, \
     a phenomenon that we refer to as clean-priority learning. In this study, we aim to explore the learning dynamics underlying this phenomenon. We theoretically demonstrate that, in the early stage of training, \
     the update direction of gradient descent is determined by the clean subset of training data, leaving the noisy subset has minimal to no impact, resulting in a prioritization of clean learning. \
     Moreover, we show both theoretically and experimentally, as the clean-priority learning goes on, the dominance of the gradients of clean samples over those of noisy samples diminishes, \
     and finally results in a termination of the clean-priority learning and fitting of the noisy samples.",
  },
  {
    id: 9,
    title: "On Feature Learning of Recursive Feature Machines and Automatic Relevance Determination",
    journal: "UniReps: the First Workshop on Unifying Representations in Neural Models",
    year: 2023,
    topics: ["Kernel methods", "Feature Learning", "Automatic relevance"],
    date: "2023-09-18",
    authors: "D Gedon, A Abedsoltan, TB Schön, M Belkin",
    abstract: "Feature learning is a crucial element for the performance of machine learning models. Recently, the exploration of feature learning in the context of kernel methods \
     has led to the introduction of Recursive Feature Machines (RFMs). In this work, we connect diagonal RFMs to Automatic Relevance Determination (ARD) from the Gaussian process literature. \
     We demonstrate that diagonal RFMs, similar to ARD, serve as a weighted covariate selection technique. However, they are trained using different paradigms: RFMs use recursive iterations \
     of the so-called Average Gradient Outer Product, while ARD employs maximum likelihood estimation. Our experiments show that while the learned features in both models correlate highly \
     across various tabular datasets, this correlation is lower for other datasets. Furthermore, we demonstrate that the RFM effectively captures correlation between covariates, \
     and we present instances where the RFM outperforms both ARD and diagonal RFM.",
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
    title: "I will be an AI Research Intern at Figma.",
    date: "June 2025",
    description: "I will be working on multi-agent workflows for prompt-to-design applications extending agent-squad from AWS.",
  },
  {
    id: 3,
    title: "Our paper, “Task Generalization With AutoRegressive Compositional Structure: Can Learning From D Tasks Generalize to Dᵀ Tasks?” was accepted at ICML.",
    date: "August 2025",
    description: "We study task generalization through an autoregressive compositional framework, showing that training on only a small subset of tasks enables exponential generalization to a much larger class.\
     As an example, we demonstrate that Transformers trained on sparse parity tasks generalize in-context through chain-of-thought reasoning, and further extend to arithmetic and translation.",
  },
]

const hobbies = [
  {
    name: "Tennis",
    description: "I got into tennis because of Federer's elegance, but somewhere along the way I ended up being blown away by Djokovic's grit and brilliance!",
    icon: "🎾",
  },
  {
    name: "Hiking",
    description: "Exploring mountain trails and nature reserves, combining physical activity with mindfulness.",
    icon: "🥾",
  },
  {
    name: "Reading",
    description: "I'm hooked on thought-provoking reads—check my books page for a peek at some of my latest and all-time favorites.",
    icon: "📚",
    link: "/books",
  },
]

export default function HomePage() {
  const [sortBy, setSortBy] = useState<"date" | "topic">("date")
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("desc")
  const [filterTopic, setFilterTopic] = useState<string>("all")

  const topics = Array.from(new Set(publications.flatMap((pub) => pub.topics)))

  const sortedAndFilteredPublications = publications
    .filter((pub) => filterTopic === "all" || pub.topics.includes(filterTopic))
    .sort((a, b) => {
      if (sortBy === "date") {
        const dateA = new Date(a.date).getTime()
        const dateB = new Date(b.date).getTime()
        return sortOrder === "desc" ? dateB - dateA : dateA - dateB
      } else {
        return sortOrder === "desc" ? b.topics[0].localeCompare(a.topics[0]) : a.topics[0].localeCompare(b.topics[0])
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
                      <span className="text-muted-foreground ml-2">University of Southern California, 2021</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0"></div>
                    <div>
                      <span className="font-medium text-foreground">B.S. Electrical Engineering</span>
                      <span className="text-muted-foreground ml-2">Sharif University of Technology, 2018</span>
                    </div>
                  </div>
                </div>

                {/* Contact & Links */}
                <div className="space-y-3">
                  <h3 className="text-lg font-semibold text-foreground">Contact & Links</h3>
                  <div className="flex flex-wrap items-center gap-4 text-sm">
                    <a
                      href="mailto:aabedsoltan@ucsd.edu"
                      className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Mail className="w-4 h-4" />
                      <span>aabedsoltan@ucsd.edu</span>
                    </a>
                    <a
                      href="https://scholar.google.com/citations?user=IpR1QCoAAAAJ&hl=en&oi=ao"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors"
                    >
                      <GraduationCap className="w-4 h-4" />
                      <span>Google Scholar</span>
                    </a>
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
            {sortedAndFilteredPublications.slice(0, 3).map((pub) => (
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
                        <div className="flex flex-wrap gap-1 justify-end">
                          {pub.topics.map((topic, index) => (
                            <Badge key={index} variant="outline" className="text-xs">
                              {topic}
                            </Badge>
                          ))}
                        </div>
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

          <div className="grid md:grid-cols-3 gap-4">
            {hobbies.map((hobby, index) => (
              <Card key={index} className="border-border hover:shadow-md transition-shadow">
                <CardContent className="p-4">
                  <div className="flex items-start space-x-3">
                    <div className="text-2xl flex-shrink-0">{hobby.icon}</div>
                    <div className="space-y-1">
                      <h3 className="text-base font-semibold text-foreground">
                        {hobby.link ? (
                          <a href={hobby.link} className="hover:text-primary transition-colors">
                            {hobby.name}
                          </a>
                        ) : (
                          hobby.name
                        )}
                      </h3>
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
