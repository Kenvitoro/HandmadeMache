import { styled } from "styled-components";

const Container = styled.div`
  width: 50%;
  max-width: 500px;
  position: relative;
  
  @media screen and (max-width: 480px){
   width : 70%;
  }
`;

const Img = styled.img`
  width: 100%;
  border: 15px solid white;
  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.5);

`;
const Cross = styled.div`
  font-size: 35px;
  font-weight: bolder;
  color: #fff;
  position: absolute;
  right: -35px;
  cursor: pointer;
  user-select: none;

  &:active {
    transform: scale(0.95);
  }
`;
// eslint-disable-next-line react/prop-types
export const LightBox = ({ url, closeLightBox }) => {
  return (
    <Container>
      <Cross onClick={closeLightBox}>X</Cross>
      <Img src={url} />
    </Container>
  );
};
