import React from "react";
import { Menu, Segment } from "semantic-ui-react";
import { NavLink } from "react-router-dom";
const Header = () => {
  return (
    <Segment inverted color="blue">
      <Menu inverted secondary>
         <Menu.Item
          id="about-tab"
          name="about me"
          as={NavLink}
          to={{pathname: "/about" }}
        />
         <Menu.Item
          id="projects-tab"
          name="my projects"
          as={NavLink}
          to={{ pathname: "/projects" }}
        />
        <Menu.Item
          id="cv-tab"
          name="my CV"
          data-cy="cv-tab"
          as={NavLink}
          to={{ pathname: "/cv" }}
        />
        <Menu.Item
        id="contact"
        name="contact"
        as={NavLink}
        to={{ pathname: "/contact" }}
      />
      </Menu>
    </Segment>
  );
};
export default Header;
