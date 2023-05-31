import Image from 'next/image';
import styled from 'styled-components';
import { Container } from '../Utilities/container';
import { ElementList } from '../homeList';
import { Elements } from './elements';
import { Section } from '../Utilities/section';

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
  max-width: 30%;
  position: absolute;
  transform: translateY(35%);
  z-index: 5;
`;

const OurNumbers = ({ image }: { image: string | StaticImport }) => {
  return (
    <>
      <Section paddings="large">
        <Container>
          <Elements elementsList={ElementList} />
        </Container>
        <LeftImg>
          <Image src={image} height={679} width={1032} alt="Imagen del Hero" />
        </LeftImg>
      </Section>
    </>
  );
};

export default OurNumbers;
