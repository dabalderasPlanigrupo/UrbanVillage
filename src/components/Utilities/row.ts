import styled from 'styled-components';

const Row = styled.div<{ columns: number; alignItems: string }>`
  align-items: ${({ alignItems }) => alignItems || 'normal'};
  display: grid;
  grid-template-columns: repeat(
    ${({ columns }) => (columns ? columns : 1)},
    1fr
  );
`;
export { Row };
