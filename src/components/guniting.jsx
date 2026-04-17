import "../assets/ongoing.css";

const projects = [
  {
    id: 1,
    name: "",
    image: ["/WhatsApp Image 2026-02-23 at 11.49.45 AM.jpeg"],
    video: [
      "/WhatsApp Video 2026-02-23 at 11.49.27 AM.mp4",
      "/vid-1.mp4",
      "/WhatsApp Video 2026-02-23 at 11.45.53 AM.mp4",
      "/WhatsApp Video 2026-02-23 at 11.45.53 AM.mp4",
      "/WhatsApp Video 2026-02-23 at 11.45.53 AM (1).mp4",
    ],
  },
];

const Guniting = () => {
  return (
    <div className="ongoing-main">
      <h1>Guniting</h1>
      {projects.map((project) => (
        <div
          style={{ maxWidth: "80rem" }}
          className="ongoing-container"
          key={project.id}
        >
          <h3 className="ongoing-title">{project.name}</h3>
          <div className="ongoing-grid">
            {project.image.map((img, index) => (
              <img
                src={img}
                alt={`${project.name} ${index + 1}`}
                className="ongoing-image"
                key={index}
              />
            ))}
            {project.video.map((img, index) => (
              <video className="ongoing-image" key={index} controls>
                <source className="ongoing-image" src={img} type="video/mp4" />
              </video>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Guniting;
