import styled from 'styled-components';

const CardImg = styled.div<{ margin?: string }>`
  height: calc(15vh);
  margin-bottom: ${({ margin }) => margin || '20px'};
  margin-left: ${({ margin }) => margin || '20px'};
  margin-right: ${({ margin }) => margin || '20px'};
  margin-top: ${({ margin }) => margin || '20px'};
  position: relative;

  img {
    object-fit: contain;
  }
`;

export { CardImg };
