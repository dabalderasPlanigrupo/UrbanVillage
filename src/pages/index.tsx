/* eslint-disable */
import BackgroundImage from '@/images/RECURSOS_FONDO_1.png';
import Hero from '@/components/Hero';
import RightImg from '@/images/RECURSOS_ONDA_3.png';
import LeftImg from '@/images/RECURSOS_ONDA_2.png';
import ImagePersonas from '@/images/RECURSOS_PERSONAS.png';
import LastPostSection from '@/components/LastPostSection';
import OurNumbers from '@/components/OurNumbers';
import { useState, useEffect } from 'react';
import StoresImage from '@/images/RECURSOS_FONDO_2.png';
import TextImage from '@/images/RECURSOS_FRASE.png';
import { PostType } from '@/types/posts';
import { Stores } from '@/components/Stores';
import { getAllFilesMetadata } from '@/lib/mdx';

const pageType = 'tienda';
type IndexProps = {
  posts: PostType[];
};

const Home = ({ posts }: IndexProps): JSX.Element => {
  const [postsFiltered, setPostsFiltered] = useState(posts);

  useEffect(() => {
    filterByPostType(pageType);
  }, []);

  const filterByPostType = (type: string) => {
    const filtered = posts.filter((post) => post.postType === type);
    setPostsFiltered(filtered);
  };

  return (
    <>
      <Hero
        backgroundImage={BackgroundImage}
        textImg={TextImage}
        cornerImage={RightImg.src}
        centerImage={ImagePersonas}
      />
      <OurNumbers image={LeftImg} />
      <Stores backgroundImage={StoresImage} items={postsFiltered} />
      <LastPostSection />
    </>
  );
};

export async function getStaticProps() {
  const posts = await getAllFilesMetadata();
  return {
    props: { posts },
  };
}

export default Home;
