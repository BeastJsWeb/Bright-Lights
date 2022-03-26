import React from "react"
import { Grid, Typography } from "@mui/material";
import logoIcon from '../../images/header01.png';
import footer01 from '../../images/footer/01.svg'
import footer02 from '../../images/footer/02.svg'
import footer03 from '../../images/footer/03.svg'
import footer04 from '../../images/footer/04.svg'
import footer05 from '../../images/footer/05.svg'
import footer06 from '../../images/footer/06.svg'
import IconsMedia from "../app/iconsMedia";
import Management from "./management";
import Logo from "../app/logo";

const footerData = [
  {
    image: logoIcon,
    Managment: 'Jake Henny',
    Email: 'jake@brightlightsofficial.com'
  }
]

const icons = [
  footer01, footer02, footer03, footer04, footer05, footer06
]

const Contacts = () => {
  return (
    <Grid container spacing={{sm: 7, xs: 1}}
    justifyContent='center'
    >
     {footerData.map(data =>(
      <>
        <Grid item >
          <Logo {...data} />
        </Grid>

        <Grid item container
        spacing={{ sm: 4, xs: 2 }}
        >
          <Management {...data} />
        </Grid>

      </>
     ))}

      <Grid item container
      direction='row'
      justifyContent='center'
      columnGap={{ sm: 2.5, xs: 1 }}
      >
        {icons.map(icon => (
          <IconsMedia 
          image={icon}
          width={60}
          height={60}
          />

        ))}

      </Grid>

      <Grid item 
      mb='calc(1em + 0.8vw)' mt='calc(1em + 1.5vw)'
      >
        <Typography
        fontFamily='Poppins'
        textTransform='uppercase'
        fontSize='calc(0.5em + 0.2vw)'
        color='white'
        sx={{ opacity: 0.5 }}
        >
          ©  2020 DJ bright lights.
        </Typography>

      </Grid>

    </Grid>
  )
}

export default Contacts