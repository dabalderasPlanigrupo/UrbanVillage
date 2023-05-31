import styled from 'styled-components';
import { device } from '@/utils/devices';

const Number = styled.p`
  font-size: 45px;

  ${device.tablet} {
    font-size: 50px;
  }

  ${device.desktop} {
    font-size: 55px;
  }
`;

export { Number };
