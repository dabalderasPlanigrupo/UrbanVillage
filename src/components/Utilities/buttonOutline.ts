import styled from 'styled-components';
import { device } from '@/utils/devices';

const ButtonOutline = styled.button<{ active: boolean; color?: string }>`
  background-color: ${({ active, color }) =>
    active ? color : 'var(--color-blanco)'};
  border-radius: 1rem;
  border: 2px solid
    ${({ active, color }) =>
      active ? color : color || 'var(--color-principal)'};
  color: ${({ active, color }) =>
    active ? 'var(--color-blanco)' : color || 'var(--color-principal)'};
  cursor: pointer;
  display: inline-block;
  font-size: 0.5rem;
  font-weight: bold;
  margin-bottom: 5px;
  margin-right: 5px;
  margin-top: 0;
  padding: 10px 25px;
  text-transform: capitalize;
  transition: 0.5s;
  :hover {
    background-color: ${({ active, color }) =>
      (active ? color : color) || 'var(--color-principal)'};
    border-color: ${({ color }) => color || 'var(--color-principal)'};
    color: ${({ active }) => !active && 'var(--color-blanco)'};
  }
  ${device.tablet} {
    font-size: 0.9rem;
    margin-bottom: 5;
  }
`;

export { ButtonOutline };
