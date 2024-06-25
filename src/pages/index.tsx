/* eslint-disable */
import BackgroundImage from '@/images/Portada.png';
import Hero from '@/components/Hero';
import RightImg from '@/images/Elemento1.png';
import LeftImg from '@/images/Elemento2.png';
import ImagePersonas from '@/images/Personas.png';
import LastPostSection from '@/components/LastPostSection';
import OurNumbers from '@/components/OurNumbers';
import { useState, useEffect } from 'react';
import StoresImage from '@/images/Locatario.png';
import TextImage from '@/images/Frase.png';
import { PostType } from '@/types/posts';
import { Stores } from '@/components/Stores';
import { getAllFilesMetadata } from '@/lib/mdx';

const pageType = 'tienda';
const events = 'evento';
type IndexProps = {
  posts: PostType[];
};

const Home = ({ posts }: IndexProps): JSX.Element => {
  const [postsFiltered, setPostsFiltered] = useState(posts);
  const [eventsFiltered, setEventsFiltered] = useState(posts);

  useEffect(() => {
    filterByPostType(pageType);
    filterEvents(events);
  }, []);

  const filterByPostType = (type: string) => {
    const filtered = posts.filter((post) => post.postType === type);
    setPostsFiltered(filtered);
  };

  const filterEvents = (type: string) => {
    const filtered = posts.filter((post) => post.postType === type);
    setEventsFiltered(filtered);
  };

  return (
    <>
      <Hero
        backgroundImage={BackgroundImage}
        textImg={TextImage}
        cornerImage={RightImg.src}
        centerImage={ImagePersonas}
      />
      <OurNumbers items={eventsFiltered} image={LeftImg} />
      <Stores
        image={LeftImg}
        backgroundImage={StoresImage}
        items={postsFiltered}
      />
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
