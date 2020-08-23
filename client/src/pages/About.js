import React from "react";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
const styles = {
  imageStyle: {
    borderRadius: 33
  },
  headingStyle: {
    fontSize: 100
  }
};
function About() {
  return (
    <div>
      <Container>
        <Row>
          <Col size="md-12">
            <Row>
              <Col size="md-3">
                <img style={styles.imageStyle} src="https://michaelf364.github.io/02-Portfolio/Assets/Images/picture.jpg" alt="Michael leaning against a wall" class="img-fluid" />
              </Col>
              <Col size="md-9">
                <p class="text-white">I'm an experienced  Quality Assurance Automation Engineer turned Full Stack Developer located in Phoenix, Arizona</p>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default About;
