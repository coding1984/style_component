import React from "react";
import theme from "./component/styled/themeProvider";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./component/styled/Global";
import HeaderNav from "./component/header/header";
import Container from "./component/styled/container";
import ShowCase from "./component/showCase";
import LogoBranding from "./component/logoBranding";
import Arrival from "./component/arrival"; 
import Flex from "./component/styled/flexStyle"
import SellNow from "./component/sellNow";
function App() {


  return (  
    <ThemeProvider theme={theme}>
      <GlobalStyle/>
      
      <Container padding="80px">
        <HeaderNav/>
         <ShowCase/> 
      </Container>
     
      <Container bg={({theme}) => theme.bgYellow}>
        <LogoBranding/>
      </Container>
     
      <Container >
        <Flex contentValue={null} gapValue="3rem" screenSize="1000px">
            <Arrival image="images/cardGirl1.png" title="Hodies & Sweetshirt" text="Explore Now!"  />
            <Arrival image="images/cardGirl2.png" title="Coats & Parkas" text="Explore Now!"  />
            <Arrival image="images/cardGirl3.png" title="HTees & T-Shirt" text="Explore Now!"  />
        </Flex>
      </Container>
          <SellNow/>
      <Container>

      </Container>

    </ThemeProvider>
  );
}

export default App;