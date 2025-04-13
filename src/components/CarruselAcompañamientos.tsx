// hooks
import { useEffect } from "react";

// react-slick
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// estilos
import styles from "../styles/CarruselMenu.module.css";

// componentes
import Slide from "./Slide";

// data
import acompañamientos from "../data/acompañamientos";

export default function CarruselAcompañamientos() {
  useEffect(() => {
    const slides = document.querySelectorAll(".slick-slide");
    slides.forEach((slide) => {
      const isHidden = slide.getAttribute("aria-hidden") === "true";
      if (isHidden) {
        slide.setAttribute("inert", "");
      } else {
        slide.removeAttribute("inert");
      }
    });
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    centerMode: true,
    centerPadding: "0px",
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 0,
          dots: true,
          infinite: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          infinite: true,
        },
      },
    ],
  };

  return (
    <>
      <h3>* Acompañamientos *</h3>
      <Slider {...settings}>
        {
          acompañamientos.map((slide, index) => {
            return (
              <Slide
                key={index}
                className={styles.slide}
                h4={slide.h4}
                p={slide.p}
                img={slide.img}
                alt={slide.alt}
              />
            );
          })
        }

      </Slider>
    </>

  );
}
