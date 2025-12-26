import React from "react";
import { useState, useEffect } from "react";

import computer from "../assets/computer.png";
import reactLogo from "../assets/react.svg";

import Hero from "../components/Hero";
import Testimonials from "../components/Testimonials";
import Projects from "../components/Projects";
import SlideShowCard from "../components/SlideShowCard";

const images = [computer, reactLogo, "/vite.svg"];

const Home = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIndex((i) => (i + 1) % images.length), 4000);
    return () => clearInterval(t);
  }, []);

  function prev() {
    setIndex((i) => (i - 1 + images.length) % images.length);
  }
  function next() {
    setIndex((i) => (i + 1) % images.length);
  }
  return (
    <>
      {/* Hero Section */}
      <Hero />

      {/* Slide Show card section */}
      <SlideShowCard images={images} index={index} prev={prev} next={next} />

      {/* Projects */}
      <Projects />

      {/* Testimonials */}
      <Testimonials />
    </>
  );
};

export default Home;
