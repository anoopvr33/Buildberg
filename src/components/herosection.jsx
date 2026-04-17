import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "../assets/hero.css";

const slides = [
  {
    id: 1,
    title: "Built on Precision. Delivered with Integrity.",
    subtitle:
      "Full-service construction contracting specializing in commercial, residential, and industrial projects — completed on time, on budget, and built to last.",
    image: "/2151004026.jpg",
  },
  {
    id: 2,
    title: "Where Vision Meets Structure.",
    subtitle:
      "We transform concepts into durable, high-performance spaces through expert planning, skilled trades, and precise project coordination.",
    image: "/2151011618.jpg",
  },
  {
    id: 3,
    title: "Building the Future, One Project at a Time.",
    subtitle:
      "Scalable construction services designed to meet evolving demands — from ground-up developments to complex renovations.",
    image: "/2151248494.jpg",
  },
];

export default function HeroSection() {
  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  const slide = slides[index];

  return (
    <section className="hero">
      <AnimatePresence mode="wait">
        <motion.div
          key={slide.id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="hero-slide"
        >
          <motion.img
            src={slide.image}
            alt={slide.title}
            className="hero-image"
            initial={{ scale: 1.05 }}
            animate={{ scale: 1.15 }}
            transition={{ duration: 8, ease: "easeInOut" }}
          />

          <div className="hero-overlay" />

          <div className="hero-content">
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="hero-title"
            >
              {slide.title}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="hero-subtitle"
            >
              {slide.subtitle}
            </motion.p>{" "}
          </div>
        </motion.div>
      </AnimatePresence>

      <div className="hero-nav">
        <button className="nav-btn" onClick={prevSlide}>
          <ChevronLeft size={24} />
        </button>
        <button className="nav-btn" onClick={nextSlide}>
          <ChevronRight size={24} />
        </button>
      </div>
    </section>
  );
}
