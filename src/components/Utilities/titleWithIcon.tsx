import styled from 'styled-components';
import { device } from '@/utils/devices';

const TitleWithIcon = styled.h2<{
  textColor?: string;
  iconColor?: string;
  margin?: string;
}>`
  align-items: center;
  color: ${({ textColor }) => textColor || 'var(--color-negro)'};
  display: flex;
  font-size: 18px;
  justify-content: left;
  margin-bottom: ${({ margin }) => margin || '30px'};

  ::after {
    border-top: 2px solid
      ${({ iconColor }) => iconColor || 'var(--color-principal)'};
    content: '';
    margin-left: 30px;
    width: 100%;
  }

  ${device.tablet} {
    font-size: 22px;
    margin-bottom: ${({ margin }) => margin || '60px'};

    ::before {
      height: 30px;
      width: 30px;
    }
  }

  ${device.desktop} {
    font-size: 30px;
    margin-bottom: ${({ margin }) => margin || '90px'};
    ::before {
      height: 35px;
      width: 35px;
    }
  }
`;

export { TitleWithIcon };
