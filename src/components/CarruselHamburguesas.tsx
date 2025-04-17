// hooks
import useManageSlickSlides from "../hooks/useManageSlickSlides";

// react-slick
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import settings from "../utils/settingsSlider";

// estilos
import styles from "../styles/CarruselMenu.module.css";

// componentes
import Slide from "./Slide";

// data
import hamburguesasMenu from "../data/hamburguesas";

export default function CarruselMenu() {
  useManageSlickSlides();

  return (
    <>
      <Slider {...settings}>
        {
          hamburguesasMenu.map((slide, index) => {
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
