import BgImage from '@/components/bgImage';
import { Container } from '@/components/Utilities/container';
import { HeroBlock404 } from './heroBlock404';
import { Text } from './text';
import { Title } from './title';
import styled from 'styled-components';

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

const FullHeight = styled(BgImage)`
  align-items: center;
  display: flex;
  justify-content: center;
  min-height: 100vh;
`;

const Hero404 = ({
  backgroundImage,
  text,
  title,
}: {
  backgroundImage: string | StaticImport;
  height?: string;
  text: string;
  title: string;
}) => {
  return (
    <>
      <FullHeight imgsrc={backgroundImage}>
        <HeroBlock404 backgroundColor="#000000d4;">
          <Container>
            <Title>{title}</Title>
            <Text>{text}</Text>
          </Container>
        </HeroBlock404>
      </FullHeight>
    </>
  );
};

export default Hero404;
