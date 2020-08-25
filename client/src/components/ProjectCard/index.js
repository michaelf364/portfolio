import React from "react";
import "./style.css";

function ProjectCard(props) {
  return (
    <div>
      <div style={{ width: "22rem", marginLeft:10 }}>
      <div className="card text-white bg-dark">
        <img className="img-fluid" alt={props.name} src={props.image}
          />
        <div className='card-body'>
          <h5 className='card-title'>{props.name}</h5>
          <p className="card-text">{props.description}</p>
          <a href={props.github} target="_blank" rel="noopener noreferrer" className="card-link">Github Project</a>
          <br></br>
          <a href={props.website} target="_blank" rel="noopener noreferrer" className="card-link">Deployed Website</a>
        </div>
      </div>
    </div>
    </div>
  );
}

export default ProjectCard;
