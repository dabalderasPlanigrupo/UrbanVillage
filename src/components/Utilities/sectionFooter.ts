import styled from 'styled-components';
import { device } from '@/utils/devices';
import { Section } from './section';

const SectionFooter = styled(Section)`
  padding: 20px 0;

  @media ${device.tablet} {
    padding: 25px 0;
  }

  @media ${device.laptop} {
    padding: 35px 0;
  }
`;

export { SectionFooter };
