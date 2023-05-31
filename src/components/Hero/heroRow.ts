import styled from 'styled-components';
import { device } from '@/utils/devices';
import { Container } from '../Utilities/container';

const HeroRow = styled(Container)`
  align-items: center;
  display: grid;
  margin-bottom: -202px;
  position: relative;
  text-align: center;

  ${device.tablet} {
    text-align: left;
    grid-template-columns: 1fr 1fr;
    grid-template-areas: 'image title';
  }

  ${device.laptop} {
    grid-template-columns: 3fr 4fr;
  }
`;

export { HeroRow };
