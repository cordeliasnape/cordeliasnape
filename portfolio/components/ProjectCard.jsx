export default function ProjectCard({ title, image, description, reflection }) {
  return (
    <div className="project-card">
      <img src={`assets/${image}.jpg`} alt={title} />
      <h2>{title}</h2>
      <p>{description}</p>
      <p>{reflection}</p>
    </div>
  );
}
