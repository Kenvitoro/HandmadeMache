import { styled } from "styled-components";

const Container = styled.img`
  border: 15px solid white;
  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.5);
  max-width: 200px;
  max-height: 200px;

  &:hover {
    transform: rotate(3deg);
  }

  @media only screen and (max-width: 480px) {
    max-width: 170px;
    max-height: 170px;
    border: 5px solid white;
  }
`;

// eslint-disable-next-line react/prop-types
export const GalleryItem = ({ url, sendUrl, classItem }) => {
  const handleClick = () => {
    return sendUrl(url);
  };

  return (
    <Container
      src={url}
      onClick={handleClick}
      className={classItem}
    ></Container>
  );
};
