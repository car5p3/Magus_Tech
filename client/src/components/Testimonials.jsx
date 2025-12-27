import React, { useEffect, useState } from "react";

const testimonialsData = [
  {
    id: 1,
    name: "Ava Brown",
    role: "Product Designer",
    text: "The UI kit saved us weeks of work — beautiful defaults and easy theming.",
    initials: "AB",
    gradient: "bg-brand-gradient",
  },
  {
    id: 2,
    name: "Miles Scott",
    role: "Frontend Engineer",
    text: "Components are consistent and accessible — great developer experience.",
    initials: "MS",
    gradient: "bg-brand-gradient",
  },
  {
    id: 3,
    name: "Riley Lee",
    role: "Design Ops",
    text: "The theme system made it trivial to keep a cohesive look across products.",
    initials: "RL",
    gradient: "bg-brand-gradient",
  },
  {
    id: 4,
    name: "Jordan Park",
    role: "CTO",
    text: "Faster iterations and consistent UI across teams — highly recommend.",
    initials: "JP",
    gradient: "bg-brand-gradient",
  },
  {
    id: 5,
    name: "Sofia Chen",
    role: "Lead PM",
    text: "Design tokens and components made handoff seamless.",
    initials: "SC",
    gradient: "bg-brand-gradient",
  },
  {
    id: 6,
    name: "Diego Ramos",
    role: "Engineering Manager",
    text: "Our dev velocity increased dramatically after adopting the system.",
    initials: "DR",
    gradient: "bg-brand-gradient",
  },
  {
    id: 7,
    name: "Nora Patel",
    role: "UX Researcher",
    text: "Accessible defaults reduced our audit time and improved UX.",
    initials: "NP",
    gradient: "bg-brand-gradient",
  },
  {
    id: 8,
    name: "Liam O'Connor",
    role: "Design Lead",
    text: "The consistent theme made cross-product branding effortless.",
    initials: "LO",
    gradient: "bg-brand-gradient",
  },
];

const Testimonials = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIndex((i) => (i + 1) % testimonialsData.length), 4500);
    return () => clearInterval(t);
  }, []);

  function prev() {
    setIndex((i) => (i - 1 + testimonialsData.length) % testimonialsData.length);
  }
  function next() {
    setIndex((i) => (i + 1) % testimonialsData.length);
  }

  const t = testimonialsData[index];

  return (
    <section className="py-12 bg-base-200">
      <div className="container mx-auto px-6">
        <h3 className="text-3xl md:text-4xl text-center font-extrabold text-brand-gradient">
          What our users say
        </h3> 

        <p className="mt-4 text-center text-neutral-400 max-w-2xl mx-auto">
          Real feedback from teams using the system — consistent visuals, fast development.
        </p>

        <div className="mt-8 flex items-center justify-center">
          <div className="w-full max-w-3xl relative">
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 shadow-xl min-h-[170px] flex flex-col md:flex-row items-center gap-6">
              <div className="w-16 h-16 rounded-full flex items-center justify-center text-white font-bold bg-brand-gradient">
                {t.initials}
              </div> 

              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-semibold text-lg">{t.name}</div>
                    <div className="text-sm text-neutral-400">{t.role}</div>
                  </div>
                </div>
                <p className="mt-3 text-neutral-300">{t.text}</p>
              </div>
            </div>

            <div className="absolute inset-y-0 left-0 flex items-center pl-2">
              <button onClick={prev} className="btn btn-ghost btn-circle pointer-events-auto">
                ‹
              </button>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2">
              <button onClick={next} className="btn btn-ghost btn-circle pointer-events-auto">
                ›
              </button>
            </div>

            <div className="mt-4 flex items-center justify-center gap-2">
              {testimonialsData.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  className={`w-2 h-2 rounded-full ${i === index ? 'bg-white' : 'bg-white/30'}`}
                  aria-label={`go to testimonial ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
