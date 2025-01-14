import './Banner.css';

const Banner = () => {
  const bannerContent = {
    title: 'FRONTEND',
    subtitle: 'Challenge React',
    description: 'Este challenge es una forma de aprendizaje. Es un mecanismo donde podrás comprometerte en la resolución de un problema para poder aplicar todos los conocimientos adquiridos en la formación React.',
    image: {
      src: new URL('/img/player.png', import.meta.url).href,
      alt: "Banner imagen del reproductor"
    }
  };

  return (
    <section className='banner_container'>
      <div className='banner_info'>
        <h1>{bannerContent.title}</h1>
        <h3>{bannerContent.subtitle}</h3>
        <p>{bannerContent.description}</p>
      </div>
      <div className='banner_image_container'>
        <img 
          src={bannerContent.image.src} 
          alt={bannerContent.image.alt}
          loading="lazy"
        />
      </div>
    </section>
  );
};

export { Banner };