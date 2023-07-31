import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CarouselItem } from "./CarouselItem";
import { styled } from "styled-components";

const Slick = styled.div`
  &::before {
    color: black;
  }
`;

const Carousel = () => {
  const settings = {
    dots: false,
    arrows: true,
    prevArrow: <Slick>&lt;</Slick>,
    nextArrow: <Slick>&gt;</Slick>,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 6,
    centerMode: true,
    centerPadding: "60px",
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1.3,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      <CarouselItem
        image={"public/img/pastel1.jpeg"}
        url={"https://www.instagram.com/p/CpJv1I4NttC/"}
      ></CarouselItem>

      <CarouselItem
        image={"public/img/pastel2.jpeg"}
        url={"https://www.instagram.com/p/CoxTqnSr481/"}
      ></CarouselItem>

      <CarouselItem
        image={"public/img/pastel3.jpeg"}
        url={"https://www.instagram.com/p/CnaRiroP3MR/"}
      ></CarouselItem>

      <CarouselItem
        image={"public/img/pastel4.jpeg"}
        url={"https://www.instagram.com/p/CmqE4x4NRuW/"}
      ></CarouselItem>

      <CarouselItem
        image={"public/img/pastel5.jpeg"}
        url={"https://www.instagram.com/p/CQlaZFKLbxP/"}
      ></CarouselItem>

      <CarouselItem
        image={"public/img/pastel6.jpeg"}
        url={"https://www.instagram.com/p/CibppgmDCxo/"}
      ></CarouselItem>

      <CarouselItem
        image={"public/img/pastel14.jpeg"}
        url={"https://www.instagram.com/p/CL22fatA5Nq/"}
      ></CarouselItem>

      <CarouselItem
        image={"public/img/pastel15.jpeg"}
        url={"https://www.instagram.com/p/CKQILDcAikZ/"}
      ></CarouselItem>

      <CarouselItem
        image={"public/img/pastel16.jpeg"}
        url={"https://www.instagram.com/p/CNyIKZmj0I4/"}
      ></CarouselItem>

      <CarouselItem
        image={"public/img/pastel17.jpeg"}
        url={"https://www.instagram.com/p/CSV44Fjrr1q/"}
      ></CarouselItem>

      <CarouselItem
        image={"public/img/pastel18.jpeg"}
        url={"https://www.instagram.com/p/CUjGiIbrKpC/"}
      ></CarouselItem>

      <CarouselItem
        image={"public/img/pastel19.jpeg"}
        url={"https://www.instagram.com/p/CXpQUNFrk9o/"}
      ></CarouselItem>

      <CarouselItem
        image={"public/img/pastel20.jpeg"}
        url={"https://www.instagram.com/p/CYl-YdiLzZg/"}
      ></CarouselItem>

      <CarouselItem
        image={"public/img/pastel21.jpeg"}
        url={"https://www.instagram.com/p/CbWZr0Ygnvl/"}
      ></CarouselItem>

      <CarouselItem
        image={"public/img/pastel22.jpeg"}
        url={"hhttps://www.instagram.com/p/CeHR28svLEj/"}
      ></CarouselItem>

      <CarouselItem
        image={"public/img/pastel23.jpeg"}
        url={"https://www.instagram.com/p/CeNBcRkrbC9/"}
      ></CarouselItem>

      <CarouselItem
        image={"public/img/pastel24.jpeg"}
        url={"https://www.instagram.com/p/CgQ0A5JgS1l/"}
      ></CarouselItem>

      <CarouselItem
        image={"public/img/pastel25.jpeg"}
        url={"https://www.instagram.com/p/CgQ6_BAgJYn/"}
      ></CarouselItem>

      <CarouselItem
        image={"public/img/pastel26.jpeg"}
        url={"https://www.instagram.com/p/CjhZfZugrvi/"}
      ></CarouselItem>

      <CarouselItem
        image={"public/img/pastel27.jpeg"}
        url={"https://www.instagram.com/p/Cnm6EDQvUz2/"}
      ></CarouselItem>

      <CarouselItem
        image={"public/img/pastel28.jpeg"}
        url={"https://www.instagram.com/p/Cnn_Uvjt_hT/"}
      ></CarouselItem>

      <CarouselItem
        image={"public/img/pastel29.jpeg"}
        url={"https://www.instagram.com/p/CoTIHwPLocs/"}
      ></CarouselItem>

      <CarouselItem
        image={"public/img/pastel30.jpeg"}
        url={"https://www.instagram.com/p/CoTMnW3ryh3/"}
      ></CarouselItem>

      <CarouselItem
        image={"public/img/pastel31.jpeg"}
        url={"https://www.instagram.com/p/CoYrtHvtLnG/"}
      ></CarouselItem>

      <CarouselItem
        image={"public/img/pastel32.jpeg"}
        url={"https://www.instagram.com/p/Ch0iHqxL4be/"}
      ></CarouselItem>
    </Slider>
  );
};

export default Carousel;
