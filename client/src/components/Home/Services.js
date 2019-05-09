import React, { Component } from "react";

class Services extends Component {
  render() {
    return (
      <div className="services-container">
        <div className="corporate-event">
          <div className="corporate-header">
            <h4 className="p-up">Events</h4>
          </div>
          <p>
            <span>Every event is unique and uniquely handled</span>
          </p>
          <div className="corporate-body">
            <div className="category">
              <h5>Corporate</h5>
              <p>
                Meetings, Incentives, Conferences, Exhibitions, Product launches
                & Product activation
              </p>
            </div>
            <div className="category">
              <h5>Social</h5>
              <p>Wedding, Birthdays, Burial, Naming ceremony, Introduction, </p>
            </div>
          </div>
        </div>

        <div className="services">
          <div className="corporate-header">
            <h4 className="p-up">Services</h4>
          </div>
          <div class="fixed-size-container">
            <div class="fixed-size">
              <p>Food and beverages</p>
              <p>Hotel management</p>
              <p>Logistic</p>
              <p>Transportation</p>
            </div>
            <div class="fixed-size">
              <p>Event venue</p>
              <p>Decorations</p>
              <p>Volunteers</p>
              <p>Speakers</p>
            </div>
            <div class="fixed-size">
              <p>Media management</p>
              <p>Event conception</p>
              <p>Planning</p>
              <p>Event branding</p>
            </div>
            <div class="fixed-size">
              <p>Advertising</p>
              <p>Production</p>
              <p>Stage</p>
            </div>
          </div>
        </div>

        <div className="our-approach">
          <h4 className="p-up">Our approach</h4>
          <div className="approaches">
            <div>
              <h5>Learn</h5>
              <p>
                We get to know you and your needs. By thoroughly understanding
                your company’s profile, how your organization operates, we
                become a part of your team.
              </p>
            </div>
            <div>
              <h5>Build</h5>
              <p>
                Leave the planning and management to us. Let us look after the
                details and the heavy lifting, the ground and field work that
                come with revenue generation schemes.
              </p>
            </div>
            <div>
              <h5>Deliver</h5>
              <p>
                Sit back and Relax. We implement the event. Your event our
                responsibility....
              </p>
            </div>
          </div>
        </div>

        <div>
          <h4 className="p-up">Contact Us</h4>
          <p>
            <i name="phone square" /> 08164196104
          </p>
          <p>
            <i name="mail square" /> gsdeventz@gmail.com
          </p>
        </div>
      </div>
    );
  }
}

export default Services;
