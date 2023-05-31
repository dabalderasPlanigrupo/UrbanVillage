import styled from 'styled-components';
import { device } from '@/utils/devices';

const TitleDirectTxt = styled.h2<{ textColor?: string; iconColor?: string }>`
  align-items: center;
  color: ${({ textColor }) => textColor || 'var(--color-negro)'};
  display: flex;
  font-size: 14px;
  ::before {
    border-radius: 50%;
    border: 3px solid
      ${({ iconColor }) => iconColor || 'var(--color-principal)'};
    content: '';
    display: inline-block;
    height: 14px;
    margin-right: 5px;
    width: 14px;
  }
  ${device.tablet} {
    font-size: 16px;
    ::before {
      height: 16px;
      width: 16px;
    }
  }
  ${device.desktop} {
    font-size: 18px;
    ::before {
      height: 18px;
      width: 18px;
    }
  }
`;

export { TitleDirectTxt };
