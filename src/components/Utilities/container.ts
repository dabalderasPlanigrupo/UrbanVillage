import styled from 'styled-components';
import { device } from '@/utils/devices';

const Container = styled.div<{
  bottom?: string;
  left?: string;
  position?: string;
  textAlign?: string;
  width?: string;
  height?: string;
  paddingLeft?: string;
  paddingRight?: string;
}>`
  ${({ textAlign }) => textAlign && `text-align: ${textAlign}`};
  bottom: ${({ bottom }) => bottom || 'auto'};
  height: ${({ height }) => height || '100%'};
  left: ${({ left }) => left || 'auto'};
  margin: 0 auto;
  max-width: 1200px;
  padding-left: ${({ paddingLeft }) => paddingLeft || '15px'};
  padding-right: ${({ paddingRight }) => paddingRight || '15px'};
  position: ${({ position }) => position || 'static'};
  width: ${({ width }) => width || '100%'};
  z-index: 1;

  ${device.tablet} {
    width: 95vw;
  }
`;
export { Container };
