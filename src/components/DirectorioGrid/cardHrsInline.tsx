import styled from 'styled-components';

const CardHrsInline = styled.div<{ Margin?: string }>`
  align-items: center;
  /* display: flex; */
  margin-top: ${({ Margin }) => Margin || '10px'};
`;

export { CardHrsInline };
