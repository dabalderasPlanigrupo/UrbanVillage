import styled from 'styled-components';
import { device } from '@/utils/devices';

const Grid = styled.div`
  display: grid;
  gap: 30px;
  grid-template-columns: 1fr;
  max-width: 1900px;
  padding: 50px 15px;
  position: relative;
  /* z-index: 2; */

  ${device.tablet} {
    grid-template-columns: repeat(2, 1fr);
    margin: 0 auto;
    width: 95vw;
  }
  ${device.laptop} {
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
  }

  ${device.desktopLarge} {
    gap: 35px;
  }
`;

export { Grid };
