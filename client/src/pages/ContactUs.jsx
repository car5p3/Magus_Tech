import React, { useState } from 'react'

const ContactUs = () => {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    // In a real app you'd POST to an API or trigger an email; here we'll just show a success state
    setSubmitted(true)
  }

  return (
    <section id="contact" className="py-30 bg-base-200 min-h-screen">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl md:text-5xl text-center font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">
          Get in Touch
        </h1>

        <p className="mt-4 text-center text-neutral-400 max-w-3xl mx-auto">
          Have a project or question? Send us a message and we'll get back to you shortly.
        </p>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2 bg-white/5 border border-white/10 rounded-2xl p-6">
            {submitted ? (
              <div className="text-center py-12">
                <h3 className="text-xl font-semibold text-neutral-100">Thanks — we'll be in touch!</h3>
                <p className="text-sm text-neutral-400 mt-2">We received your message and will respond within 1-2 business days.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input name="name" required placeholder="Your name" className="input input-bordered w-full bg-transparent text-neutral-100" />
                  <input name="email" type="email" required placeholder="Email address" className="input input-bordered w-full bg-transparent text-neutral-100" />
                </div>

                <textarea name="message" required rows={6} placeholder="Message" className="textarea textarea-bordered w-full bg-transparent text-neutral-100" />

                <div className="flex items-center justify-between">
                  <div className="text-sm text-neutral-400">We typically reply within 1–2 business days.</div>
                  <button type="submit" className="btn btn-primary">Send message</button>
                </div>
              </form>
            )}
          </div>

          <aside className="bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col gap-6">
            <div>
              <h4 className="font-semibold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">Contact Info</h4>
              <p className="text-sm text-neutral-300 mt-2">hello@magus.example</p>
              <p className="text-sm text-neutral-300">+1 (555) 123-4567</p>
            </div>

            <div>
              <h4 className="font-semibold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">Office</h4>
              <p className="text-sm text-neutral-300 mt-2">Remote • Distributed team</p>
            </div>

            <div className="mt-auto">
              <a href="mailto:hello@magus.example" className="btn btn-ghost btn-sm w-full">Email us</a>
            </div>
          </aside>
        </div>
      </div>
    </section>
  )
}

export default ContactUs