import React, { lazy, Suspense } from "react";
import { Container } from "@mui/material";
import CircularDeterminate from "./progress";
import News from "../news/_news"
import Preloader from "./fonts";
const Header = lazy(() => import("../app-header/_header"))
const About = lazy(() => import("../about/_about"))
const Music = lazy(() => import("../music/_music"))
const Media = lazy(() => import("../media/_media"))
const Tours = lazy(() => import("../tours/_tours"))
const Contacts = lazy(() => import('../contacts/_contacts'))

function App() {
  return (
    <>
      <Preloader/>

      <Suspense 
      fallback={ <CircularDeterminate/> } 
      >
        <Container
        maxWidth='false' 
        sx={{
          maxWidth: 'calc(10em + 53vw)',
          minWidth: '300px',
          userSelect: 'none',
          p: 0
        }}
        >
          <Header/>
          <News/>
          <About/>
          <Music/>
          <Media/>
          <Tours/>
        </Container>

        <Contacts/>
      </Suspense>
    </>
  )
}
export default App;