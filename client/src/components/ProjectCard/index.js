import React from "react";
import "./style.css";

function ProjectCard(props) {
  return (
    <div>
      <div style={{ width: "22rem" }}>
      <div className="card text-white bg-dark">
        <img className="img-fluid" alt={props.name} src={props.image}
          />
        <div className='card-body'>
          <h5 className='card-title'>{props.name}</h5>
          <a href={props.github} target="_blank" class="">Github Project</a>
          <br></br>
          <a href={props.website} target="_blank" class="">Deployed Website</a>
        </div>
      </div>
    </div>
    </div>
  );
}

export default ProjectCard;
