import { styled } from "styled-components";
import { LightBox } from "./LightBox";
import { GalleryItem } from "./GalleryItem";
import { useState, useRef } from "react";

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
  height: auto;
  width: 100%;
`;

const Controls = styled.div`
  height: 100px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;

  @media only screen and (max-width: 480px) {
    margin-top: 15px;
    height: auto;
    flex-wrap: wrap;
  }
`;

const Gallery = styled.div`
  height: 85%;
  width: 110%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 15px;
  padding: 15px;
`;

const Button = styled.button`
  background-color: azure;
  padding: 15px;
  font-size: calc(1em + 0.05vw);
  font-weight: bold;

  &:active {
    transform: scale(0.95);
  }
`;

const LightBoxContainer = styled.div`
  background-color: rgba(0, 0, 0, 0.9);
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  opacity: 0;
  -webkit-user-select: none;
  user-select: none;
  z-index: -100;
`;

export const Desing = () => {
  const GalleryRef = useRef();

  const lightBoxRef = useRef();

  const ControlsRef = useRef();

  const [LightBoxS, SetLightBoxS] = useState(null);

  const handleOpenLightBox = (LightBoxImage) => {
    SetLightBoxS(LightBoxImage);

    lightBoxRef.current.classList.add("visible");
  };

  const handleCloseLightBox = () => {
    lightBoxRef.current.classList.remove("visible");
  };

  const ControlFilter = (e) => {
    const buttonPressed = e.target.textContent;
    const Controls = ControlsRef.current.childNodes;
    const Gallery = GalleryRef.current.childNodes;

    Controls.forEach((el) => {
      if (buttonPressed != el.textContent) {
        el.classList.remove("orange");
      }

      if (buttonPressed == el.textContent) {
        el.classList.add("orange");

        Gallery.forEach((el) => {
          if (!el.classList.contains(buttonPressed)) {
            el.classList.add("invisible");
          } else {
            el.classList.remove("invisible");
          }
        });
      }
    });
  };

  return (
    <Section>
      <LightBoxContainer ref={lightBoxRef}>
        <LightBox
          url={LightBoxS}
          closeLightBox={handleCloseLightBox}
        ></LightBox>
      </LightBoxContainer>
      <Container>
        <Controls ref={ControlsRef}>
          <Button onClick={ControlFilter}>Florales</Button>
          <Button onClick={ControlFilter}>Unico</Button>
          <Button onClick={ControlFilter}>Spicy</Button>
          <Button onClick={ControlFilter}>Cupcakes</Button>
        </Controls>

        <Gallery ref={GalleryRef}>
          <GalleryItem
            url={"public/img/pastel1.jpeg"}
            sendUrl={handleOpenLightBox}
            classItem={"Florales"}
          />

          <GalleryItem
            url={"public/img/pastel2.jpeg"}
            sendUrl={handleOpenLightBox}
            classItem={"Unico"}
          />

          <GalleryItem
            url={"public/img/pastel3.jpeg"}
            sendUrl={handleOpenLightBox}
            classItem={"Spicy"}
          />

          <GalleryItem
            url={"public/img/pastel4.jpeg"}
            sendUrl={handleOpenLightBox}
            classItem={"Unico"}
          />

          <GalleryItem
            url={"public/img/pastel5.jpeg"}
            sendUrl={handleOpenLightBox}
            classItem={"Unico"}
          />

          <GalleryItem
            url={"public/img/pastel6.jpeg"}
            sendUrl={handleOpenLightBox}
            classItem={"Unico"}
          />

          <GalleryItem
            url={"public/img/pastel7.jpeg"}
            sendUrl={handleOpenLightBox}
            classItem={"Florales"}
          />

          <GalleryItem
            url={"public/img/pastel8.jpeg"}
            sendUrl={handleOpenLightBox}
            classItem={"Florales"}
          />

          <GalleryItem
            url={"public/img/pastel9.jpeg"}
            sendUrl={handleOpenLightBox}
            classItem={"Unico"}
          />

          <GalleryItem
            url={"public/img/pastel10.jpeg"}
            sendUrl={handleOpenLightBox}
            classItem={"Florales"}
          />

          <GalleryItem
            url={"public/img/pastel11.jpeg"}
            sendUrl={handleOpenLightBox}
            classItem={"Florales"}
          />

          <GalleryItem
            url={"public/img/pastel12.jpeg"}
            sendUrl={handleOpenLightBox}
            classItem={"Florales"}
          />

          <GalleryItem
            url={"public/img/pastel13.jpeg"}
            sendUrl={handleOpenLightBox}
            classItem={"Unico"}
          />

          <GalleryItem
            url={"public/img/pastel14.jpeg"}
            sendUrl={handleOpenLightBox}
            classItem={"Florales"}
          />

          <GalleryItem
            url={"public/img/pastel15.jpeg"}
            sendUrl={handleOpenLightBox}
            classItem={"Unico"}
          />

          <GalleryItem
            url={"public/img/pastel16.jpeg"}
            sendUrl={handleOpenLightBox}
            classItem={"Unico"}
          />

          <GalleryItem
            url={"public/img/pastel17.jpeg"}
            sendUrl={handleOpenLightBox}
            classItem={"Unico"}
          />

          <GalleryItem
            url={"public/img/pastel18.jpeg"}
            sendUrl={handleOpenLightBox}
            classItem={"Unico"}
          />

          <GalleryItem
            url={"public/img/pastel19.jpeg"}
            sendUrl={handleOpenLightBox}
            classItem={"Unico"}
          />

          <GalleryItem
            url={"public/img/pastel20.jpeg"}
            sendUrl={handleOpenLightBox}
            classItem={"Florales"}
          />

          <GalleryItem
            url={"public/img/pastel21.jpeg"}
            sendUrl={handleOpenLightBox}
            classItem={"Florales"}
          />

          <GalleryItem
            url={"public/img/pastel22.jpeg"}
            sendUrl={handleOpenLightBox}
            classItem={"Unico"}
          />

          <GalleryItem
            url={"public/img/pastel23.jpeg"}
            sendUrl={handleOpenLightBox}
            classItem={"Unico"}
          />

          <GalleryItem
            url={"public/img/pastel24.jpeg"}
            sendUrl={handleOpenLightBox}
            classItem={"Unico"}
          />

          <GalleryItem
            url={"public/img/pastel25.jpeg"}
            sendUrl={handleOpenLightBox}
            classItem={"Unico"}
          />

          <GalleryItem
            url={"public/img/pastel26.jpeg"}
            sendUrl={handleOpenLightBox}
            classItem={"Unico"}
          />

          <GalleryItem
            url={"public/img/pastel27.jpeg"}
            sendUrl={handleOpenLightBox}
            classItem={"Florales"}
          />

          <GalleryItem
            url={"public/img/pastel28.jpeg"}
            sendUrl={handleOpenLightBox}
            classItem={"Florales"}
          />

          <GalleryItem
            url={"public/img/pastel29.jpeg"}
            sendUrl={handleOpenLightBox}
            classItem={"Florales"}
          />

          <GalleryItem
            url={"public/img/pastel30.jpeg"}
            sendUrl={handleOpenLightBox}
            classItem={"Unico"}
          />

          <GalleryItem
            url={"public/img/pastel31.jpeg"}
            sendUrl={handleOpenLightBox}
            classItem={"Unico"}
          />

          <GalleryItem
            url={"public/img/pastel32.jpeg"}
            sendUrl={handleOpenLightBox}
            classItem={"Unico"}
          />

          <GalleryItem
            url={"public/img/pastel33.jpeg"}
            sendUrl={handleOpenLightBox}
            classItem={"Spicy"}
          />

          <GalleryItem
            url={"public/img/pastel34.jpeg"}
            sendUrl={handleOpenLightBox}
            classItem={"Spicy"}
          />

          <GalleryItem
            url={"public/img/pastel35.jpeg"}
            sendUrl={handleOpenLightBox}
            classItem={"Unico"}
          />

          <GalleryItem
            url={"public/img/pastel36.jpeg"}
            sendUrl={handleOpenLightBox}
            classItem={"Cupcakes"}
          />

          <GalleryItem
            url={"public/img/pastel37.jpeg"}
            sendUrl={handleOpenLightBox}
            classItem={"Cupcakes"}
          />

          <GalleryItem
            url={"public/img/pastel38.jpeg"}
            sendUrl={handleOpenLightBox}
            classItem={"Florales"}
          />

          <GalleryItem
            url={"public/img/pastel39.jpeg"}
            sendUrl={handleOpenLightBox}
            classItem={"Florales"}
          />

          <GalleryItem
            url={"public/img/pastel40.jpeg"}
            sendUrl={handleOpenLightBox}
            classItem={"Unico"}
          />
        </Gallery>
      </Container>
    </Section>
  );
};
