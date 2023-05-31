import styled from 'styled-components';
import { device } from '@/utils/devices';

const TitleContainer = styled.div`
  ${device.tablet} {
  }

  ${device.desktop} {
    left: 20vh;
    margin: 0;
    max-width: 410px;
    position: relative;
    top: -22vh;
    transform: scale(1.3);
  }
`;

export { TitleContainer };
