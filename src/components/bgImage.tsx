import Image from 'next/image';
import styled from 'styled-components';
import { Section } from './Utilities/section';

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

const ImageContainer = styled.div`
  inset: 0;
  position: absolute;
  z-index: 0;
`;

const Inner = styled.div`
  max-width: 100%;
  position: relative;
  z-index: 10;
`;

/**
 * <BgImage>
 *
 * The new next/image optimization setup handles background images oddly
 * It requires they be foreground images placed inside of a container
 * This component abstracts that logic away for better DX
 *
 * You can layer text and imagery on top of the background image
 * All you have to do is pass that text or imagery into this component
 *
 * Note: all images get processed through Webpack so you must import!
 * No absolute URLs as they will break during site generation
 *
 * @param { string } alignItems - vertical alignment of inner content
 * @param { string } imgalt - text description of the image
 * @param { string } imgsrc - url of the image, should be a JS module import
 * @param { string } justifyContent - horizontal alignment of inner content
 * @param { number } height - how tall the background image should be (default: 50vh)
 * @param { number } width - how wide image should be (default: 100%)
 */
const BgImage = ({
  children,
  className,
  imgalt = 'Background Image',
  imgsrc,
  paddings,
}: {
  alignItems?: string;
  children?: React.ReactNode;
  className?: string;
  imgalt?: string;
  imgsrc: string | StaticImport;
  paddings?: string;
  justifyContent?: string;
  height?: string;
  width?: string;
}) => {
  return (
    <Section className={className} paddings={paddings}>
      <ImageContainer>
        <Image
          alt={imgalt}
          src={imgsrc}
          layout="fill"
          objectFit="cover"
          quality={80}
        />
      </ImageContainer>
      {children && <Inner>{children}</Inner>}
    </Section>
  );
};

export default BgImage;
