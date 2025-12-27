import React from 'react'
import { Link } from "react-router-dom";


const AboutUs = () => {
  const team = [
    { id: 1, name: 'Ava', role: 'Founder & CEO' },
    { id: 2, name: 'Liam', role: 'CTO' },
    { id: 3, name: 'Maya', role: 'Design Lead' },
    { id: 4, name: 'Noah', role: 'Frontend Engineer' },
  ]

  return (
    <section className="py-30 bg-base-200 min-h-screen">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl md:text-5xl text-center font-extrabold text-brand-gradient">
          About Us
        </h1>

        <p className="mt-4 text-center text-neutral-400 max-w-3xl mx-auto">
          We design delightful, accessible UI systems and products that scale. Our
          focus is on performance, developer experience, and beautiful, useful
          interfaces.
        </p>

        <div className="mt-10 grid gap-6 grid-cols-1 md:grid-cols-3">
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
            <h3 className="text-lg font-semibold text-brand-gradient">Our Mission</h3>
            <p className="text-sm text-neutral-300 mt-2">Craft high-quality, reusable design systems and templates that speed up product development while keeping accessibility first.</p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
            <h3 className="text-lg font-semibold text-brand-gradient">What We Build</h3>
            <p className="text-sm text-neutral-300 mt-2">Design systems, marketing sites, dashboards and component libraries — all optimized for performance and developer ergonomics.</p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
            <h3 className="text-lg font-semibold text-brand-gradient">Our Values</h3>
            <p className="text-sm text-neutral-300 mt-2">Clarity, accessibility, and speed. We prefer smaller, well-documented surface area to unmaintainable complexity.</p>
          </div>
        </div>

        <div className="mt-12">
          <h3 className="text-2xl font-bold text-neutral-100">Meet the Team</h3>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {team.map((member) => (
              <div key={member.id} className="bg-white/5 border border-white/10 rounded-2xl p-4 flex flex-col items-center gap-3">
                <div className="avatar placeholder">
                  <div className="bg-brand-gradient text-white w-16 h-16 rounded-full flex items-center justify-center text-lg font-bold">{member.name.charAt(0)}</div> 
                </div>
                <div className="text-center">
                  <div className="font-semibold text-neutral-100">{member.name}</div>
                  <div className="text-sm text-neutral-400">{member.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 text-center">
          <Link to="/contact" className="btn btn-primary">Contact Us</Link>
        </div>
      </div>
    </section>
  )
}

export default AboutUs