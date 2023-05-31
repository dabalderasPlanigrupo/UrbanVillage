import styled from 'styled-components';

const CardTag = styled.span<{ backgraundColor?: string }>`
  background: ${({ backgraundColor }) => backgraundColor || '#999'};
  border-radius: 15px;
  color: #fff;
  margin-bottom: 10px;
  padding: 4px 4px;
  text-decoration: none;
  text-transform: uppercase;
`;

export { CardTag };
