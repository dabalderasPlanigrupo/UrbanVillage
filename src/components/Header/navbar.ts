import styled from 'styled-components';
import { device } from '@/utils/devices';
import { Container } from '../Utilities/container';

const Navbar = styled(Container)`
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin-top: 15px;

  .logo img {
    max-height: 70px;
  }

  &.fixed {
    position: fixed;

    .logo {
      left: 15px;
      position: absolute;
      top: 0px;
    }
  }

  img {
    max-width: 100px;
    z-index: 100;
  }

  ${device.tablet} {
    &.fixed {
      position: relative;

      .logo {
        inset: 0;
        position: relative;
      }
    }
  }

  ${device.laptop} {
    .logo img {
      max-height: unset;
    }
  }
`;

export { Navbar };
