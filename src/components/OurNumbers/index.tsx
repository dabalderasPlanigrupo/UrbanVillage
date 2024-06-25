import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Image from 'next/image';
import styled from 'styled-components';
import { Button } from '../Utilities/button';
import { CardImg } from '../DirectorioGrid/cardImg';
import { Container } from '../Utilities/container';
import { Inline } from '../Utilities/inline';
import { Autoplay, Navigation } from 'swiper';
import { PostType } from '@/types/posts';
import { Row } from './row';
import { Section } from '../Utilities/section';
import { Swiper, SwiperSlide } from 'swiper/react';
import { TitleWithIcon } from '../Utilities/titleWithIcon';
import { device } from '@/utils/devices';
import { TitleDirectTxt } from '../Utilities/titleDirectTxt';

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
  transform: translateY(45%);
  z-index: 5;

  ${device.tablet} {
    max-width: 50%;
  }

  ${device.desktop} {
    max-width: 40%;
  }
`;

const OurNumbers = ({
  image,
  items,
}: {
  image: string | StaticImport;
  items: Array<PostType>;
}) => {
  return (
    <>
      <Section paddings="large">
        <Container>
          <TitleWithIcon
            textColor="var(--color-gris)"
            iconColor="var(--color-gris)"
            margin="0px"
          >
            Eventos
          </TitleWithIcon>
          <Swiper
            autoplay={{ delay: 6000, disableOnInteraction: true }}
            className="mySwiper"
            loop={true}
            modules={[Navigation, Autoplay]}
            navigation={false}
            slidesPerGroup={1}
            slidesPerView="auto"
            spaceBetween={10}
            breakpoints={{
              480: {
                slidesPerView: 1,
                slidesPerGroup: 1,
              },
              768: {
                slidesPerView: 2,
                slidesPerGroup: 2,
              },
              1080: {
                slidesPerView: 3,
                slidesPerGroup: 3,
              },
            }}
          >
            {items?.map((post: PostType) => (
              <SwiperSlide key={post.slug}>
                <CardImg margin="0px" height="40vh">
                  <Image
                    src={'/multimedia/' + post.imagen}
                    layout="fill"
                    priority={true}
                    alt={post.title}
                  />
                </CardImg>
                <TitleDirectTxt textColor="var(--color-secundario)">
                  {post.title}
                </TitleDirectTxt>
              </SwiperSlide>
            ))}
          </Swiper>
          <Inline textAlign="right">
            <Button buttonColor="var(--color-blanco)" href="/eventos">
              VER MÁS ➔
            </Button>
          </Inline>
        </Container>
        <LeftImg>
          <Image src={image} height={679} width={1032} alt="Imagen del Hero" />
        </LeftImg>
      </Section>
    </>
  );
};

export default OurNumbers;
