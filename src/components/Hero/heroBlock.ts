import styled from 'styled-components';
import { device } from '@/utils/devices';

const HeroBlock = styled.div<{ backgroundColor?: string }>`
  align-items: center;
  height: 100%;
  ::before,
  ::after {
    background-color: ${({ backgroundColor }) =>
      backgroundColor || 'var(--color-blanco)'};
    background-blend-mode: multiply;
    transition: background-color 3s !important;
  }
  ${device.tablet} {
  }
  ${device.desktop} {
  }
`;

export { HeroBlock };
