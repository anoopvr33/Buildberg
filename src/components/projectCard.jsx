// ProjectsSection.jsx
import axios from "axios";
import "../assets/projects.css";
import { useEffect, useState } from "react";
import { p } from "framer-motion/client";

export default function ProjectsSection() {
  const [data1, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState("");

  const GetData = async () => {
    const response = await axios.get(
      "https://backend.buildberg.ae/api/gallery/getgallery/",
    );
    if (response.status != 200) {
      setLoading(true);
    }
    if (response.data) {
      setData(response.data);
      console.log(response.data);
    }
  };

  const data = [
    {
      id: 1,
      name: "PROPOSED WAREHOUSE FACILITIES ON PLOT NO S51016,JAFZA SOUTH, DUBAI, UAE",
      image: [
        "/project1.3.jpg",
        "/comm.jpeg",
        "/commm.jpeg",
        "/commmm.jpeg",
        "/sec-5.jpeg",
        "/sec-6.jpeg",
      ],
    },
  ];

  useEffect(() => {
    // GetData();
  }, []);

  console.log("sasas", open);

  return (
    <section className="projects">
      <div className="projects-container">
        <h2 className="projects-heading">Completed Projects</h2>

        <h3 style={{ margin: "auto", textAlign: "center" }}>
          Interlock work-Al Nawras Car Services LLC
        </h3>
        {data.map((project) => (
          <div
            style={{ maxWidth: "80rem" }}
            className="ongoing-container"
            key={project.id}
          >
            <div className="ongoing-grid-2">
              {project.image.slice(0, 4).map((img, index) => (
                <img
                  src={img}
                  alt={`${project.name} ${index + 1}`}
                  className="ongoing-image"
                  key={index}
                />
              ))}
            </div>
            <div className="ongoing-grid"></div>
          </div>
        ))}

        {/* <div className="projects-grid">
          {data.length == 0 ? (
            <p>New Works On-Going...</p>
          ) : (
            data.map((project, index) => (
              <div
                onClick={() => setOpen(index)}
                className="project-card"
                key={index}
              >
                <div className="project-image-wrapper">
                  {project.images.slice(0, 1).map((i) => (
                    <img
                      src={i}
                      // alt={project.name}
                      className="project-image"
                    />
                  ))}
                </div>
                <h3 className="project-title">{project.name}</h3>
              </div>
            ))
          )}
        </div> */}
      </div>
      {/* {open !== "" && (
        <div className="pop-card">
          <i onClick={() => setOpen("")} class="fa-solid fa-xmark"></i>

          <div className="img-scroll">
            {data[open].images.map((i) => (
              <>
                <img src={i} />
              
              </>
            ))}
          </div>

          <p>Name: {data[open].name}</p>
          <p>Client Details: {data[open].clientDetails}</p>
          
          <p>sizeSqFt: {data[open].sizeSqFt}</p>
          <p>status: {data[open].status}</p>
        </div>
      )} */}
    </section>
  );
}
