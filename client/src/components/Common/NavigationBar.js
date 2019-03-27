import React from "react";
import NavBar from "./Navbar";
import { Image } from "semantic-ui-react";

const leftItems = [
  { as: "a", content: "Home", key: "home" },
  { as: "a", content: "Gallery", key: "gallery" },
  { as: "a", content: "Book", key: "book" },
  { as: "a", content: "Training", key: "training" },
];

const rightItems = [
  { as: "a", content: "Login", key: "login" },
  { as: "a", content: "Register", key: "register" },
];

export default () => {
  return (
    <NavBar leftItems={leftItems} rightItems={rightItems}>
      <Image src="https://react.semantic-ui.com/assets/images/wireframe/paragraph.png" />
    </NavBar>
  );
};
