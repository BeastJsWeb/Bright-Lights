import React from "react";
import { Box, Button } from '@mui/material';

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
      {headerPages.map((page) => (
        <Button
        key={page}
        sx={{ 
          color: 'white', 
          textTransform: 'none', 
          fontSize: '18px', 
          fontWeight: 600, 
          display: 'block',
          fontFamily: 'Poppins' 
        }}
        >
          {page}
        </Button>
      ))}
    </Box>
  )
}

export default HeaderDesktop;