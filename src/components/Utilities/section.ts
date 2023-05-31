import styled from 'styled-components';
import { device } from '@/utils/devices';

interface SectionProps {
  paddings?: string;
  className?: string;
  backgroundColor?: string;
  borderTopLeftRight?: string;
}

const Section = styled.section<SectionProps>`
  background-color: ${({ backgroundColor }) =>
    backgroundColor || 'var(--color-blanco)'};
  border-top-left-radius: ${({ borderTopLeftRight }) =>
    borderTopLeftRight || '0px'};
  border-top-right-radius: ${({ borderTopLeftRight }) =>
    borderTopLeftRight || '0px'};
  padding: 50px 0;
  position: relative;

  ${device.tablet} {
    padding: 70px 0;
  }

  ${device.laptop} {
    padding: 100px 0;
  }

  ${({ paddings }) =>
    paddings === 'large' &&
    `
  padding: 100px 0;

  ${device.tablet} {
    padding: 150px 0;
  }

  ${device.laptop} {
    padding: 200px 0;
  }
`}
`;

export { Section };
