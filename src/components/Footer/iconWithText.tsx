import React from 'react';
import styled from 'styled-components';
import { device } from '@/utils/devices';

const IconWithText = ({
  text,
  link,
  children,
  marginTop,
  color,
}: {
  text: string;
  link?: string;
  children?: React.ReactNode;
  marginTop?: string;
  color?: string;
}) => {
  return (
    <>
      <ContainerIwT marginTop={marginTop}>
        <span>{children}</span>
        <Description color={color} href={link}>
          {text}
        </Description>
      </ContainerIwT>
    </>
  );
};

const ContainerIwT = styled.li<{ marginTop?: string }>`
  align-items: center;
  display: flex;
  justify-content: left;
  margin-top: ${({ marginTop }) => marginTop || '1em'};
`;

const Description = styled.a<{ color?: string }>`
  color: ${({ color }) => color || 'var(--color-blanco)'};
  grid-area: 1/2;
  margin-left: 10px;
  max-width: 385px;
  transition: color 0.3s;

  &:hover {
    color: var(--color-principal);
  }
  ${device.desktop} {
    max-width: 420px;
  }
`;

export { IconWithText };
