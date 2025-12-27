import React from "react";
import { Link } from "react-router-dom";
import "./Hero.css";
import computer from "../assets/computer.png";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-base-200 min-h-screen flex items-center pt-13 md:pt-13">
      <div className="hero-bg" aria-hidden="true">
        <span className="blob b1" />
        <span className="blob b2" />
        <span className="blob b3" />
      </div>

      <div className="container mx-auto px-6 py-24 hero-content-wrapper">
        <div className="max-w-4xl mx-auto bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 md:p-12 shadow-xl">
          <div className="lg:flex lg:items-center lg:gap-8">
            <div className="flex-1">
              <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-brand-gradient text-gradient-animate">
                Build beautiful interfaces, faster.
              </h1>
              <p className="mt-4 text-lg text-neutral-300">
                Design, prototype, and ship with confidence. Utilities, components and themes powered by Tailwind + DaisyUI.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link to="/contact" className="btn btn-primary">Contact Us</Link>
                <Link to="/services" className="btn btn-ghost">Learn more</Link>
              </div>
            </div>

            <div className="mt-8 lg:mt-0 lg:w-1/3 flex justify-center">
              <img
                src={computer}
                alt="Illustration"
                className="rounded-xl shadow-2xl w-full max-w-xs"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
