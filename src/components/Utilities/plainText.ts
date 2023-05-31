import styled from 'styled-components';
import { device } from '@/utils/devices';

const PlainText = styled.p<{ textColor: string; maxWidth: string }>`
  color: ${({ textColor }) => textColor || 'var(--color-negro)'};
  font-size: 20px;
  line-height: 1.5;

  strong {
    font-weight: bold;
  }

  ${device.tablet} {
    ${({ maxWidth }) => maxWidth && 'max-width: ' + maxWidth};
    font-size: 25px;
  }

  ${device.desktop} {
    font-size: 30px;
  }
`;
export { PlainText };
