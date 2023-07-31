import { styled } from "styled-components";

export const About = () => {
  return (
    <Section>
      <Container>
        <Title>Sobre mi</Title>
        <Line></Line>
        <Name>Maria José - Maestra pastelera y apasionada por el diseño</Name>
        <ImgContainer>
          <Img src="public/img/perfil.jpeg" />
        </ImgContainer>
        <Descripcion>
          <Paragraph>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
            quasi sit voluptate! Culpa dolor blanditiis fugit corporis
            accusantium. Adipisci rerum quas officia aspernatur soluta ea
            voluptates error similique sunt vero!
          </Paragraph>
          <Paragraph>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni sit
            ipsam vitae reprehenderit doloremque quae vero accusantium incidunt?
            Exercitationem tenetur, consequatur distinctio dolorum illo sapiente
            accusantium. Hic quasi sapiente doloribus error accusantium deserunt
            est, voluptatibus tenetur. Porro aut quos repellat, atque neque
            provident dolore, eius eos incidunt exercitationem maxime. Iure.
          </Paragraph>
        </Descripcion>
      </Container>
    </Section>
  );
};

const Section = styled.div`
  margin-top: 8vh;
  margin-left: -7.5px;
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 50px 30px 30px 30px;
  gap: 45px;

  @media only screen and (min-width: 769px) and (max-width: 1023px) {
    width: 70%;
  }

  @media only screen and (min-width: 481px) and (max-width: 768px) {
    width: 80%;
  }

  @media only screen and (max-width: 480px) {
    width: 100%;
  }
`;

const Title = styled.div`
  font-size: calc(1em + 0.8vw);
`;

const Line = styled.div`
  background-color: black;
  border: 1px solid black;
  height: 1.5px;
  width: 45px;
`;

const Name = styled.h2`
  font-size: calc(1em + 0.3vw);
  text-align: center;
`;

const ImgContainer = styled.div`
  min-width: 300px;
  min-height: 300px;
  border-radius: 100%;
  display: flex;
  justify-content: center;
  position: relative;
  overflow: hidden;
  @media only screen and (max-width: 480px) {
    min-width:200px;
    min-height: 200px;
  }
`;

const Img = styled.img`
  position: absolute;
  width: 100%;
`;

const Descripcion = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
`;

const Paragraph = styled.p`
  text-align: center;
  font-size: calc(1em + 0.1vw);
`;
