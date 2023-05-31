import styled from 'styled-components';
import { device } from '@/utils/devices';

const Text = styled.p<{ color?: string }>`
  color: ${({ color }) => color || 'var(--color-blanco)'};
  font-size: 16px;
  line-height: 1.5;
  text-align: center;

  ${device.tablet} {
    font-size: 18px;
  }

  ${device.desktop} {
    font-size: 28px;
  }
`;

export { Text };
