import React from "react";
import { Box, Button } from '@mui/material';
import HandleClick from "./HandleClick";

const HeaderDesktop = ({headerPages}) => {
  
  return (
    <Box 
    sx={{ 
      flexGrow: 1, 
      display: { 
        xs: 'none', 
        md: 'flex' 
      }, 
      justifyContent: 'space-between', 
      ml: 6, 
      mb: 2 
    }}
    >
      {headerPages.map(page => (
        <Button
        key={page}
        id={page}
        onClick={HandleClick} 
        sx={{ 
          color: 'white', 
          textTransform: 'none', 
          fontSize: '18px', 
          fontWeight: 600, 
          display: 'block',
          fontFamily: 'Poppins',
          borderTopLeftRadius: 'calc(0.1em + 0.7vw)',
          borderBottomRightRadius: 'calc(0.1em + 0.7vw)',
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
            borderTopLeftRadius: 'calc(0.1em + 0.7vw)',
            borderBottomRightRadius: 'calc(0.1em + 0.7vw)',
            opacity: 1
          }
        }}
        >
          {page}
        </Button>
      ))}
    </Box>
  )
}

export default HeaderDesktop;