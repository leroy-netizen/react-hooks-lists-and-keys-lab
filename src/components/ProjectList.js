import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  console.log(projects);
  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">
        {/* {console.log(projects)} */}
        {projects.map((project) => (
          <ProjectItem
            name={project.name}
            key={project.id}
            project={project.name}
            about={project.about}
            technologies={project.technologies}
          />
        ))}
        {/* render ProjectItem components here */}
      </div>
    </div>
  );
}

export default ProjectList;
