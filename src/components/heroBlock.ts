import styled from 'styled-components';
import { device } from '@/utils/devices';

const HeroBlock = styled.div<{ $backgroundColor?: string }>`
  align-items: center;
  display: flex;
  min-height: 100vh;
  padding-top: 50px;
  ::before,
  ::after {
    background-color: ${({ $backgroundColor }) =>
      $backgroundColor || 'var(--color-blanco)'};
    background-blend-mode: multiply;
    transition: background-color 3s !important;
  }
  ${device.tablet} {
    padding-top: 70px;
  }
  ${device.desktop} {
    padding-top: 150px;
  }
`;

export { HeroBlock };
