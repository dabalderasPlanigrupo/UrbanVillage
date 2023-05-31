import Image from 'next/image';
import GetFormatDate from '../Utilities/getFormateDate';
import styled from 'styled-components';
import { CardTextContainer } from './cardTextContainer';
import { device } from '@/utils/devices';

// The component is not currently being used
const Card = ({
  // author,
  date,
  imagen,
  // location,
  // tag,
  titulo,
  onlyImage,
}: {
  // author?: string;
  date: string;
  imagen: string;
  // location?: string;
  // tag?: string;
  titulo?: string;
  onlyImage: boolean;
}) => {
  return (
    <>
      <CardStyles>
        <Image
          src={'/multimedia/' + imagen}
          width={500}
          height={500}
          alt={titulo}
        />
        {onlyImage && (
          <CardTextContainer>
            <span className="date">{GetFormatDate(date)}</span>
            <h4 className="title">{titulo}</h4>
          </CardTextContainer>
        )}
      </CardStyles>
    </>
  );
};

const CardStyles = styled.div`
  box-shadow: 4px 4px 8px 4px rgba(0, 0, 0, 0.2);
  height: 100%;
  transition: 0.3s;

  .box-sizing {
    height: 100%;
    width: 100%;
    transition: opacity 0.3s;
    /* aspect-ratio: 16/11; */
    max-width: 100%;
    height: calc(50vh);
  }

  :hover {
    .box-sizing {
      opacity: 0.3;
      box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
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
