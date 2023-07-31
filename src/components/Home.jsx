import { styled } from "styled-components";
import { Link } from "react-router-dom";
import Carousel from "./Carousel";

export const Home = () => {
  return (
    <Container>
      <LandingPage>
        <LandingPageContainerLeft>
          <div>
            <img src="public/img/cake3.png" alt="cake" />
          </div>
        </LandingPageContainerLeft>

        <LandingPageContainerCenter>
          ¡Diseños de pasteles para todo tipo de celebraciones!
          <Button>
            <Link to={"/Contact"}>Haz un pedido</Link>
          </Button>
        </LandingPageContainerCenter>

        <LandingPageContainerRight>
          <div>
            <img src="public/img/cupcake1.png" alt="cupcake" />
          </div>
        </LandingPageContainerRight>
      </LandingPage>
      <BackgroundMovil>
        <img src="public/img/fondo.png" />
        <h1>¡Pasteles diseñados a tu gusto y estilo!</h1>
      </BackgroundMovil>
      <Banners>
        <Banner>
          <img src="public/img/fondo-perfil.jpeg" alt="fono de perfil" />
          <div>
            <img src="public/img/perfil.jpeg" alt="perfil" />
          </div>
          <BannerBtn>
            <Link to={"/About"}>Sobre mi</Link>
          </BannerBtn>
        </Banner>

        <Banner>
          <img src="public/img/contacto.jpeg" alt="contacto" />
          <BannerBtn>
            <Link to={"/Contact"}>Contacto</Link>
          </BannerBtn>
        </Banner>
      </Banners>

      <InstragramSlider>
        <InstagramText>Sigueme en instagram</InstagramText>
        <Carousel></Carousel>
      </InstragramSlider>
    </Container>
  );
};

const Container = styled.div`
  margin-top: 8vh;
  width: 100%;
  height: auto;
`;

const LandingPage = styled.div`
  width: 100%;
  height: 92vh;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  background-color: white;

  @media only screen and (max-width: 480px) {
    height: 105vh;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(3, 1fr);
  }
`;

const LandingPageContainerLeft = styled.div`
  overflow: hidden;

  & div {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #e6d059
  }

  & img {
    height: 100%;
  }

  @media screen and  (max-width: 768px) {
    & div {
      margin-top: 5px;
      display: flex;
      align-items: center;
      justify-content: center;
      min-width: 100%;
    }
  }
`;

const LandingPageContainerRight = styled.div`
  overflow: hidden;

  & div {
    height: 100%;
    display: flex;
    justify-content: center;
    background-color: #9dffd8;
  }

  & img {
    height: 100%;
  }

  @media only screen and (min-width: 481px) and (max-width: 768px) {
    & div {
      height: 100%;
      display: flex;
      justify-content: center;
      min-width: 140%;
    }
  }

  @media only screen and (max-width: 480px) {
    &div{
    }
    margin-bottom: 30px;
  }
`;

const LandingPageContainerCenter = styled.div`
  padding: 0 20px 0 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-size: calc(1em + 1vw);
  text-align: center;
  gap: 20px;
`;

const Button = styled.div`
  font-size: calc(0.7em + 0.1vw);
  padding: 12px;
  cursor: pointer;

  &:hover {
    animation: fade 0.5s forwards;
  }

  a {
    text-decoration: none;
    color: black;
  }

  @keyframes fade {
    0% {
      border: 2px solid rgba(0, 0, 0, 0);
      margin: -2px;
    }
    20% {
      border: 2px solid rgba(0, 0, 0, 0.2);
      margin: -2px;
    }
    40% {
      border: 2px solid rgba(0, 0, 0, 0.4);
      margin: -2px;
    }
    60% {
      border: 2px solid rgba(0, 0, 0, 0.6);
      margin: -2px;
    }
    80% {
      border: 2px solid rgba(0, 0, 0, 0.8);
      margin: -2px;
    }
    100% {
      border: 2px solid rgba(0, 0, 0, 1);
      margin: -2px;
    }
  }
`;
const BackgroundMovil = styled.div`
  height: 12vh;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  h1 {
    font-size: calc(1em + 1.3vw);
    text-align: center;
  }
  img {
    position: fixed;
    top: 9%;
    z-index: -100;
    width: 83.5%;
  }

  @media screen and (min-width: 481px) and (max-width: 768px) {
    img {
      width: 83.4%;
    }
  }

  @media screen and (max-width: 479px) {


    img {
      width: 80.6%;
      height: 100%;
    }
  }
`;

const Banners = styled.div`
  background-color: white;
  height: 50vh;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 35px;
  padding: 20px 0px;

  @media screen and (max-width: 479px) {
    height: 70vh;
    gap: 15px;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
  }
`;
const Banner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;

  img {
    height: 160%;
  }

  div {
    position: absolute;
    height: 180px;
    border-radius: 100%;
    box-shadow: 4px 0 10px 10px rgba(100, 100, 100, 0.5);
    overflow: hidden;
    img {
      width: 180px;
      height: auto;
    }
  }

  @media screen and (max-width: 479px) {
    img {
      height: auto;
    width: 100%;
  }

  div {
    position: absolute;
    left: 30px;
    height: 70px;
    border-radius: 100%;
    box-shadow: 4px 0 10px 10px rgba(100, 100, 100, 0.5);
    overflow: hidden;
    img {
      width: 70px;
      height: auto;
    }
  }
  }
`;

const BannerBtn = styled.section`
  font-size: calc(1.2em + 0.1vw);
  padding: 10px 25px;
  cursor: pointer;
  background-color: white;
  position: absolute;
  right: 20px;
  bottom: 20px;

  &:hover {
    animation: fade 0.5s forwards;
  }

  a {
    text-decoration: none;
    color: black;
  }

  @keyframes fade {
    0% {
      border: 2px solid rgba(0, 0, 0, 0);
      margin: -2px;
    }
    20% {
      border: 2px solid rgba(0, 0, 0, 0.2);
      margin: -2px;
    }
    40% {
      border: 2px solid rgba(0, 0, 0, 0.4);
      margin: -2px;
    }
    60% {
      border: 2px solid rgba(0, 0, 0, 0.6);
      margin: -2px;
    }
    80% {
      border: 2px solid rgba(0, 0, 0, 0.8);
      margin: -2px;
    }
    100% {
      border: 2px solid rgba(0, 0, 0, 1);
      margin: -2px;
    }
  }
`;

const InstragramSlider = styled.div`
  background-color: white;
  padding-bottom: 30px;
`;
const InstagramText = styled.h2`
  font-size: calc(1em + 1.3vw);
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 30px 0px;
`;
