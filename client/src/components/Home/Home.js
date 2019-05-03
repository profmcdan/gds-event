import React, { Component } from "react";
import { Carousel } from "react-bootstrap";
import img1 from "../../assets/pexels-photo-1190298.jpeg";
import img2 from "../../assets/pexels-photo-1304473.jpeg";
import img3 from "../../assets/pexels-photo-1679825.jpeg";
import img4 from "../../assets/pexels-photo-59884.jpeg";
import img5 from "../../assets/pexels-photo-801863.jpeg";
import Services from "./Services";

class Home extends Component {
  render() {
    return (
      <div className="container">
        <Carousel>
          <Carousel.Item>
            <img className="d-block nav-img" src={img1} alt="First slide" />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block nav-img" src={img2} alt="Third slide" />

            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block nav-img" src={img3} alt="Third slide" />

            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block nav-img" src={img2} alt="Third slide" />

            <Carousel.Caption>
              <h3>Fourth slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block nav-img" src={img4} alt="Fourth slide" />

            <Carousel.Caption>
              <h3>Fifth slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block nav-img" src={img5} alt="Third slide" />

            <Carousel.Caption>
              <h3>Sixth slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block nav-img" src={img3} alt="Fifth slide" />

            <Carousel.Caption>
              <h3>Seventh slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>

        <Services />
      </div>
    );
  }
}

export default Home;
