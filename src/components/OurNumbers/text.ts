import styled from 'styled-components';
import { device } from '@/utils/devices';

const Text = styled.h3`
  font-size: 26px;
  line-height: 1.5;

  ${device.tablet} {
    font-size: 30px;
  }

  ${device.desktop} {
    font-size: 34px;
  }
`;

export { Text };
