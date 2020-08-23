import React, { Component } from "react";
import projects from "../projects.json";
import FriendCard from "../components/ProjectCard";
import { MDBCardGroup } from 'mdbreact';

class Discover extends Component {
  state = {
    projects
  };


  render() {
    return (
      <div background="elegant-color">
        <MDBCardGroup>
        {this.state.projects.map(project => (
          <FriendCard
            id={project.id}
            key={project.id}
            name={project.name}
            image={project.image}
            occupation={project.occupation}
            location={project.location}
          />
        ))}
        </MDBCardGroup>
      </div>
    );
  }
}

export default Discover;
