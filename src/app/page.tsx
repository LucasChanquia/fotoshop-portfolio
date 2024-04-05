import Image from "next/image";
import "../assets/styles/inicio.scss";
import { CarouselComponent } from "./_components/carousel/carousel.component";

export default function Home() {
  return (
    <>
      <CarouselComponent />
      <section className="section-service">
        <article>
          <h2>Imprimí tus fotografías al instante</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed quasi,
            id ea laboriosam est molestias, provident velit totam quibusdam
            autem cupiditate laudantium cumque sequi hic illo ipsum accusantium
            optio repellat.
          </p>
        </article>
        <Image
          src={"/img/Component1.png"}
          alt="Máquina imprime foto"
          width={200}
          height={200}
          className="images"
        />
      </section>
    </>
  );
}
