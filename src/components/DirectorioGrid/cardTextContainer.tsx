import styled from 'styled-components';
import { device } from '@/utils/devices';

const CardTextContainer = styled.div`
  background-color: var(--color-blanco);
  border-radius: 20px;
  bottom: 0;
  color: var(--color-gris);
  display: flex;
  flex-direction: column;
  height: 130px;
  left: 0;
  padding: 20px 20px 0px 20px;
  right: 0;
  top: 0;
  transition: 0.5s;

  :hover {
    /* opacity: 0.9; */
  }

  span {
    font-size: 0.9rem;
  }

  h3 {
    font-size: 2rem;
    font-weight: 900;
    line-height: 2rem;
  }

  ${device.tablet} {
    padding: 20px 20px 0px 20px;

    h3 {
      font-size: 2.2rem;
      line-height: 2.3rem;
    }
  }

  ${device.desktop} {
    padding: 30px 30px 0px 30px;

    h3 {
      font-size: 3rem;
      line-height: 3rem;
      max-width: 70%;
    }
  }
`;

export { CardTextContainer };
