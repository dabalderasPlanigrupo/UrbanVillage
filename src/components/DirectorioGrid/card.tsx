import Image from 'next/image';
import styled from 'styled-components';
import { BiTime } from 'react-icons/bi';
import { CardHrsInline } from './cardHrsInline';
import { CardImg } from './cardImg';
import { CardTag } from './cardTag';
import { CardTextContainer } from './cardTextContainer';
import { device } from '@/utils/devices';

const Card = ({
  color,
  horario,
  imagen,
  onlyImage,
  titulo,
}: {
  color?: string;
  horario?: string;
  imagen: string;
  onlyImage: boolean;
  titulo?: string;
}) => {
  return (
    <>
      <CardStyles>
        <CardImg>
          <Image src={'/multimedia/' + imagen} layout="fill" alt={titulo} />
        </CardImg>
        {onlyImage && (
          <CardTextContainer>
            <CardTag backgraundColor={color} className="tag"></CardTag>
            <CardTitle className="title">{titulo}</CardTitle>
            <CardHrsInline>
              <BiTime size={12} />
              <span className="horario">{' ' + horario}</span>
            </CardHrsInline>
          </CardTextContainer>
        )}
      </CardStyles>
    </>
  );
};

const CardTitle = styled.h4``;

const CardStyles = styled.div`
  border-radius: 20px;
  box-shadow: 4px 4px 8px 4px rgba(0, 0, 0, 0.2);
  height: 100%;
  text-align: center;
  transition: 0.3s;

  .box-sizing {
    /* aspect-ratio: 16/11; */
    height: 100%;
    height: calc(50vh);
    max-width: 100%;
    transition: opacity 0.3s;
    width: 100%;
  }

  :hover {
    .box-sizing {
      box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
      opacity: 0.7;
    }
  }

  ${device.tablet} {
    .gatsby-image-wrapper {
      width: 100%;
    }
  }

  ${device.desktop} {
  }

  ${device.desktopLarge} {
  }
`;

export { Card };
