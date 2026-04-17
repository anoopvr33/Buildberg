import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import React, { useEffect, useState } from "react";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import "../assets/about.css";

const slides = [
  {
    id: 1,
    name: "Rajesh Kumar",
    title: "Residential Owner",
    subtitle:
      "Buildberg Contracting transformed our home vision into reality with superior quality and professionalism.",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=2000&auto=format&fit=crop",
    imag: "/man avatar.jpg",
  },
  {
    id: 2,
    name: "Anil Thomas",
    title: "Villa Owner",
    subtitle:
      "Their design expertise and quality workmanship stood out. Truly professional from start to finish.",
    image:
      "https://images.unsplash.com/photo-1492724441997-5dc865305da7?q=80&w=2000&auto=format&fit=crop",
    imag: "/Download Free Vectors, Images, Photos & Videos _ Vecteezy.jpg",
  },
  {
    id: 3,
    name: "Neha Sharma",
    title: "Commercial Developer",
    subtitle:
      "“Timely execution, excellent coordination, and stunning results. Highly recommended.”",
    image:
      "https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d?q=80&w=2000&auto=format&fit=crop",
    imag: "/Woman free icons designed by Prosymbols Premium.jpg",
  },
];

const About = () => {
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
    <div className="about-main">
      <Navbar></Navbar>
      <h1 className="about-h1">About Us</h1>
      <p style={{ maxWidth: "80rem" }} className="about-p">
        BBC Buildberg Contracting is a full-service construction company
        delivering high-quality commercial, residential, and interior fit-out
        projects with precision and discipline. Built on a foundation of
        integrity and technical expertise, we manage every stage of
        development—from planning and execution to final handover—with
        meticulous attention to detail. Our team collaborates closely with
        clients, consultants, and stakeholders to ensure projects meet the
        highest standards of safety, quality, and efficiency. We combine
        engineering accuracy with refined craftsmanship to create functional
        spaces that are built to endure. Through innovation, reliability, and
        strong project management, we transform concepts into purposeful
        environments that elevate how people live and work.
      </p>{" "}
      <br /> <br />
      <div style={{ maxWidth: "80rem" }} className="flex-1">
        <h2>Our Mission</h2>
        <p>
          To deliver high-quality commercial, residential, and interior fit-out
          projects through precision execution, skilled workmanship, and strong
          project management, while maintaining the highest standards of safety,
          integrity, and client satisfaction.
        </p>
      </div>
      <div style={{ maxWidth: "80rem" }} className="flex-1">
        <h2>Our Vision</h2>
        <p>
          To be a trusted contracting partner recognized for quality,
          reliability, and excellence in delivering innovative and sustainable
          construction solutions across the built environment.
        </p>
      </div>
      <h1 className="about-h1">What Our Clients Says</h1>
      <p className="about-p-1">
        We’re proud to have earned the trust of clients across residential,
        commercial, and industrial sectors.
      </p>
      <section style={{ maxWidth: "80rem" }} className="hero-2">
        <AnimatePresence mode="wait">
          <motion.div
            key={slide.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="hero-2-slide"
          >
            <motion.img
              //   src={slide.image}
              //   alt={slide.title}
              className="hero-2-image"
              initial={{ scale: 1.05 }}
              animate={{ scale: 1.15 }}
              transition={{ duration: 8, ease: "easeInOut" }}
            />
            <div className="hero-2-overlay" />

            <div className="hero-2-content">
              <motion.img
                src={slide.imag}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="hero-2-img-2"
              ></motion.img>
              <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="hero-2-title"
              >
                {slide.name}
              </motion.h1>{" "}
              <br />
              <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="hero-2-title"
              >
                {slide.title}
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="hero-2-subtitle"
              >
                {slide.subtitle}
              </motion.p>
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="hero-2-nav">
          <button className="nav-btn" onClick={prevSlide}>
            <ChevronLeft size={24} />
          </button>
          <button className="nav-btn" onClick={nextSlide}>
            <ChevronRight size={24} />
          </button>
        </div>
      </section>
      <Footer></Footer>
    </div>
  );
};

export default About;
