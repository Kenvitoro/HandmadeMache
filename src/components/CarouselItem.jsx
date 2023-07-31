import { styled } from "styled-components";

const Container = styled.div`
  border: 2px soli black;
  height: 150px;
  width: 150px;
  border: 3px solid white;
  position: relative;
`;
const Img = styled.img`
  max-width: 100%;
`;
const Link = styled.a`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 10;
`;

// eslint-disable-next-line react/prop-types
export const CarouselItem = ({ image, url }) => {
  return (
    <Container>
      <Img src={image}></Img>
      <Link href={url} target="_blank"></Link>
    </Container>
  );
};
