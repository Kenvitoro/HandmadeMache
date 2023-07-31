import { styled } from "styled-components";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useRef } from "react";

export const Navbar = () => {

  const MenuRef = useRef();


  const ShowMenu =()=>{
    if(window.innerWidth < 481){
      MenuRef.current.style.transform = "TranslateX(0)"  
    }
  }

  const CloseMenu =()=>{
    if(window.innerWidth < 481){
      MenuRef.current.style.transform = "TranslateX(70vw)"  
    }
  }

  return (
    <FixedContainer>
      <LogoContainerFixed>
          <Logo src="public/img/LogoM2.PNG" />
      </LogoContainerFixed>
      <Container ref={MenuRef}>
        <LogoContainer>
          <Logo src="public/img/LogoM2.PNG" />
        </LogoContainer>

        <Cross onClick={CloseMenu}>X</Cross>

        <Links>
          <LinkStyled to={"/"} onClick={CloseMenu}>Inicio</LinkStyled>
          <LinkStyled to={"/About"} onClick={CloseMenu}>Sobre mi</LinkStyled>
          <LinkStyled to={"/Desings"} onClick={CloseMenu}>Diseños</LinkStyled>
          <LinkStyled to={"/Contact"} onClick={CloseMenu}>Contacto</LinkStyled>
        </Links>

        <section>
          <FontAwesomeIconStyled icon={faInstagram} />
          <a
            href="https://www.instagram.com/mache_handmade/"
            target="_blank"
            rel="noreferrer"
          ></a>
        </section>

        
      </Container>

      <Menu icon={faBars} onClick={ShowMenu}/>

    </FixedContainer>
  );
};

const FixedContainer = styled.div`
  width: 100%;
  position: fixed;
  top: 0;
  left: -7.5px;
  right: 0;
  z-index: 100;
  display: flex;
  justify-content: center;
  background-color: white;
  @media only screen and (max-width: 480px){
    height: 8vh;
    min-height: 50px;
    border-bottom: 3px solid black;
    left: 0px;
  }
`;

const LogoContainerFixed = styled.div`
display: none;
@media only screen and (max-width: 480px){
    display: flex;
    justify-content: end;
    align-items: center;
  }
`;

const Container = styled.div`
  padding: 0px 15px 0px 15px;
  min-width: 85%;
  height: 8vh;
  min-height: 50px;
  border-bottom: 3px solid black;
  display: flex;
  justify-content: space-between;
  align-items: center;

  section {
    position: relative;

    a {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      z-index: 20;
    }
  }

  @media only screen and (max-width: 480px){
    position: absolute;
    right: 0;
    flex-direction: column;
    justify-content: flex-start;
    min-width: 70vw;
    height: 100vh;
    background-color: #2D868D;
    z-index: 101;
    transform: translateX(70vw);
    transition: transform 0.3s ease;
  }
`;
const LogoContainer = styled.div`
@media only screen and (max-width: 480px){
    display: none;
  }
`;

const Logo = styled.img`
  max-width: 60px;
  @media only screen and (max-width: 480px){
    min-width: 90px;
  }
`;

const Links = styled.div`
  display: flex;
  gap: 25px;
  @media only screen and (max-width: 480px){
    flex-direction: column;
    text-align: center;
    gap: 0;
    height: auto;
    width: 100%;
  }
`;

const FontAwesomeIconStyled = styled(FontAwesomeIcon)`
  font-size: 30px;
  
  @media only screen and (max-width: 480px){
    padding: 25px 0px;
  }
`;
const LinkStyled = styled(Link)`
  text-decoration: none;
  color: #000;
  font-weight: bolder;
  @media only screen and (max-width: 480px){
    width: 100%;
    padding: 25px 0px;
  }
`;
const Cross = styled.div`
  font-size: 25px;
  font-weight: bolder;
  cursor: pointer;
  user-select: none;
  display: none;

  &:active{
    transform: scale(0.95);
  }
  @media only screen and (max-width: 480px){
    display: unset;
    padding: 25px 0px;
  }
`;


const Menu = styled(FontAwesomeIcon)`
  font-size: 25px;
  display: none;
  @media only screen and (max-width: 480px){
    display: unset;
    position: absolute;
    cursor: pointer;
    right: 15px;
    top: 15px;

    &:active{
      transform: scale(0.95);
    }
  }
`;