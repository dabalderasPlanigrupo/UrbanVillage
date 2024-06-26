import styled from 'styled-components';
import { device } from '@/utils/devices';
import { Container } from '../Utilities/container';

const Row = styled(Container)`
  display: grid;
  gap: 50px 0;
  grid-template-columns: 1fr;

  ${device.tablet} {
    gap: 60px 30px;
    grid-template-columns: 1fr 1fr 1fr;
  }

  ${device.laptop} {
    gap: 60px;
  }

  ${device.desktop} {
    gap: 60px 130px;
  }
`;

export { Row };
