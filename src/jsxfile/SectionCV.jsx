import React from "react";
import { Container, Grid, Header } from "semantic-ui-react";

const ToFitDataCy = (string) => {
  return string.replace(/\s+/g, '-').replace(':', '').toLowerCase()
}

const ListTitles = ({section}) => {
  return (
  <>
    {
      section.items.map((item) => 
        <Header as='h3' style={{ color: 'white',paddingBottom:"30px" ,paddingTop:"50px"}} data-cy={ToFitDataCy(item.title)}>            
          {`${item.title}`}
        </Header>
      )
    }
  </>  
  )
}



const ListData = ({section}) => {  
  return (
    <>
      {
        section.items.map((item) =>
          <div>
            {Object.keys(item.data).map((key) => <p data-cy={`${key}`}>{`${key}: ${item.data[key]}`}</p>)}
          </div>
        )
      }
    </>
  )   
}

const SectionCV = ({section}) => {
  
  return (
    <Container text className="res">      
      <Header as='h2' style={{ color: 'white',paddingBottom: '25px', textDecoration:"underline red",}}  data-cy={`${ToFitDataCy(section.name)}-header`}>
        {section.name}
      </Header>
      <Grid columns='2' relaxed="very" className="col1">
        <Grid.Column>          
          <ListTitles section={section} />
        </Grid.Column>
        <Grid.Column className="col2">                      
            <ListData section={section}/>         
        </Grid.Column>
      </Grid>      
    </Container>
  )
}

export default SectionCV