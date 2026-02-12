export interface SkillCard {
  title: string
  skills: string[]
}

export const skills: SkillCard[] = [
  {
    title: "Backend & Distributed Systems",
    skills: [
      "Python",
      "Golang",
      "Node.js",
      "Microservices",
      "WebSockets",
      "Distributed Systems",
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
      "NoSQL",
      "Kafka",
      "CI/CD",
      "Terraform",
    ],
  },
  {
    title: "Frontend & Platforms",
    skills: [
      "Flutter",
      "Dart",
      "React",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
    ],
  },
]
