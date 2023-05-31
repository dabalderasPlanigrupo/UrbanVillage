import styled from 'styled-components';
import { device } from '@/utils/devices';

const Button = styled.button<{ buttonColor: string }>`
  background-color: var(--color-principal);
  border: 2px solid var(--color-principal);
  border-color: var(--color-principal);
  border-radius: 2em;
  color: var(--color-blanco);
  cursor: pointer;
  display: inline-block;
  margin: 0 auto;
  margin-bottom: 10px;
  margin-top: 50px;
  padding: 3px 25px 5px;
  transition: background-color 0.3s, border-color 0.3s;

  &:hover {
    background-color: ${({ buttonColor }) => buttonColor || '#EAE8E4'};
    border: 2px solid var(--color-principal);
    color: var(--color-principal);
  }

  ${device.tablet} {
    margin-top: 20px;
  }

  ${device.desktop} {
    margin-top: 50px;
  }
`;
export { Button };
