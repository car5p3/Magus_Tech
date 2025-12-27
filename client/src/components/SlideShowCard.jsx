import React from "react";

const SlideShowCard = ({ images, index, prev, next }) => {
  return (
    <section className="py-30 bg-base-200">
      <h1 className="text-4xl md:text-5xl flex justify-center font-extrabold leading-tight text-brand-gradient">
        Our Services
      </h1>
      <br />
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 md:p-8 shadow-xl">
          <div className="lg:flex lg:items-center lg:gap-8">
            <div className="lg:w-1/2 flex items-center justify-center relative">
              <img
                src={images[index]}
                alt={`slide-${index}`}
                className="rounded-xl shadow-2xl w-full max-w-md object-cover"
              />

              <div className="absolute inset-0 flex items-center justify-between px-3">
                <button
                  onClick={prev}
                  className="btn btn-ghost btn-circle pointer-events-auto"
                >
                  ‹
                </button>
                <button
                  onClick={next}
                  className="btn btn-ghost btn-circle pointer-events-auto"
                >
                  ›
                </button>
              </div>
            </div>

            <div className="mt-6 lg:mt-0 lg:flex-1">
              <h2 className="text-3xl md:text-4xl font-extrabold leading-tight text-brand-gradient">
                Showcase — beautiful components, built fast
              </h2>
              <p className="mt-4 text-neutral-300">
                A rotating preview of UI patterns. Uses the same glassy surface,
                gradient accents and subtle motion as the Hero.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <button className="btn btn-primary">Explore</button>
                <button className="btn btn-ghost">Documentation</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SlideShowCard;
