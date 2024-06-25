import styled from 'styled-components';

const CardImg = styled.div<{ margin?: string; height?: string }>`
  height: ${({ height }) => height || 'calc(15vh)'};
  margin: ${({ margin }) => margin || '20px'};
  position: relative;

  img {
    object-fit: contain;
    transition: transform 0.2s;
    transform: scale(0.95);
    :hover {
      transform: scale(1);
      cursor: pointer;
    }
  }
`;

export { CardImg };
