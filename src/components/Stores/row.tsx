import styled from 'styled-components';
import { device } from '@/utils/devices';

const Row = styled.div`
  background-color: var(--color-blanco);
  border-radius: 20px 20px;
  box-shadow: 6px 6px 20px #0000007f;

  ${device.tablet} {
    .swiper-container {
      width: 630px;
    }
  }

  ${device.laptop} {
    .swiper-container {
      width: 900px;
    }
  }

  ${device.desktop} {
    .swiper-container {
      width: 1200px;
    }
  }
`;

export { Row };
