import React from "react";
import HeaderDesktop from "./headerDesktop";
import NavMenu from "./navMenu";
import mainLogo from '../../images/header01.webp';
import { 
  Container, 
  AppBar, 
  Toolbar, 
  Box
} from '@mui/material';
import Logo from "../app/logo";

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
    id="back-to-top-anchor"
      sx={{
        m: 'auto', 
        maxWidth: '1000px', 
        boxShadow: 'none',
        minWidth: '300px',
        userSelect: 'none'
      }} 
      color="transparent" 
      position="static"
      >

      <Container sx={{ dispaly: 'flex' }} >
        <Toolbar disableGutters >
          <Box>
            <Logo image={mainLogo} />
          </Box>

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