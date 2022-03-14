import React from "react";
import { 
  Box, 
  IconButton,
  Drawer,
  MenuItem,
  Typography 
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const NavMenu = ({headerPages, openNavMenu, closeNavMenu, openNavMenuCheck}) => {
  return (
    <Box 
    sx={{ 
      flexGrow: 1, 
      display: { xs: 'flex', md: 'none' },
      justifyContent: 'flex-end', 
      mb: 2 
    }}
    >
      <IconButton
      size="large"
      aria-controls="menu-appbar"
      aria-haspopup="listbox"
      onClick={openNavMenu}
      sx={{color: 'white'}}
      >
        <MenuIcon/>
      </IconButton>
        <Drawer
        anchor='right'
        open={Boolean(openNavMenuCheck)}
        onClose={closeNavMenu}
        sx={{background: 'rgba(0, 0, 0, 0.7)'}}
        PaperProps={{
          sx: {
            backgroundColor: "transparent",
            color: "white",
            top: '70px',
            boxShadow: 'none'
          }
        }}
        >
          {headerPages.map((page) => (
            <MenuItem key={page} onClick={closeNavMenu}>
              <Typography
              variant="h4"
              textAlign="center"
              fontFamily='Poppins'
              >
                {page}
              </Typography>
            </MenuItem>
            ))}
        </Drawer>
    </Box>
  )
}

export default NavMenu;