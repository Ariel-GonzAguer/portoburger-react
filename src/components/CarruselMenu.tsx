import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function CarruselMenu() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
      <div>
        <h3>BURGER1</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex architecto
          odio quod dolore ad eligendi sed culpa nesciunt deleniti. Accusamus
          pariatur placeat sed harum nemo debitis quaerat officiis eveniet sit.
          Fuga, mollitia soluta. Doloremque dolorem, reprehenderit adipisci
          dolores magnam, quis incidunt officia eligendi facilis veritatis,
          quasi earum fugiat consequuntur. Voluptates architecto consequuntur
          dolore velit vitae nesciunt quia dolores sequi alias.
        </p>
      </div>
      <div>
        <h3>BURGER2</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex architecto
          odio quod dolore ad eligendi sed culpa nesciunt deleniti. Accusamus
          pariatur placeat sed harum nemo debitis quaerat officiis eveniet sit.
        </p>
      </div>
      <div>
        <h3>BURGER3</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex architecto
          odio quod dolore ad eligendi sed culpa nesciunt deleniti. Accusamus
          pariatur placeat sed harum nemo debitis quaerat officiis eveniet sit.
        </p>
      </div>
      <div>
        <h3>BURGER4</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex architecto
          odio quod dolore ad eligendi sed culpa nesciunt deleniti. Accusamus
          pariatur placeat sed harum nemo debitis quaerat officiis eveniet sit.
        </p>
      </div>
      <div>
        <h3>BURGER5</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex architecto
          odio quod dolore ad eligendi sed culpa nesciunt deleniti. Accusamus
          pariatur placeat sed harum nemo debitis quaerat officiis eveniet sit.
        </p>
      </div>
      <div>
        <h3>BURGER6</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex architecto
          odio quod dolore ad eligendi sed culpa nesciunt deleniti. Accusamus
          pariatur placeat sed harum nemo debitis quaerat officiis eveniet sit.
        </p>
      </div>
    </Slider>
  );
}
