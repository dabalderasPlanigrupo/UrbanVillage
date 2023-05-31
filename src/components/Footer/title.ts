import styled from 'styled-components';
import { device } from '@/utils/devices';

const Title = styled.h5`
  color: var(--color-negro);
  font-size: 18px;
  margin-top: 30px;

  ${device.tablet} {
    font-size: 20px;
  }

  ${device.desktop} {
    font-size: 22px;
  }
`;

export { Title };
