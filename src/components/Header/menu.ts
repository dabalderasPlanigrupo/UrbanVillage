import styled from 'styled-components';
import { device } from '@/utils/devices';

const Menu = styled.ul`
  background-color: var(--color-negro);
  bottom: 0;
  display: flex;
  flex-direction: column;
  gap: 15px;
  justify-content: center;
  left: 0;
  list-style: none;
  margin: 0;
  position: fixed;
  right: 0;
  top: 0;
  transform: translateX(0);
  transition: transform 0.3s;
  z-index: 99;

  &.hide {
    transform: translateX(100%);
  }

  ${device.tablet} {
    position: relative;
    background-color: transparent;
    flex-direction: row;
    transform: translateX(0);

    &.hide {
      transform: translateX(0);
    }
  }

  ${device.laptop} {
    gap: 30px;
  }
`;

const MenuItem = styled.li<{ textColor?: string }>`
  text-transform: uppercase;

  a {
    color: ${({ textColor }) => textColor || 'var(--color-principal)'};
    font-weight: bold;
    font-size: 35px;
    transition: color 0.3s;

    :hover {
      color: var(--color-blanco);
    }
  }

  ${device.tablet} {
    a {
      font-size: 1rem;
    }
  }
`;

export { Menu, MenuItem };
