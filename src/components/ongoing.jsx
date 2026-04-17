import "../assets/ongoing.css";

const projects = [
  {
    id: 1,
    name: "",
    image: [
      "/IMG_20260210_170409.jpg.jpeg",
      "/IMG_20260216_074246.jpg.jpeg",
      "/IMG_20260220_065052.jpg.jpeg",

      "/IMG_20260220_155315.jpg.jpeg",
      "/IMG_20260221_094601.jpg.jpeg",
      "/IMG_20260213_081144.jpg.jpeg",
      // "/ongoing.jpeg",/
    ],
  },
  // <img className="ongo-img" src="/ongoing.jpeg" alt="" />/
];

const projects2 = [
  {
    id: 1,
    name: "PROPOSED WAREHOUSE FACILITIES ON PLOT NO S51016,JAFZA SOUTH, DUBAI, UAE",
    image: [
      "/sec-1.jpeg",
      "/sec-2.jpeg",
      "/sec-3.jpeg",
      "/sec-4.jpeg",
      "/sec-5.jpeg",
      "/sec-6.jpeg",
    ],
  },
];

const OnGoing = () => {
  return (
    <div className="ongoing-main-1">
      <h1>On-Going Projects</h1> <br />
      <h3 className="ongoing-title">
        G+1 Jamshid Rahim Food Stuff Ware House Facilities, DIC, Dubai -
        UAE-SELECTED PHOTOS
      </h3>
      {projects.map((project) => (
        <div
          style={{ maxWidth: "80rem" }}
          className="ongoing-container"
          key={project.id}
        >
          <div className="ongoing-grid-2">
            {project.image.slice(0, 2).map((img, index) => (
              <img
                src={img}
                alt={`${project.name} ${index + 1}`}
                className="ongoing-image"
                key={index}
              />
            ))}
          </div>
          <div className="ongoing-grid">
            {project.image.slice(3, 7).map((img, index) => (
              <img
                src={img}
                alt={`${project.name} ${index + 1}`}
                className="ongoing-image"
                key={index}
              />
            ))}
          </div>
        </div>
      ))}
      <img className="ongo-img" src="/ongoin2.jpeg" alt="" />
      <br />
      <br />
      <h3 className="ongoing-title">
        PROPOSED WAREHOUSE FACILITIES ON PLOT NO S51016,JAFZA SOUTH, DUBAI, UAE
      </h3>{" "}
      <br />
      {projects2.map((project) => (
        <div
          style={{ maxWidth: "80rem" }}
          className="ongoing-container-2"
          key={project.id}
        >
          <div className="ongoing-grid-2">
            {project.image.slice(0, 2).map((img, index) => (
              <img
                src={img}
                alt={`${project.name} ${index + 1}`}
                className="ongoing-image"
                key={index}
              />
            ))}
          </div>
          {/* <img className="ongo-img" src="/ongoing.jpeg" alt="" /> */}
          <div className="ongoing-grid">
            {project.image.slice(3, 7).map((img, index) => (
              <img
                src={img}
                alt={`${project.name} ${index + 1}`}
                className="ongoing-image"
                key={index}
              />
            ))}
          </div>
        </div>
      ))}
      <img className="ongo-img" src="/ongoing.jpeg" alt="" />
    </div>
  );
};

export default OnGoing;
