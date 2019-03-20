import React, { Component } from "react";
import { Container, Row, Col, Carousel } from "react-bootstrap";
import img1 from "../../assets/pexels-photo-1190298.jpeg";
import img2 from "../../assets/pexels-photo-1304473.jpeg";
import img3 from "../../assets/pexels-photo-1679825.jpeg";
import img4 from "../../assets/pexels-photo-59884.jpeg";
import img5 from "../../assets/pexels-photo-801863.jpeg";

class Home extends Component {
  render() {
    return (
      <Container fluid>
        <Row className="">
          <div className="home-carousel">
            <Carousel>
              <Carousel.Item>
                <img className="d-block nav-img" src={img1} alt="First slide" />
                <Carousel.Caption>
                  <h3>First slide label</h3>
                  <p>
                    Nulla vitae elit libero, a pharetra augue mollis interdum.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-block nav-img" src={img2} alt="Third slide" />

                <Carousel.Caption>
                  <h3>Second slide label</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-block nav-img" src={img3} alt="Third slide" />

                <Carousel.Caption>
                  <h3>Third slide label</h3>
                  <p>
                    Praesent commodo cursus magna, vel scelerisque nisl
                    consectetur.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-block nav-img" src={img2} alt="Third slide" />

                <Carousel.Caption>
                  <h3>Fourth slide label</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block nav-img"
                  src={img4}
                  alt="Fourth slide"
                />

                <Carousel.Caption>
                  <h3>Fifth slide label</h3>
                  <p>
                    Praesent commodo cursus magna, vel scelerisque nisl
                    consectetur.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-block nav-img" src={img5} alt="Third slide" />

                <Carousel.Caption>
                  <h3>Sixth slide label</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-block nav-img" src={img3} alt="Fifth slide" />

                <Carousel.Caption>
                  <h3>Seventh slide label</h3>
                  <p>
                    Praesent commodo cursus magna, vel scelerisque nisl
                    consectetur.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </div>
          <div className="intro">
            <p className="into-text">
              GDS Events & Marketing Limited is a company focused on the
              delivery of quality services and provision of exceptional
              solutions for the realization of each client’s unique marketing
              needs, ultimately adding value to your business. We specialize in
              corporate events planning and conferences, galas, fashion and
              trade shows, fund raising coordination, team building activities,
              board retreats, conventions, seminars, product launches, theme
              parties and grand opening celebrations. MSJ Events also provides
              custom event décor and design, catering, entertainment and
              marketing for private individuals, institutions, corporate and
              charity organizations. Our experience and key relationships in the
              industry enable us to source and invite clients to your events
              solely based on our recommendations and the strong relationships
              we have fostered. Feel free to follow us on Twitter
            </p>
          </div>
        </Row>
        <Row>
          <Col />
        </Row>
        <Row>
          <Col>
            <div className="about">
              <p className="p-lead">Our Services</p>
              <ul>
                <li>Corporate Events management Hospitality </li>
                <li>Entertainment Corporate</li>
                <li>Christmas parties Corporate Dinners</li>
                <li>Galas & Award nights</li>
                <li>Exhibitions Retreats & team building exercises</li>
                <li>Christmas</li>
                <li>Decoration Annual General Meetings (AGM)</li>
                <li>More</li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Home;
