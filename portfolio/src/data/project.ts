export interface Project {
  title: string
  description: string
  highlights: string[]
  tech: string[]
  link?: string
}

export const projects: Project[] = [
  {
    title: "Enterprise AI Platform (Core42)",
    description:
      "Core backend engineer for a high-throughput AI / LLM platform serving external enterprise customers.",
    highlights: [
      "Decomposed monolithic FastAPI service into scalable microservices",
      "Designed services handling ~40,000 RPS",
      "Reduced tail latency by ~30% under peak load",
      "Built async batch pipelines reducing compute cost by ~25%",
    ],
    tech: ["FastAPI", "PostgreSQL", "Redis", "Kafka", "Azure", "Microservices"],
  },
  {
    title: "Blaze — High-Performance WSGI Server",
    description:
      "A multithreaded WSGI web server inspired by Gunicorn, built from scratch for efficient traffic handling.",
    highlights: [
      "Implemented thread pooling and resource management",
      "Designed for high concurrency workloads",
      "Focused on performance and scalability",
    ],
    tech: ["Python", "Multithreading", "WebSockets"],
    link: "https://github.com/Godwin-Metri/blaze",
  },
  {
    title: "Roubot — AI Chatbot Platform",
    description:
      "AI-powered chatbot creation platform with cloud-native asynchronous architecture.",
    highlights: [
      "Designed async task pipelines with Celery",
      "Deployed on AWS ECS / Fargate",
      "Built scalable real-time systems using WebSockets",
    ],
    tech: ["Django", "AWS", "Celery", "Redis", "Docker"],
  },
]
