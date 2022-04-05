import { Grid } from "@mui/material";
import React, { Component } from "react";
import CardItem from "../app/CardItem";
import group401 from '../../images/group4/01.webp'
import group401jpg from '../../images/group4/01.jpg'
import group402 from '../../images/group4/02.webp'
import group402jpg from '../../images/group4/02.jpg'
import group403 from '../../images/group4/03.webp'
import group403jpg from '../../images/group4/03.jpg'
import group404 from '../../images/group4/04.webp'
import group404jpg from '../../images/group4/04.jpg'
import group405 from '../../images/group4/05.webp'
import group405jpg from '../../images/group4/05.jpg'

const MediaLib = [
  { 
    title: 'EDC New York', 
    title2: 'Mainstage', 
    image: group401, 
    jpg: group401jpg 
  },
  { 
    title: 'EDC Amsterdam', 
    title2: 'Mainstage', 
    image: group402, 
    jpg: group402jpg 
  },
  { 
    title: 'EDC Colorado', 
    title2: 'Mainstage', 
    image: group403, 
    jpg: group403jpg 
  },
  { 
    title: 'EDC Las Vegas Mainstage', 
    image: group404, 
    jpg: group404jpg 
  },
  { 
    title: 'EDC Miami', 
    title2: 'Mainstage', 
    image: group405, 
    jpg: group405jpg 
  }
]

export default class Media extends Component {
  render() {
    return (
      <Grid container
      className="Section"
      id="Media" 
      mt='calc(0.5em + 6.7vw)'  
      spacing='1.5vw'
      alignItems={{lg: 'center'}}
      >
        <Grid item 
        lg={3} xs={6} 
        >
          {MediaLib.slice(0,1).map(post => (
            <CardItem {...post} 
            key={post.title + post.title2} 
            />

          ))}

        </Grid>

        <Grid container item
        lg={6} xs={12}
        spacing='1.5vw'
        sx={{
          order: {lg: 0, md: -1, sm: -1, xs: -1}
        }}
        >
          {MediaLib.slice(1,3).map(post => (
            <Grid item container 
            sm={6} xs={12}
            flexGrow={1} 
            key={post.title + post.title2} 
            >
              <CardItem {...post} />

            </Grid>

          ))}
          
            <Grid item
            flexGrow={1} 
            >
              {MediaLib.slice(3,4).map(post => (
                <CardItem {...post}
                key={post.title + post.title2}  
                />

              ))}

            </Grid>

        </Grid>

          <Grid item 
          lg={3} xs={6}
          >
            {MediaLib.slice(4,5).map(post => (
              <CardItem {...post} 
              key={post.title + post.title2}  
              />
              
            ))}
            
          </Grid>
          
      </Grid>
    )
  }
}