import styled from 'styled-components';
import { Row } from './row';
import { ReactNode } from 'react';
import { Item } from './item';

type ImageType = {
  likes: number;
  image: ReactNode;
};

const Elements = ({ fbPostsList }: { fbPostsList: ImageType[] }) => {
  return (
    <Row>
      {fbPostsList?.map(({ image, likes }: ImageType, index) => (
        <ElementStyle key={index}>
          <Item image={image} likes={likes} />
        </ElementStyle>
      ))}
    </Row>
  );
};

const ElementStyle = styled.div<{ color?: string }>`
  align-items: center;
  color: ${({ color }) => color || 'var(--color-gris)'};
  padding: 20px 0;
  text-align: center;
`;

export { Elements };
