import React from "react";
import "./style.css";
import { MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol, MDBLink, MDBCardGroup} from 'mdbreact';

function ProjectCard(props) {
  return (
    <MDBCardGroup>
      <MDBCol style={{ maxWidth: "22rem" }}>
      <MDBCard>
        <MDBCardImage className="img-fluid" alt={props.name} src={props.image}
          waves />
        <MDBCardBody className='elegant-color white-text rounded-bottom'>
          <MDBCardTitle >{props.name}</MDBCardTitle>
          <MDBCardText></MDBCardText>
          <MDBLink to={props.occupation} link>
                      Home
                    </MDBLink>
                    <MDBLink to={props.occupation} link>
                      Home
                    </MDBLink>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
    </MDBCardGroup>
  );
}

export default ProjectCard;
