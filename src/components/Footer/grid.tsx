import styled from 'styled-components';

const Grid = styled.div`
  display: grid;
  grid-column-gap: 2rem;
  grid-row-gap: 1rem;
  grid-template-columns: repeat(2, 1fr);
  margin-bottom: 2rem;
  margin-top: 2rem;
  img {
    height: 10px;
    object-fit: contain;
    width: 10px;
  }
`;

export { Grid };
