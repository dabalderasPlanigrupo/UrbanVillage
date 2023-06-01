/* eslint-disable */
import Hero404 from '@/components/Hero404';
import HeroImage from '@/images/RECURSOS_FONDO_2.jpg';
import { Container } from '@/components/Utilities/container';
import { LinksGrid } from '@/components/LinksGrid/linksGrid';
import { PostType } from '@/types/posts';
import { Section } from '@/components/Utilities/section';
import { TitleSection } from '../components/Utilities/titleSection';
import { getAllFilesMetadata } from '@/lib/mdx';
import { useState, useEffect } from 'react';

const pageType = 'promocion';

type IndexProps = {
  posts: PostType[];
};

const Promociones = ({ posts }: IndexProps): JSX.Element => {
  const [postsFiltered, setPostsFiltered] = useState(posts);

  const filterByTag = (tag: string) => {
    const filtered = posts.filter((post) => post.tag === tag);
    setPostsFiltered(filtered);
  };

  useEffect(() => {
    filterByTag(pageType);
  }, []);

  return (
    <>
      <Hero404
        backgroundImage={HeroImage}
        title="Promociones"
        text="¡Aprobecha y ven con nosotros!"
      />

      <LinksGrid
        id="promociones"
        gridItems={postsFiltered}
        linkPrefix="promociones"
        onlyImage={true}
      />
      <Container>
        <Section backgroundColor="var(--color-blanco)">
          <TitleSection textColor="var(--color-principal)">
            <strong>¡Te esperamos!</strong>
          </TitleSection>
        </Section>
      </Container>
    </>
  );
};

export async function getStaticProps() {
  const posts = await getAllFilesMetadata();
  return {
    props: { posts },
  };
}

export default Promociones;
