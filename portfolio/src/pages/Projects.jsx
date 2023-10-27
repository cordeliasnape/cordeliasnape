import ProjectCard from "../components/ProjectCard";

import salmoncookies from "../assets/salmon-cookies.png";
import placeholder from "../assets/placeholder.png";

export default function Projects() {
  return (
    <main>
      <div>
        <h2>My Projects</h2>
        <p>if only i could filter by programmes used...</p>
      </div>
      <div>
        <ProjectCard
          title="Salmon Cookies"
          image={salmoncookies}
          description="A bakery website that supports salmon conservation through cookie sales."
          reflection="I'm passionate about conservation, and this project combines my web development skills with my love for the environment."
          software={["HTML", "CSS", "JavaScript"]}
        />
        <ProjectCard
          title="Project Example"
          image={placeholder}
          description="The line bothers me too."
          reflection="Here I will reflect on the use for the website."
          software={["HTML", "CSS", "JavaScript"]}
        />
        <ProjectCard
          title="Project Example"
          image={placeholder}
          description="The line bothers me too."
          reflection="Here I will reflect on the use for the website."
          software={["HTML", "CSS", "JavaScript"]}
        />
        <ProjectCard
          title="Project Example"
          image={placeholder}
          description="The line bothers me too."
          reflection="Here I will reflect on the use for the website."
          software={["HTML", "CSS", "JavaScript"]}
        />
        <ProjectCard
          title="Project Example"
          image={placeholder}
          description="The line bothers me too."
          reflection="Here I will reflect on the use for the website."
          software={["HTML", "CSS", "JavaScript"]}
        />
      </div>
    </main>
  );
}
