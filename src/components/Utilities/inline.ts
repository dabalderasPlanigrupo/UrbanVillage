import styled from 'styled-components';

const Inline = styled.div<{
  textAlign?: string;
}>`
  align-items: center;
  text-align: ${({ textAlign }) => textAlign || 'center'};
  z-index: 1;
  .Select-menu-outer {
    z-index: 999 !important;
  }
`;

export { Inline };
