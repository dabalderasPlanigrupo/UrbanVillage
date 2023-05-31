import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import BgImage from '../bgImage';
import Image from 'next/image';
import { CardImg } from '../DirectorioGrid/cardImg';
import { Navigation } from 'swiper';
import { PostType } from '@/types/posts';
import { Row } from './row';
import { Swiper, SwiperSlide } from 'swiper/react';
import { TitleWithIcon } from '../Utilities/titleWithIcon';
import { Container } from '../Utilities/container';

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

const Stores = ({
  backgroundImage,
  items,
}: {
  backgroundImage: string | StaticImport;
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
    </BgImage>
  );
};

export { Stores };
