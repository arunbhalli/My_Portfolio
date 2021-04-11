import React from "react";
import { Container, Image } from "semantic-ui-react";

const About = () => {
  return (
    <>
      <h1 id="about-header">About me</h1>
      <Container>
        <Image  nameClass="image" src="/image/profile.png" size="medium" floated="right" />
        <div>
          <p className="desc">
            My name is Arun singh and I'm a 26 y/o from the North of India .
            I love to know more about different cultures. I moved to Sweden in  January 2021.
            i started to work in the travel industry and worked in service industry for 2 years.
            I got married in 2019 and i had wait for residence permit and i was in sweden for 3 months and when i went back to india 
            due to Covid-19 I lost my job.
            Before joining service industry i went to college for computer science graduation due to family problems i had to do job so i left college in the middle of my graduation.
          </p>
          <p className="desc">
            When i found out about  Craft Academy  on internet then i got hope to fullfill my dream again to be a programmer,
            i joined Craft academy and currently i am doing 12-week Full Stack Web Developer Boot
            Camp at Craft Academy.
            i am the person who enjoys problem solving, therefore I think it's a really good
            match.
            I'm very excited to start my journey in this new innovating
            industry.
          </p>
        </div>
      </Container>
    </>
  );
};
export default About;
