import React from 'react'
import { Link } from "react-router-dom";

const Services = () => {
  const services = [
    {
      id: 1,
      title: 'Design Systems',
      desc: 'Crafted design systems with tokens, components, and guidelines to keep your product consistent and accessible.',
    },
    {
      id: 2,
      title: 'UI Development',
      desc: 'High-quality front-end implementation with performance, responsive layouts and a focus on developer experience.',
    },
    {
      id: 3,
      title: 'Performance & Accessibility',
      desc: 'Audits and fixes to improve runtime performance, accessibility scores and real-world user experience.',
    },
  ]

  return (
    <section className="py-30 bg-base-200 min-h-screen">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl md:text-5xl text-center font-extrabold text-brand-gradient">
          Services
        </h1>

        <p className="mt-4 text-center text-neutral-400 max-w-3xl mx-auto">
          We help teams ship beautiful, fast and accessible experiences — from design systems to production-ready UIs.
        </p>

        <div className="mt-10 grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {services.map((s) => (
            <div key={s.id} className="bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-semibold text-brand-gradient">{s.title}</h3>
                <p className="text-sm text-neutral-300 mt-2">{s.desc}</p>
              </div>
              <div className="mt-4">
                <Link to="/contact" className="btn btn-ghost btn-sm">Contact Us</Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
            <h4 className="font-semibold text-brand-gradient">How we work</h4>
            <p className="text-sm text-neutral-300 mt-2">We iterate quickly with clear milestones, open feedback loops, and a focus on measurable outcomes.</p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
            <h4 className="font-semibold text-brand-gradient">Pricing</h4>
            <p className="text-sm text-neutral-300 mt-2">Flexible engagement models: fixed-scope, retainer, or staff-augmentation. Contact us to discuss your needs.</p>
          </div>
        </div>

        <div className="mt-12 text-center">
          <a href="#contact" className="btn btn-primary">Contact Us</a>
        </div>
      </div>
    </section>
  )
}

export default Services