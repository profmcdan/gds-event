import React, { Component } from "react";
import { Icon } from "semantic-ui-react";

class Services extends Component {
  render() {
    return (
      <div className="services">
        <div>What We offer</div>
        <p>Every event is unique and uniquely handled</p>
        <div>
          <h4 className="p-up">Corporate events</h4>
          <ul>
            <li>Meetings</li>
            <li>Incentives</li>
            <li>Conferences</li>
            <li>Exhibitions</li>
            <li>Product launches</li>
            <li>Product activation</li>
            <li>Social events</li>
            <li>Wedding</li>
            <li>Birthdays</li>
            <li>Burial</li>
            <li>Naming ceremony</li>
            <li>Introduction, e.t.c.</li>
          </ul>
          <h4 className="p-up">Services</h4>
          <ul>
            <li>Food and beverages</li>
            <li>Hotel management</li>
            <li>Logistic</li>
            <li>Transportation</li>
            <li>Event venue</li>
            <li>Decorations</li>
            <li>Volunteers</li>
            <li>Speakers</li>
            <li>Stage</li>
            <li>Media management</li>
            <li>Event conception</li>
            <li>Planning</li>
            <li>Event branding</li>
            <li>Advertising</li>
            <li>Production</li>
          </ul>

          <div>
            <h4 className="p-up">Our approach</h4>
            <p>How do we do it? How do we make it happen?</p>
            <ul>
              <li>
                <h5>Learn</h5>
                <p>
                  We get to know you and your needs. By thoroughly understanding
                  your company’s profile, how your organization operates, we
                  become a part of your team.
                </p>
              </li>
              <li>
                <h5>Build</h5>
                <p>
                  Leave the planning and management to us. Let us look after the
                  details and the heavy lifting, the ground and field work that
                  come with revenue generation schemes.
                </p>
              </li>
              <li>
                <h5>Deliver</h5>
                <p>
                  Sit back and Relax. We implement the event. Your event our
                  responsibility....
                </p>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="p-up">Contact Us</h4>
            <p>
              <Icon name="phone square" /> 08164196104
            </p>
            <p>
              <Icon name="mail square" /> gsdeventz@gmail.com
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Services;
