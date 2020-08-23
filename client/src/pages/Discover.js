import React, { Component } from "react";
import friends from "../friends.json";
import FriendCard from "../components/ProjectCard";
import { MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol, MDBLink, MDBCardGroup } from 'mdbreact';

class Discover extends Component {
  state = {
    friends
  };


  render() {
    return (
      <div>
        <MDBCardGroup>
        {this.state.friends.map(friend => (
          <FriendCard
            id={friend.id}
            key={friend.id}
            name={friend.name}
            image={friend.image}
            occupation={friend.occupation}
            location={friend.location}
          />
        ))}
        </MDBCardGroup>
      </div>
    );
  }
}

export default Discover;
