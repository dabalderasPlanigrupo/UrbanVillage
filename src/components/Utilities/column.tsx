import styled from 'styled-components';
import React from 'react';
import { device } from '@/utils/devices';

const Column = ({
  size,
  borderColor,
  title,
  children,
}: {
  size?: number;
  borderColor?: string;
  title?: string;
  children: React.ReactNode;
}) => {
  return (
    <ColumnStyled size={size}>
      <Title borderColor={borderColor}>{title}</Title>
      <Content>{children}</Content>
    </ColumnStyled>
  );
};

const ColumnStyled = styled.div<{ size?: number }>`
  grid-column: ${({ size }) => (size ? `1 / span ${size}` : 'auto')};

  ${device.tablet} {
    grid-column: auto;
  }
`;

const Content = styled.div`
  padding-top: 20px;
`;

const Title = styled.span<{ borderColor?: string }>`
  border-bottom: ${({ borderColor }) =>
    borderColor || '3px solid var(--color-principal)'};
  color: var(--color-blanco);

  font-size: 16px;
  padding-bottom: 10px;

  strong {
    font-weight: bold;
  }

  ${device.tablet} {
    font-size: 18px;
  }

  ${device.desktop} {
    font-size: 20px;
  }
`;

export { Column };
