import styled from 'styled-components';
import { device } from '@/utils/devices';
import { Container } from '../Utilities/container';

const FooterRow = styled(Container)<{ Columns?: string }>`
  display: grid;
  gap: 50px 0;
  grid-template-columns: ${({ Columns }) => Columns || '2fr 1fr'};

  ${device.tablet} {
    gap: 60px 30px;
    grid-template-columns: ${({ Columns }) => Columns || '2fr 1fr'};
  }

  ${device.laptop} {
    gap: 60px;
  }

  ${device.desktop} {
    gap: 60px 130px;
  }
`;

export { FooterRow };
