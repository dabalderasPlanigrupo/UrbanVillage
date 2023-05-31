import styled from 'styled-components';
import { device } from '@/utils/devices';

const HamburguerButton = (props: any) => {
  return (
    <Button {...props}>
      <div></div>
      <div></div>
      <div></div>
    </Button>
  );
};

const Button = styled.button`
  background: none;
  border: none;
  color: var(--color-blanco);
  cursor: pointer;
  height: 40px;
  margin: 0;
  outline: none;
  padding: 0;
  position: absolute;
  right: 15px;
  top: 30px;
  width: 40px;
  z-index: 100;

  > div {
    background-color: #fff;
    border-radius: 2px;
    height: 3px;
    margin-bottom: 7px;
    position: relative;
    top: 0;
    transition: 0.3s ease transform, 0.3s ease top, 0.3s ease width,
      0.3s ease right;

    :first-child {
      transform-origin: 0;
    }

    :nth-child(2) {
      right: 0;
    }

    :last-child {
      margin-bottom: 0;
      margin-bottom: 0;
      transform-origin: 30px;
    }
  }

  &.close {
    > div {
      :first-child {
        left: 5px;
        top: -5px;
        transform: rotateZ(45deg);
      }

      :nth-child(2) {
        right: 1px;
        top: -1px;
        transform: rotateZ(-45deg);
      }

      :last-child {
        opacity: 0;
      }
    }
  }

  ${device.tablet} {
    display: none;
  }
`;

export { HamburguerButton };
