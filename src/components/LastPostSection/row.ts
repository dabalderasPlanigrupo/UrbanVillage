import styled from 'styled-components';
import { device } from '@/utils/devices';
import { Container } from '../Utilities/container';

const Row = styled(Container)`
  display: grid;
  gap: 50px 0;
  grid-template-columns: 1fr;

  ${device.tablet} {
    gap: 60px 30px;
    grid-template-columns: repeat(2, 1fr);
  }

  ${device.laptop} {
    grid-template-columns: repeat(4, 1fr);
  }

  ${device.desktop} {
  }
`;

export { Row };
