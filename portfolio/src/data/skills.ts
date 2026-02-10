export interface SkillCard {
  title: string
  skills: string[]
}

export const skills: SkillCard[] = [
  {
    title: "Backend & Distributed Systems",
    skills: [
      "Python",
      "FastAPI",
      "Django",
      "Microservices",
      "Distributed Systems",
      "Async Processing",
      "High-Throughput APIs",
    ],
  },
  {
    title: "Cloud & Data",
    skills: [
      "AWS",
      "Azure",
      "Docker",
      "Kubernetes",
      "PostgreSQL",
      "Redis",
      "Kafka",
    ],
  },
  {
    title: "Frontend & Platforms",
    skills: [
      "Flutter",
      "React",
      "TypeScript",
      "WebSockets",
      "LLM APIs",
    ],
  },
]
