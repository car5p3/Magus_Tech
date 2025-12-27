import React from 'react'
import computer from '../assets/computer.png'
import reactLogo from '../assets/react.svg'

const projects = [
  {
    id: 1,
    title: 'Design System Starter',
    img: computer,
    desc: 'A ready-to-use design system with components, tokens and examples to kickstart new products.',
    tags: ['Design', 'System', 'Components'],
  },
  {
    id: 2,
    title: 'Marketing Site Template',
    img: reactLogo,
    desc: 'A fast, accessible marketing template built with Tailwind and DaisyUI — optimized for conversions.',
    tags: ['Marketing', 'Tailwind'],
  },
  {
    id: 3,
    title: 'Admin Dashboard',
    img: '/vite.svg',
    desc: 'A responsive admin UI with charts, tables and auth flows — ships with dark theme and tokens.',
    tags: ['Dashboard', 'Analytics'],
  },
  {
    id: 4,
    title: 'Component Library',
    img: computer,
    desc: 'A curated collection of production-ready UI components with accessibility baked in.',
    tags: ['Library', 'Accessibility'],
  },
]

const Projects = () => {
  return (
    <section id="projects" className="py-30 bg-base-200">
      <div className="container mx-auto px-6">
        <h3 className="text-3xl md:text-4xl text-center font-extrabold text-brand-gradient">
          Projects
        </h3>

        <p className="mt-4 text-center text-neutral-400 max-w-2xl mx-auto">
          Selected projects and templates built with the same theme and components.
        </p>

        <div className="mt-8 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <article key={p.id} className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden shadow-xl">
              <div className="relative w-full h-44">
                <img src={p.img} alt={p.title} className="absolute inset-0 w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20" />
              </div>
              <div className="p-5 flex flex-col gap-3">
                <h4 className="text-lg font-semibold text-brand-gradient">{p.title}</h4>
                <p className="text-sm text-neutral-300">{p.desc}</p>
                <div className="mt-3 flex items-center justify-between">
                  <div className="flex gap-2 flex-wrap">
                    {p.tags.map((tag) => (
                      <span key={tag} className="text-xs px-2 py-1 rounded-full bg-white/3 text-neutral-200">{tag}</span>
                    ))}
                  </div>
                  <div>
                    <a className="btn btn-ghost btn-sm">View</a>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects