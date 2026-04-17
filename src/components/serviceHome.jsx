import { Code, Palette, Smartphone, BarChart } from "lucide-react";
import "../assets/serviceHome.css";

const services = [
  {
    icon: "/construction-worker.png",
    title: "Building Contracting",
    description:
      "We manage projects from concept to completion, ensuring quality workmanship, timely delivery, and cost-effective solutions. Our experienced team coordinates every detail to achieve seamless project execution.",
  },
  {
    icon: "/demolition-hammer.png",
    title: "Guniting",
    description:
      "We specialize in professional guniting services for swimming pools, providing strong, durable, and structurally sound pool shells. Our advanced techniques ensure long-lasting performance and superior finishing quality.",
  },
  {
    icon: "/beam.png",
    title: "Steel Constructions and Contracting",
    description:
      "Our steel construction services include fabrication and erection of structural steel for buildings, warehouses, and industrial facilities. We ensure precision engineering, structural integrity, and compliance with safety standards.",
  },
  {
    icon: "/map.png",
    title: "Interior Fit-Out Works",
    description:
      "We transform interior spaces into functional and aesthetically refined environments. From offices and retail spaces to residential interiors, our fit-out solutions combine design excellence with practical efficiency.",
  },
  {
    icon: "/renovation.png",
    title: "Renovation & Extension Works",
    description:
      "Whether upgrading an existing space or expanding your property, we deliver renovation and extension solutions that enhance value, functionality, and appearance — all while maintaining structural strength and architectural harmony.",
  },
];

export default function ServiceSection() {
  return (
    <section className="services">
      <div className="services-container">
        <h2 className="services-heading">Our Services</h2>

        <div className="services-grid">
          {services.map((service, index) => (
            <div className="service-card" key={index}>
              <img src={service.icon} className="service-icon"></img>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-text">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
// #B52941
