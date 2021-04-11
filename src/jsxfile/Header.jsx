import React from "react";
import { Menu, Segment } from "semantic-ui-react";
import { NavLink } from "react-router-dom";
import {  Button, Icon } from 'semantic-ui-react'
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
      <div id='buttons' style={{ marginLeft:"40%"}}>
        <a href='https://www.linkedin.com/in/sanne-lindholm/'>
          <Button animated='vertical' basic color='white'>
            <Button.Content hidden>
              <Icon name='linkedin' />
            </Button.Content>
            <Button.Content visible style={{ color: 'white'}}>LinkedIn</Button.Content>
          </Button>
        </a>
        <a href='https://github.com/salindholm'>
          <Button animated='vertical' basic color='white'>
            <Button.Content hidden>
              <Icon name='github' />
            </Button.Content>
            <Button.Content visible style={{ color: 'white'}}>GitHub</Button.Content>
          </Button>
        </a>
        <a href='.' target='_blank' rel='noreferrer noopener'>
          <Button animated='vertical' basic color='white'>
            <Button.Content hidden>
              <Icon name='file code' />
            </Button.Content>
            <Button.Content visible style={{ color: 'white'}}>Resume</Button.Content>
          </Button>
        </a>
      </div>
      </Menu>
    </Segment>
  );
};
export default Header;
