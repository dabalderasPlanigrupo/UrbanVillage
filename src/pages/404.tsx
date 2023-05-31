import Hero404 from '@/components/Hero404';
import HeroImage from '@/images/RECURSOS_FONDO_1.png';

const NotFoundPage = () => {
  return (
    <Hero404
      backgroundImage={HeroImage}
      title="Pagina no encontrada."
      text="Lo sentimos."
    />
  );
};

export default NotFoundPage;
