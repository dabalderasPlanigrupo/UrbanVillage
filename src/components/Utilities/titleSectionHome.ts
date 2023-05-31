import styled from 'styled-components';
import { device } from '@/utils/devices';

const TitleSectionHome = styled.h2<{
  textColor?: string;
  highLightColor?: string;
}>`
  color: ${({ textColor }) => textColor || 'var(--color-negro)'};
  font-size: 16px;
  font-weight: normal;
  text-align: center;

  strong {
    color: ${({ highLightColor }) =>
      highLightColor || 'var(--color-principal)'};
    font-weight: bold;
  }

  ${device.tablet} {
    font-size: 30px;
  }

  ${device.desktop} {
    font-size: 50px;
  }
`;
export { TitleSectionHome };
