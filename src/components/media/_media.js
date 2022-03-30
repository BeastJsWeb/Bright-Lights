import { Grid } from "@mui/material";
import React, { Component } from "react";
import CardItem from "../app/CardItem";
import group401 from '../../images/group4/01.webp'
import group402 from '../../images/group4/02.webp'
import group403 from '../../images/group4/03.webp'
import group404 from '../../images/group4/04.webp'
import group405 from '../../images/group4/05.webp'

const MediaLib = [
  { title: 'EDC New York', title2: 'Mainstage', image: group401 },
  { title: 'EDC Amsterdam', title2: 'Mainstage', image: group402 },
  { title: 'EDC Colorado', title2: 'Mainstage', image: group403 },
  { title: 'EDC Las Vegas Mainstage', image: group404 },
  { title: 'EDC Miami', title2: 'Mainstage', image: group405 }
]

export default class Media extends Component {
  render() {
    return (
      <Grid container 
      mt='calc(0.5em + 6.7vw)'  
      spacing='1.5vw'
      alignItems={{lg: 'center'}}
      >
        <Grid item 
        lg={3} xs={6} 
        >
          {MediaLib.slice(0,1).map((post, key) => (
            <CardItem {...post} {...key} />
          ))}

        </Grid>

        <Grid container item
        lg={6} xs={12}
        spacing='1.5vw'
        sx={{
          order: {lg: 0, md: -1, sm: -1, xs: -1}
        }}
        >
          {MediaLib.slice(1,3).map((post, key) => (
            <Grid item container sm={6} xs={12}
            flexGrow={1} 
            >
              <CardItem {...post} {...key} />
            </Grid>
          ))}
          {MediaLib.slice(3,4).map((post, key) => (
            <Grid item
            flexGrow={1} 
            >
              <CardItem {...post} {...key} />
            </Grid>
          ))}

        </Grid>

          {MediaLib.slice(4,5).map((post, key) => (
            <Grid item 
            lg={3} xs={6}
            >
              <CardItem {...post} {...key} />
            </Grid>
          ))}
          
      </Grid>
    )
  }
}