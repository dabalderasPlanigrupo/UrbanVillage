import styled from 'styled-components';
import { device } from '@/utils/devices';

const ImageContainer = styled.div`
  top: 20px;
  z-index: 1;
  z ${device.tablet} {
    bottom: 0;
    grid-area: image;
    left: 50px;
    right: -50px;
    top: -269px;
    transform: scale(0.5);
  }

  ${device.desktop} {
    transform: scale(0.75);
  }
`;

export { ImageContainer };
