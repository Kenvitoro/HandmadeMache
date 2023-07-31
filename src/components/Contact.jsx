import { useRef, useState } from "react";
import { styled } from "styled-components";
import emailjs from "@emailjs/browser";

export const Contact = () => {
  const form = useRef();
  const [Envio, setEnvio] = useState(null);

  const SubmitHandler = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_14t3afg",
        "template_250tuzw",
        form.current,
        "KXpsUYwYLEKUJ8D0A"
      )
      .then(
        (result) => {
          console.log(result.text);
          setEnvio(true);
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
          setEnvio(false);
        }
      );
  };

  return (
    <Section>
      <Container>
        <Title>Contacto</Title>
        <Line />
        <Paragraph>
          Si deseas hacer un pedido personal puedes contactarme por mis redes
          sociales
        </Paragraph>
        <SocialContainer>
          <a
            href="https://www.facebook.com/machehandmade"
            target="_blank"
            rel="noreferrer"
          >
            Mi Facebook
          </a>{" "}
          |{" "}
          <a
            href="https://www.instagram.com/mache_handmade/"
            target="_blank"
            rel="noreferrer"
          >
            Mi Instagram
          </a>
        </SocialContainer>
        <Paragraph>
          O si lo deseas comunicate directamente via e-mail{" "}
        </Paragraph>
        <Form ref={form} onSubmit={SubmitHandler}>
          <div>
            <Input
              type="text"
              placeholder="Nombre"
              name="name"
              required
              title="nombre sólo acepta letras y espacios en blanco"
              pattern="^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$"
            />
            <Input
              type="email"
              placeholder="E-mail"
              name="email"
              required
              pattern="^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$"
            />
          </div>
          <TextArea
            name="message"
            placeholder="Deja tu comentario aqui"
            rows={10}
            required
          />
          <BtnContainer>
            <Btn type="submit">Enviar</Btn>
          </BtnContainer>
          {Envio &&
            "Tu mensaje a sido enviado, no te preocupes me pondre en contacto contigo en breve"}
        </Form>
      </Container>
    </Section>
  );
};

const Section = styled.div`
  margin-top: 8vh;
  margin-left: -7.5px;
  width: 100%;
  height: 92vh;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 480px){
   height: auto;
  }
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
  @media screen and (max-width: 480px){
   width : 100%;
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

const SocialContainer = styled.div`
  font-weight: bolder;
  a {
    text-decoration: none;
    color: #d61fcc;
  }
`;
const Paragraph = styled.p`
  text-align: center;
  font-size: calc(1em + 0.1vw);
`;

const Form = styled.form`
  width: 100%;
  display: grid;
  place-content: center;
  gap: 20px;

  div {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 15px;
  }

  @media screen and (max-width: 480px){

   div {
    width: 100%;
    margin-right: 80px;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
  }
  }
`;

const Input = styled.input`
  padding: 10px;
  border: none;
  border-bottom: 1px solid black;
  font-size: calc(1em + 0.1vw);
`;

const TextArea = styled.textarea`
  padding: 10px;
  border: none;
  border-bottom: 1px solid black;
  resize: none;
  font-size: calc(1em + 0.1vw);
`;

const BtnContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Btn = styled.button`
  width: fit-content;
  padding: 15px;
  border: none;
  font-size: calc(1em + 0.1vw);

  &:hover {
    transform: scale(1.05);
  }
`;
