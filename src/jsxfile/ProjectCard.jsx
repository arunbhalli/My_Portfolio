import React from "react"
import { Card, Image ,Icon } from "semantic-ui-react"


const ProjectCard = ({ project }) => {
  return (
    <Card className="img">
      <Image src={project.image} wrapped ui={false} />
      <Card.Content>
        <Card.Header>{project.name}</Card.Header>
        <Card.Description>{project.description}</Card.Description>
      </Card.Content>
      <Card.Content className="ico">
      <a href={project.github}>
      <Icon name="github" id={`gitIcon-${project.id}`} />
    </a>
    <a href={project.url}>
        <Icon name="external alternate" id={`urlIcon-${project.id}`} />
    </a>
  </Card.Content>
    </Card>
  )
}

export default ProjectCard