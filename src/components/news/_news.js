import React from "react";
import Player from "./player";
import Bground from "./bground";
import Title from "./title";
import NewsPost from "./newsPost";
import { Grid } from '@mui/material';
import BGimage from '../../images/01.jpg';
import group101 from '../../images/group1/01.png';
import group102 from '../../images/group1/02.png';
import group103 from '../../images/group1/03.png';

const News = () => {
  return (
    <>
      <Bground
      img={BGimage}
      />
      <Title
      mainTitle='War For Love'
      subTitle='New Single'
      />
      <Player 
      width='calc(7em + 40vw)'
      marginBottom='calc(1em + 5vw)'
      />
      <Grid container
      overflow='hidden'
      >
        <Grid container
        overflow='auto'
        sx={{
          gap: 'calc(13em + 4.4vw)', 
          flexWrap: 'nowrap'
        }}
        >
          <NewsPost 
          image={group101}
           title='Working on my upcoming full-lenth
            album that`s releasing later this year.' 
          />
          <NewsPost 
          image={group102}
           title='Halloween vibes.' 
           title2='Listen my new track!'
          />
          <NewsPost 
          image={group103}
           title='WarForLove is OUT NOW!!'
           title2='Stream it here!' 
          />
        </Grid>
      </Grid>
  </>
  )
}

export default News;