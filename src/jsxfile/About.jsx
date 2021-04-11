import React from "react";
import { Container, Image } from "semantic-ui-react";
import { Embed } from 'semantic-ui-react'


const About = () => {
  return (
    <Container className='container-grid'>
      <h1 id="about-header">About Me</h1>
      <p>My name is Arun stringWidth</p>
      <div>
        <Image src="/image/profile.png" size="medium" effect="sepia" radius="100" />
      </div>
      <Embed
      aspectRatio='4:3'
      id='HTZudKi36bo'
      placeholder='/images/4by3.jpg'
      source='/image/myvideo.mp4'
    />
   </Container>
  );
};
export default About;
