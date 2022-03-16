import React from "react";
import { Container } from "@mui/material";
import Header from "../app-header/_header";
import News from "../news/_news";
import About from "../about/_about";
import Music from "../music/_music";

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
      </Container>
    </>
  )
}
export default App;