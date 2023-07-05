import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import BgImage from '../bgImage';
import Image from 'next/image';
import styled from 'styled-components';
import { CardImg } from '../DirectorioGrid/cardImg';
import { Container } from '../Utilities/container';
import { Navigation } from 'swiper';
import { PostType } from '@/types/posts';
import { Row } from './row';
import { Swiper, SwiperSlide } from 'swiper/react';
import { TitleWithIcon } from '../Utilities/titleWithIcon';
import { device } from '@/utils/devices';

type StaticImageData = {
  src: string;
  height: number;
  width: number;
  blurDataURL?: string;
};

type StaticRequire = {
  default: StaticImageData;
};

type StaticImport = StaticRequire | StaticImageData;

const LeftImg = styled.div`
  bottom: 0;
  left: 0;
  max-width: 60%;
  position: absolute;
  transform: translateY(115%);
  z-index: 5;

  ${device.tablet} {
    max-width: 40%;
  }

  ${device.desktop} {
    max-width: 28%;
  }
`;

const Stores = ({
  backgroundImage,
  image,
  items,
}: {
  backgroundImage: string | StaticImport;
  image: string | StaticImport;
  items: Array<PostType>;
}) => {
  return (
    <BgImage imgsrc={backgroundImage} height={'100vh'} paddings="large">
      <Container>
        <TitleWithIcon
          textColor="var(--color-blanco)"
          iconColor="var(--color-blanco)"
        >
          Nuestras Tiendas
        </TitleWithIcon>
        <Row>
          <Swiper
            spaceBetween={10}
            slidesPerGroup={1}
            slidesPerView="auto"
            loop={true}
            modules={[Navigation]}
            navigation={true}
            className="mySwiper"
            breakpoints={{
              480: {
                slidesPerView: 1,
                slidesPerGroup: 1,
              },
              768: {
                slidesPerView: 3,
                slidesPerGroup: 3,
              },
              1080: {
                slidesPerView: 5,
                slidesPerGroup: 5,
              },
            }}
          >
            {items?.map((post: PostType) => (
              <SwiperSlide key={post.slug}>
                <CardImg margin="40px">
                  <Image
                    src={'/multimedia/' + post.imagen}
                    layout="fill"
                    priority={true}
                    alt={post.title}
                  />
                </CardImg>
              </SwiperSlide>
            ))}
          </Swiper>
        </Row>
      </Container>
      <LeftImg>
        <Image src={image} height={679} width={1032} alt="Imagen del Hero" />
      </LeftImg>
    </BgImage>
  );
};

export { Stores };
