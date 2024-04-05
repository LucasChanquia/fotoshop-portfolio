'use client'

import useEmblaCarousel from 'embla-carousel-react'
import "../../../assets/styles/carousel.component.scss";
import Autoplay from 'embla-carousel-autoplay'
import Image from 'next/image';

export function CarouselComponent() {

const [emblaRef] = useEmblaCarousel({ loop: false }, [Autoplay({delay:5000})])

  const imagenes = [{image:'/carousel/1.jpg'},{image:'/carousel/2.webp'}]
  return (
    <div className="embla" ref={emblaRef}>
      <div className="embla__container">
        {
          imagenes.map(({image}, index) => (
            <div className="embla__slide" key={index}>
            <Image className='image' src={image} alt='sdfsdf' width={300} height={400}/>
          </div>
          ))
        }
      </div>
    </div>
  )
}