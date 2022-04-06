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
  const [open, setOpen] = React.useState(false)
  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
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
          onClick={toggleDrawer(true)}
          onOpen={toggleDrawer(true)}
          onClose={toggleDrawer(false)}
          open={open}
          onClickNavBtn={toggleDrawer(false)}
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