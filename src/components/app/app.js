import React from "react";
import { Container } from "@mui/material";
import Header from "../app-header/_header";
import News from "../news/_news";
import About from "../about/_about";
import Music from "../music/_music";
import Media from "../media/_media";
import Tours from "../tours/_tours";

function App() {
  return (
    <>
      <Header />
      <Container
      maxWidth='false' 
      sx={{
        maxWidth: 'calc(1em + 60vw)',
        minWidth: '300px'
      }}
      >
        <News/>
        <About/>
        <Music/>
        <Media/>
        <Tours/>
      </Container>
    </>
  )
}
export default App;