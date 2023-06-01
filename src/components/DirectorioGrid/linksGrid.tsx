import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';
import getCategoryColor from '../Utilities/getCategoryColor';
import { BiTime } from 'react-icons/bi';
import { CardHrsInline } from './cardHrsInline';
import { CardImg } from './cardImg';
import { CardTag } from './cardTag';
import { CardTextContainer } from './cardTextContainer';
import { Grid } from './grid';
import { PostType } from '@/types/posts';

const LinksGrid = ({
  className,
  id,
  gridItems,
  linkPrefix,
  onlyImage,
}: {
  className?: string;
  id: string;
  gridItems: Array<PostType>;
  linkPrefix: string;
  onlyImage: boolean;
}) => {
  return (
    <Grid id={id} className={className}>
      {gridItems.map((post, index) => (
        <Link href={`/${linkPrefix}/${post.slug}`} key={index}>
          <CardStyles>
            <CardImg>
              <Image
                src={'/multimedia/' + post.imagen}
                layout="fill"
                alt={post.title}
              />
            </CardImg>
            {onlyImage && (
              <CardTextContainer>
                <CardTag
                  backgraundColor={getCategoryColor(post.tag)}
                  className="tag"
                ></CardTag>
                <CardTitle className="title">{post.title}</CardTitle>
                <CardHrsInline>
                  <BiTime size={12} />
                  <span className="horario">{' ' + post.horario}</span>
                </CardHrsInline>
              </CardTextContainer>
            )}
          </CardStyles>
        </Link>
      ))}
    </Grid>
  );
};

const CardTitle = styled.h4``;

const CardStyles = styled.div`
  border-radius: 20px;
  box-shadow: 4px 4px 8px 4px rgba(0, 0, 0, 0.2);
  text-align: center;
  transition: 0.3s;
`;

export { LinksGrid };
