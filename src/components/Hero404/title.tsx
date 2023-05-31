import styled from 'styled-components';

const Title = styled.h2`
  color: var(--color-blanco);
  font-size: clamp(40px, 10vw, 100px);
  line-height: 1;
  margin-bottom: 15px;
  text-align: center;

  strong {
    -webkit-text-fill-color: transparent;
    -webkit-text-stroke: 2px;
  }
`;

export { Title };
