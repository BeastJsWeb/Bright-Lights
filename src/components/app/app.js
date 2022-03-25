import React from "react";
import { Container } from "@mui/material";
import Header from "../app-header/_header";
import News from "../news/_news";
import About from "../about/_about";
import Music from "../music/_music";
import Media from "../media/_media";
import Tours from "../tours/_tours";
import Contacts from '../contacts/_contacts'

function App() {
  return (
    <>
      <Header />
      <Container
      maxWidth='false' 
      sx={{
        maxWidth: 'calc(1em + 60vw)',
        minWidth: '300px',
        userSelect: 'none'
      }}
      >
        <News/>
        <About/>
        <Music/>
        <Media/>
        <Tours/>
      </Container>
      <Contacts/>
    </>
  )
}
export default App;