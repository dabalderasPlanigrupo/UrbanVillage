import styled from 'styled-components';
import { device } from '@/utils/devices';

const MapImg = styled.div<{
  height?: string;
  position?: string;
  width?: string;
}>`
  margin: 0 auto;
  max-width: 1200px;
  position: ${({ position }) => position || 'static'};
  text-align: center;
  width: ${({ width }) => width || '100%'};
  z-index: 1;

  ${device.tablet} {
    width: 95vw;
  }
`;
export { MapImg };
