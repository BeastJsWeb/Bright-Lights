import React from "react";
import { Button, IconButton, Stack, Typography } from "@mui/material";

const FollowUs = ({ musicServises }) => {
  return (
    <>
      <Typography
      color='white'
      fontFamily='Poppins'
      fontWeight={600}
      lineHeight='36px'
      sx={{fontSize: 'calc(1em + 0.4vw)'}}
      >
        Follow me:
      </Typography>
      <Stack container 
      direction='row' 
      alignItems='center'
      spacing={{ lg: 3, sm: 3, xs: 5 }} 
      ml='calc(0.3em + 1.8vw)'
      >
        {musicServises.map(e => (
          <Button 
          variant="span" 
          disableTouchRipple
          sx={{
            textTransform: 'none',
            p: 0,
            '&:hover :nth-child(1)' : {
              background: 'rgba(255,255,255, 0.1)',
              transition: '0.3s',
              borderRadius: '100%'
            },
            '&:active :nth-child(1)' : {
              background: 'rgba(122,102,204, 0.7)',
            }
          }} 
          >
            <IconButton size="small" >
              <img
              alt="about"
              src={e[1]}
              width={30}
              height={30}
              />
            </IconButton>
            <Typography
            color='white'
            fontFamily='Poppins'
            fontWeight={600}
            sx={{fontSize: "calc(0.7em + 0.2vw)"}}
            >
              {e[0]}
            </Typography>
          </Button>
        ))}
      </Stack>
    </>
  ) 
}

export default FollowUs