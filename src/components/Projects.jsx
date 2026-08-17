import { projects } from '../data/projects'
import Container from './ui/Container'
import SectionHeading from './ui/SectionHeading'
import ProjectCard from './ProjectCard'

const spanClass = {
  medibot: 'lg:col-span-2',
  'inventory-management-agent': 'lg:col-span-2',
}

export default function Projects() {
  const featured = projects.filter((p) => p.featured)
  const rest = projects.filter((p) => !p.featured)

  return (
    <section id="projects" className="relative py-28 sm:py-36">
      <Container>
        <SectionHeading
          index="04"
          eyebrow="Projects"
          title="Things I've Built"
          description="A mix of applied AI systems and full-stack products — from GenAI assistants to geospatial intelligence platforms."
        />

        <div className="space-y-6">
          {featured.map((project) => (
            <ProjectCard key={project.id} project={project} featured />
          ))}

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            {rest.map((project) => (
              <div key={project.id} className={spanClass[project.id] || ''}>
                <ProjectCard project={project} />
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
