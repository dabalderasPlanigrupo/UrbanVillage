import styled from 'styled-components';
import { Row } from './row';
import { Column } from '../Utilities/column';
import { ReactNode } from 'react';
import { Item } from './item';

type ElementsType = {
  icon: ReactNode;
  number: number;
  text: string;
};

const Elements = ({ elementsList }: { elementsList: ElementsType[] }) => {
  return (
    <Row>
      {elementsList?.map(({ icon, number, text }: ElementsType, index) => (
        <Column key={index}>
          <ElementStyle>
            <Item key={index} icon={icon} number={number} text={text} />
          </ElementStyle>
        </Column>
      ))}
    </Row>
  );
};

const ElementStyle = styled.div<{ color?: string }>`
  align-items: center;
  color: ${({ color }) => color || 'var(--color-gris)'};
  gap: 10px;
  padding: 20px 0;
  text-align: center;
`;

export { Elements };
