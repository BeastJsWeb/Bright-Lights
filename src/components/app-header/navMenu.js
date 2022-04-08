import React, {useRef, useEffect, useState} from "react";
import { 
  Box, 
  IconButton,
  MenuItem, 
  SwipeableDrawer
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import HandleClick from "./HandleClick";

const NavMenu = ({ headerPages }) => {

  const [open, setOpen] = useState(false)
  const toggleDrawer = newOpen => () => {
    setOpen(newOpen)
  }

  const menuRef = useRef()
  useEffect(() => {
    window.addEventListener('click', HandleClick, menuRef)
    return () => {
      window.removeEventListener('click', HandleClick, menuRef)
    }
  })

  return (

    <Box 
    position='fixed' 
    right={10}
    zIndex={100}
    sx={{ 
      flexGrow: 1, 
      display: { xs: 'flex', md: 'none' },
      justifyContent: 'flex-end', 
      mb: 2
    }}
    >
      <IconButton 
      active='true'
      size="large"
      aria-controls="menu-appbar"
      aria-haspopup="listbox"
      onClick={toggleDrawer(true)}
      sx={{color: 'white', opacity: 0.5 }}
      >
        <MenuIcon/>

      </IconButton>

        <SwipeableDrawer
        ref={menuRef}
        anchor='top'
        open={open}
        onOpen={toggleDrawer(true)}
        onClose={toggleDrawer(false)}
        sx={{ background: 'rgba(0, 0, 0, 0.4)' }}
        PaperProps={{
          id: "Swipe",
          sx: {
            backgroundColor: 'rgba(0, 0, 0, 0.4)',
            height: 'auto%',
            pl: 2, pr: 2
          }
        }}
        >
          {headerPages.map(page => (
            <MenuItem 
            onClick={toggleDrawer(false)}
            id={page}
            key={page} 
            sx={{
              fontFamily: 'Poppins',
              fontSize: 'calc(1em + 2vw)',
              fontWeight: 500,
              color: "white",
              pl: '5%',
              borderTopLeftRadius: 'calc(1.5em + 1.7vh)',
              borderBottomRightRadius: 'calc(1.5em + 1.7vh)',
              '&:active' : {
                opacity: 0.8,
                transform: `translate(2%, 0)`
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
                opacity: 0
              },
              '&:hover:before' : {
                width: '100%',
                borderTopLeftRadius: 'calc(1.5em + 1.7vh)',
                borderBottomRightRadius: 'calc(1.5em + 1.7vh)',
                opacity: 1,
              } 
            }} 
            >
              {page}
              
            </MenuItem>

          ))}

        </SwipeableDrawer>
    </Box>
  )
}

export default NavMenu;