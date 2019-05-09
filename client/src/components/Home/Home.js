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
    const imageList = [
      {
        image: img1,
        title: "First slide label",
        description: "Nulla vitae elit libero, a pharetra augue mollis interdum"
      },
      {
        image: img2,
        title: "Second slide label",
        description: "Nulla vitae elit libero, a pharetra augue mollis interdum"
      },
      {
        image: img3,
        title: "Third slide label",
        description: "Nulla vitae elit libero, a pharetra augue mollis interdum"
      },
      {
        image: img4,
        title: "Fourth slide label",
        description: "Praesent commodo cursus magna,  scelerisque consectetur"
      },
      {
        image: img5,
        title: "Fifth slide label",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      }
    ];
    return (
      <div className="image-container">
        <Carousel>
          {imageList.map((iml, index) => (
            <Carousel.Item key={index}>
              <img
                className="d-block nav-img"
                src={iml.image}
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>{iml.title}</h3>
                <p>{iml.description}</p>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>

        <Services />
      </div>
    );
  }
}

export default Home;
