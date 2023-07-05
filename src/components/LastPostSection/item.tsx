import React, { ReactNode } from 'react';
import styled from 'styled-components';
import { FcLike } from 'react-icons/fc';
import { device } from '@/utils/devices';

const Item = ({ image, likes }: { image?: ReactNode; likes?: number }) => {
  return (
    <PostContainer>
      {image}
      <PostContentContainer>
        {/* <FcLike size={25} />
        <Number>{likes}</Number> */}
      </PostContentContainer>
    </PostContainer>
  );
};

const Number = styled.p`
  font-size: 18px;

  ${device.tablet} {
    font-size: 20px;
  }

  ${device.desktop} {
    font-size: 22px;
  }
`;

const PostContentContainer = styled.div`
  align-items: center;
  bottom: 0;
  color: var(--color-blanco);
  display: flex;
  padding: 15px 15px;
  position: absolute;
  right: 0;
`;

const PostContainer = styled.div`
  height: 100%;
  position: relative;
  transition: 0.3s;
  img {
    aspect-ratio: auto 1/1;
    border-radius: 15px;
    :hover {
    }
  }
`;

export { Item };
