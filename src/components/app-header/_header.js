import React from "react";
import HeaderDesktop from "./headerDesktop";
import NavMenu from "./navMenu";
import icon from '../../images/header01.png';
import { 
  Container,  
  CardMedia,
  AppBar, 
  Toolbar 
} from '@mui/material';

const pages = ['About', 'News', 'Music', 'Media', 'Tours', 'Contacts'];

const Header = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget)
  }

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  }

  return (
    <AppBar 
      sx={{
        m: 'auto', 
        maxWidth: '1000px', 
        boxShadow: 'none',
        minWidth: '300px'
      }} 
      color="transparent" 
      position="static"
      >

      <Container sx={{dispaly: 'flex' }} >
        <Toolbar disableGutters >
          <CardMedia
          component="img"
          src={icon}
          alt="Logo"
          sx={{
            width: '225px', 
            maxWidth: '70%'
          }}
          />

          <NavMenu
          headerPages={pages}
          openNavMenu={handleOpenNavMenu}
          closeNavMenu={handleCloseNavMenu}
          openNavMenuCheck={anchorElNav}
          />

          <HeaderDesktop
          headerPages={pages}
          />
          
        </Toolbar>
      </Container>
    </AppBar>
  )
}
export default Header;