import Image from 'next/image';

const Carousel = () => {
  return (
    <section className="carousel-container">
      <button className="arrow left" aria-label="Anterior">&lt;</button>

      <div className="carousel-images">

        <article className="plate side">
          <Image 
            src="/imgsbowls/bowl1.png" 
            alt="bowl lateral izquierdo" 
            width={550} 
            height={550} 
            className="plate-img"
          />
        </article>

        <article className="plate main">
          <Image 
            src="/imgsbowls/bowl2.png" 
            alt="bowl principal" 
            width={550} 
            height={550} 
            className="plate-img"
            priority 
          />
        </article>

        <article className="plate side">
          <Image 
            src="/imgsbowls/bowl3.png" 
            alt="bowl lateral derecho" 
            width={550} 
            height={550} 
            className="plate-img"
          />
        </article>
      </div>

      <button className="arrow right" aria-label="Siguiente">&gt;</button>
    </section>
  );
};

export default Carousel;
