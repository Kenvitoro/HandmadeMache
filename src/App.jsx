import { Route, Routes } from "react-router-dom";
import { Home } from "./components/home";
import { About } from "./components/About";
import { Desing } from "./components/Desing";
import { Contact } from "./components/Contact";
import { Navbar } from "./components/Navbar";
import { styled } from "styled-components";

const Section = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  overflow-x: hidden;
`;
const Container = styled.div`
  width: 85%;
  height: 100%;
  @media only screen and (min-width: 481px) and (max-width: 768px) {
    width: 95%;
  }

  scrollbar-width: thin; 
scrollbar-color: #4ea93b rgb(30, 0, 62);
&::-webkit-scrollbar{
  width: 15px;
}
&::-webkit-scrollbar-track{
  border-radius: 100vw;
  background-color: rgb(30, 0, 62);
  margin-top: 1em;
  margin-bottom: 1em;
}

&::-webkit-scrollbar-thumb{
  border: 3px solid rgb(30, 0, 62);
  background-color: #4ea93b;
  border-radius: 100vw;
}
`;

function App() {
  return (
    <Section>
      <Container>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Desings" element={<Desing />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </Container>
    </Section>
  );
}

export default App;
