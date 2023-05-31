import styled from 'styled-components';
import { device } from '@/utils/devices';

const FooterText = styled.p<{ textColor: string }>`
  color: ${({ textColor }) => textColor || 'var(--color-negro)'};
  font-size: 20px;

  strong {
    font-weight: bold;
  }

  ${device.tablet} {
    font-size: 25px;
  }

  ${device.desktop} {
    font-size: 30px;
  }
`;
export { FooterText };
