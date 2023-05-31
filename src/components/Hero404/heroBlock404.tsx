import styled from 'styled-components';

const HeroBlock404 = styled.div<{ backgroundColor?: string }>`
  ::before,
  ::after {
    background-blend-mode: multiply;
    background-color: ${({ backgroundColor }) =>
      backgroundColor || 'var(--color-blanco)'};
    transition: background-color 3s !important;
  }
`;

export { HeroBlock404 };
