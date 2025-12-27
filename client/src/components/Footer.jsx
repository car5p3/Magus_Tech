import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  function handleSubscribe(e) {
    e.preventDefault()
    if (!email) return
    setSubscribed(true)
    setEmail('')
  }

  return (
    <footer className="bg-base-200 border-t border-white/10 text-neutral-300">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link to="/" className="inline-block mb-3">
              <span className="logo-text text-xl font-extrabold text-brand-gradient">magus</span>
            </Link> 
            <p className="text-sm text-neutral-400 max-w-xs">
              We build accessible, high-performance design systems and UIs that scale — focused on clarity and speed.
            </p>

            <div className="mt-4 flex items-center gap-3">
              <a aria-label="Twitter" href="#" className="text-neutral-300 hover:text-white">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22 5.92c-.7.32-1.45.54-2.24.64.8-.48 1.42-1.24 1.71-2.15-.75.45-1.58.78-2.46.96a4.1 4.1 0 0 0-7 3.74A11.64 11.64 0 0 1 3.16 4.6a4.08 4.08 0 0 0 1.27 5.47c-.63-.02-1.22-.2-1.73-.48v.05c0 1.96 1.4 3.6 3.27 3.98-.34.09-.69.13-1.05.13-.26 0-.52-.03-.77-.07.52 1.62 2.02 2.8 3.8 2.84A8.25 8.25 0 0 1 2 19.54 11.65 11.65 0 0 0 8.29 21c7.55 0 11.68-6.26 11.68-11.68v-.53c.8-.57 1.49-1.28 2.03-2.09-.73.33-1.51.56-2.32.66z" fill="currentColor"/></svg>
              </a>
              <a aria-label="GitHub" href="#" className="text-neutral-300 hover:text-white">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 .5a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2.1c-3.3.7-4-1.6-4-1.6-.5-1.3-1.2-1.6-1.2-1.6-.9-.6.1-.6.1-.6 1 .1 1.6 1 1.6 1 .9 1.6 2.3 1.1 2.9.8.1-.6.4-1.1.7-1.3-2.6-.3-5.3-1.3-5.3-5.7 0-1.3.5-2.4 1.2-3.3-.1-.3-.5-1.6.1-3.3 0 0 1-.3 3.4 1.2a11.6 11.6 0 0 1 6.2 0c2.3-1.5 3.4-1.2 3.4-1.2.6 1.7.2 3 .1 3.3.7.9 1.2 2 1.2 3.3 0 4.4-2.7 5.4-5.3 5.7.4.4.8 1 .8 2v3c0 .2.2.7.8.6A12 12 0 0 0 12 .5z" fill="currentColor"/></svg>
              </a>
              <a aria-label="LinkedIn" href="#" className="text-neutral-300 hover:text-white">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20.45 20.45h-3.55v-5.4c0-1.29-.02-2.94-1.79-2.94-1.79 0-2.06 1.4-2.06 2.85v5.49H9.01V9h3.41v1.56h.05c.48-.9 1.66-1.85 3.42-1.85 3.66 0 4.34 2.41 4.34 5.54v6.2zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45z" fill="currentColor"/></svg>
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-semibold text-neutral-100 mb-3">Quick links</h4>
            <ul className="flex flex-col gap-2">
              <li><Link to="/" className="link link-hover">Home</Link></li>
              <li><Link to="/#projects" className="link link-hover">Projects</Link></li>
              <li><Link to="/services" className="link link-hover">Services</Link></li>
              <li><Link to="/about" className="link link-hover">About</Link></li>
              <li><Link to="/contact" className="link link-hover">Contact</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="md:col-span-2">
            <h4 className="font-semibold text-neutral-100 mb-3">Subscribe to updates</h4>
            <p className="text-sm text-neutral-400 max-w-xl">Monthly product tips, design system updates and useful resources delivered to your inbox.</p>

            <form onSubmit={handleSubscribe} className="mt-4 flex flex-col sm:flex-row gap-3 max-w-md">
              <label htmlFor="footer-email" className="sr-only">Email address</label>
              <input id="footer-email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@company.com" className="input input-bordered bg-transparent text-neutral-100 flex-1" />
              <button type="submit" className="btn btn-primary">Subscribe</button>
            </form>

            {subscribed && (
              <div className="mt-3 text-sm text-green-400">Thanks — you’re subscribed.</div>
            )}

            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <h5 className="text-sm font-semibold text-neutral-100">Contact</h5>
                <p className="text-sm text-neutral-400">hello@magus.example</p>
                <p className="text-sm text-neutral-400">+1 (555) 123-4567</p>
              </div>

              <div>
                <h5 className="text-sm font-semibold text-neutral-100">Office</h5>
                <p className="text-sm text-neutral-400">Remote • Distributed team</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-white/6 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-sm text-neutral-400">© {new Date().getFullYear()} Magus — A Project of Vanitas Institute.</div>
          <div className="flex items-center gap-4">
            <Link to="/privacy" className="text-sm link link-hover">Privacy</Link>
            <Link to="/terms" className="text-sm link link-hover">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer