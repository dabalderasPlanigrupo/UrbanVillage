import Image from 'next/image';
import styled from 'styled-components';
import { Container } from '../Utilities/container';
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

const BackgroundImage = styled.div`
  inset: 0;
  position: absolute;
  z-index: 0;
`;

const HeroWrapper = styled.div`
  position: relative;
`;

const CornerImage = styled.img`
  bottom: 0;
  max-height: 50%;
  max-width: 80%;
  position: absolute;
  right: 0;
  transform: translateY(20%);
  z-index: 5;
`;

const HeroContainer = styled(Container)`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: end;
  padding-top: 300px;

  ${device.tablet} {
    flex-direction: row-reverse;
    justify-content: space-between;
    padding-top: 100px;
  }
`;

const HeroImage = styled.div`
  display: flex;
  flex-grow: 1;
  flex-shrink: 1;
  max-height: 100%;

  ${device.tablet} {
    align-self: end;
    max-height: 90%;
  }
`;

const Title = styled.div`
  align-self: center;
  flex-grow: 1;
  flex-shrink: 1;
  margin-bottom: 50px;
  max-width: 500px;
  width: 80%;

  ${device.tablet} {
    margin-bottom: 100px;
  }
`;

const Hero = ({
  backgroundImage,
  textImg,
  cornerImage,
  centerImage,
}: {
  textImg: string | StaticImport;
  backgroundImage: string | StaticImport;
  cornerImage: string;
  centerImage: string | StaticImport;
}) => {
  return (
    <HeroWrapper>
      <BackgroundImage>
        <Image
          alt=""
          src={backgroundImage}
          layout="fill"
          objectFit="cover"
          quality={80}
        />
      </BackgroundImage>
      <HeroContainer>
        <Title>
          <Image src={textImg} height={975} width={1120} alt="" />
        </Title>

        <HeroImage>
          <Image
            src={centerImage}
            height={2111}
            width={1750}
            objectFit="contain"
            alt=""
          />
        </HeroImage>
      </HeroContainer>
      <CornerImage src={cornerImage} alt="" />
    </HeroWrapper>
  );
};

export default Hero;
