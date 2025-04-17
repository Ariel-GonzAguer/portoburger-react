// tipos
import { SlideProps } from "../types";

export default function Slide({ className, h4, p, img, alt }: SlideProps) {

  return (
    <div className={className}>
      <h4>{h4}</h4>
      <p>
        {p}
      </p>
      <img src={img} alt={alt} />
    </div>
  )
}
