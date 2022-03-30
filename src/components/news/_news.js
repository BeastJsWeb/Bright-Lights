import React, { lazy, Suspense } from "react";
import Bground from "./bground";
import CircularDeterminate from "../app/progress";
import { Grid } from '@mui/material';
import BGimageM from '../../images/01m.webp';
import BGimage from '../../images/01.webp';
import BGimageR from '../../images/01r.jpg';
import group101 from '../../images/group1/01.webp';
import group102 from '../../images/group1/02.webp';
import group103 from '../../images/group1/03.webp';
const Player = lazy(() => import("./player"))
const Title = lazy(() => import("./title"))
const CardItem = lazy(() => import("../app/CardItem"))

const news = [
  { 
    image: group101, 
    title: 'Working on my upcoming full-lenth album that`s releasing later this year.' 
  },
  { 
    image: group102, 
    title: 'Halloween vibes.', 
    title2: 'Listen my new track!' 
  },
  { 
    image: group103, 
    title: 'WarForLove is OUT NOW!!', 
    title2: 'Stream it here!' 
  },
]

const News = () => {
  return (
    <>
        <Bground 
        imgM={BGimageM} 
        img={BGimage}
        imgR={BGimageR}
        />
      <Suspense fallback={<CircularDeterminate/>} >
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
          {news.map((post, key) => (
              <Grid item lg={1} md={1} xs={1} >
                <CardItem
                {...post} {...key}
                minWidth='calc(16em + 7vw)'
                backgroundColor='rgba(122, 102, 204, 0.7)'
                justifyContent='start'
                color='white'
                fontWeight={500}
                fontSize='calc(0.7em + 0.3vw)'
                minHeight='30%'
                />
            </Grid>
          ))}
          
          </Grid>
        </Grid>
      </Suspense>
  </>
  )
}

export default News;