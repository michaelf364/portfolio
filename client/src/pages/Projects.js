import React, { Component } from "react";
import projects from "../projects.json";
import FriendCard from "../components/ProjectCard";

class Discover extends Component {
  state = {
    projects
  };

  render() {
    return (
      <div className="card-deck">
        {this.state.projects.map(project => (
          <FriendCard
            id={project.id}
            key={project.id}
            name={project.name}
            image={project.image}
            github={project.github}
            website={project.website}
            description={project.description}
          />
        ))}
      </div>
    );
  }
}

export default Discover;
