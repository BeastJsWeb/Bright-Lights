import React from "react";
import { Container } from "@mui/material";
import Header from "../app-header/_header";
import News from "../news/_news";
import About from "../about/_about";

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
      </Container>
    </>
  )
}
export default App;