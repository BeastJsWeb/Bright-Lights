import React from "react";
import { 
  Box, 
  IconButton,
  Drawer,
  MenuItem,
  Typography 
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const NavMenu = ({ headerPages, openNavMenu, closeNavMenu, openNavMenuCheck }) => {
  return (
    <Box 
    sx={{ 
      flexGrow: 1, 
      display: { xs: 'flex', md: 'none' },
      justifyContent: 'flex-end', 
      mb: 2 
    }}
    >
      <IconButton active
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
            top: '70px',
            boxShadow: 'none',
            height: 'auto',
            pr: 2
          }
        }}
        >
          {headerPages.map(page => (
            <MenuItem 
            key={page} 
            sx={{
              color: "white",
              borderTopLeftRadius: 'calc(1.5em + 1.7vh)',
              borderBottomRightRadius: 'calc(1.5em + 1.7vh)',
              '&:active' : {
                opacity: 0.8,
                transform: `translate(5%, 0)`
              },
              '&:before' : {
                content: "''",
                position: 'absolute',
                top: 0,
                left: 0,
                width: 0,
                height: '100%',
                background: 'rgba(255,255,255,0.3)',
                transition: 'all 0.3s ease',
                opacity: 0,
                
              },
              '&:hover:before' : {
                width: '100%',
                borderTopLeftRadius: 'calc(1.5em + 1.7vh)',
                borderBottomRightRadius: 'calc(1.5em + 1.7vh)',
                opacity: 1,
              } 
            }} 
            >
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