import Hero404 from '@/components/Hero404';
import HeroImage from '@/images/RECURSOS_FONDO_2.png';
import Image from 'next/image';
import MapImg1 from '@/images/MapImg1.jpg';
import MapImg2 from '@/images/MapImg2.jpg';
import MapImg3 from '@/images/MapImg3.jpg';
import { BsListNested } from 'react-icons/bs';
import { BsMap } from 'react-icons/bs';
import { ButtonOutline } from '@/components/Utilities/buttonOutline';
import { Column } from '@/components/Utilities/column';
import { Container } from '@/components/Utilities/container';
import { FooterRow } from '@/components/Footer/footerRow';
import { Inline } from '@/components/Utilities/inline';
import { LinksGrid } from '@/components/DirectorioGrid/linksGrid';
import { PostType } from '@/types/posts';
import { Section } from '@/components/Utilities/section';
import { getAllFilesMetadata } from '@/lib/mdx';
import { useState, useEffect } from 'react';
import { IconWithText } from '@/components/Footer/iconWithText';
import { MapImg } from '@/components/Utilities/mapImg';
import dynamic from 'next/dynamic';

const Select = dynamic(
  () => import('react-select').then((mod) => mod.default),
  {
    ssr: false,
    loading: () => null,
  },
);
const pageType = 'tienda';
type IndexProps = {
  posts: PostType[];
};

const Directorio = ({ posts }: IndexProps): JSX.Element => {
  // Posts filters
  const [filteredByPostType, setFilteredByPostType] = useState(posts);
  const [filteresPosts, setFilteredPosts] = useState(filteredByPostType);
  const [selectedTag, setSelectedTag]: any = useState('Todo');
  const [searchedName, setSearchedName] = useState('');

  // UI
  const [viewMode, setViewMode] = useState('lista');
  const [viewMapMode, setViewMapMode] = useState('level1');

  // TODO: use the setShowOnlyImage somewhere

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const [showOnlyImage, setShowOnlyImage] = useState(true);

  // Create array on non repeated tags
  const tags = filteredByPostType.reduce(
    (noRepeatedTags: string[], post) => {
      if (noRepeatedTags.includes(post.tag)) {
        return noRepeatedTags;
      }

      return [...noRepeatedTags, post.tag];
    },
    ['Todo'],
  );

  // Create options for the select
  const titleArr = filteredByPostType.map((post) => post.title);
  let optionsTitle = titleArr.map((item: string, index: number) => {
    return { value: item, label: index + 1 + '. ' + item };
  });
  optionsTitle = [{ value: 'Todo', label: 'Ver todo' }, ...optionsTitle];

  // Filter posts on init
  useEffect(() => {
    filterByPostType(pageType);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Filter posts on selectedTag change
  useEffect(() => {
    console.log(selectedTag);
    const postsByTag = filterByTag(selectedTag);
    setFilteredPosts(postsByTag);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedTag]);

  // Filter posts on SearchedName change
  useEffect(() => {
    const postsByTitle = filterByTitle(searchedName);
    setFilteredPosts(postsByTitle);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchedName]);

  const filterByPostType = (type: string) => {
    const filtered = posts.filter((post) => post.postType === type);
    setFilteredByPostType(filtered);
  };

  const filterByTag = (tag: any) => {
    if (tag === '' || tag === 'Todo') {
      return filteredByPostType;
    }

    return filteredByPostType.filter((post) => post.tag === tag);
  };

  const filterByTitle = (title: string) => {
    if (title === '' || title === 'Todo') {
      return filteredByPostType;
    }

    return filteredByPostType.filter((post) => post.title === title);
  };

  const handleChangeTitle = (e: any) => {
    setSearchedName(e.value);
  };

  const getCategoryColor = (category: any) => {
    const dictionary: any = {
      Todo: '#1B3089',
      'restaurantes y alimentos': '#E84865',
      'tiendas departamentales': '#00AAC3',
      servicios: '#EC6E29',
      'bancos y servicios financieros': '#FFD444',
      'salud y belleza': '#45AC4C',
      'ropa y accesorios': '#7B4795',
      entretenimiento: '#406FB4',
      'servicio automotriz': '#C35B9D',
    };

    return dictionary[category];
  };

  return (
    <>
      <Hero404
        backgroundImage={HeroImage}
        title="Directorio"
        text="Ven y vive la experiencia con nosotros"
      />
      <Container>
        <Section>
          <FooterRow Columns="1fr 1fr">
            <Inline>
              <Column>
                {viewMode === 'lista' && (
                  <Select
                    options={optionsTitle}
                    key={1}
                    onChange={handleChangeTitle}
                  ></Select>
                )}
                {viewMode === 'mapa' && (
                  <>
                    <ButtonOutline
                      onClick={() => setViewMapMode('level1')}
                      active={viewMapMode === 'level1'}
                      color={'var(--color-principal)'}
                    >
                      LEVEL 1
                    </ButtonOutline>
                    <ButtonOutline
                      onClick={() => setViewMapMode('level2')}
                      active={viewMapMode === 'level2'}
                      color={'var(--color-principal)'}
                    >
                      LEVEL 3
                    </ButtonOutline>
                    <ButtonOutline
                      onClick={() => setViewMapMode('level3')}
                      active={viewMapMode === 'level3'}
                      color={'var(--color-principal)'}
                    >
                      LEVEL 3
                    </ButtonOutline>
                  </>
                )}
              </Column>
            </Inline>
            <Inline>
              <Column>
                <ButtonOutline
                  onClick={() => setViewMode('lista')}
                  active={viewMode === 'lista'}
                  color={'var(--color-principal)'}
                >
                  <IconWithText text="Lista" color="none" marginTop="0em">
                    <BsListNested />
                  </IconWithText>
                </ButtonOutline>
                <ButtonOutline
                  onClick={() => setViewMode('mapa')}
                  active={viewMode === 'mapa'}
                  color={'var(--color-principal)'}
                >
                  <IconWithText text="Mapa" color="none" marginTop="0em">
                    <BsMap />
                  </IconWithText>
                </ButtonOutline>
              </Column>
            </Inline>
          </FooterRow>
        </Section>
      </Container>

      {viewMode === 'lista' && (
        <>
          <Container>
            <Section>
              <Inline>
                {tags?.map((tag: string, index: number) => (
                  <ButtonOutline
                    onClick={() => setSelectedTag(tag)}
                    active={selectedTag === tag}
                    key={index}
                    color={getCategoryColor(tag)}
                  >
                    {tag}
                  </ButtonOutline>
                ))}
              </Inline>
            </Section>
          </Container>

          <LinksGrid
            id="directorio"
            gridItems={filteresPosts}
            linkPrefix="directorio"
            onlyImage={showOnlyImage}
          />
        </>
      )}

      {viewMode === 'mapa' && (
        <>
          <Container>
            <Section>
              {viewMapMode === 'level1' && (
                <MapImg>
                  <Image
                    src={MapImg1}
                    width={1000}
                    height={1000}
                    alt="Mapa Santa Catarina 1"
                    max-width="100%"
                  />
                </MapImg>
              )}
              {viewMapMode === 'level2' && (
                <MapImg>
                  <Image
                    src={MapImg2}
                    width={1000}
                    height={1000}
                    alt="Mapa Santa Catarina 2"
                    max-width="100%"
                  />
                </MapImg>
              )}
              {viewMapMode === 'level3' && (
                <MapImg>
                  <Image
                    src={MapImg3}
                    width={1000}
                    height={1000}
                    alt="Mapa Santa Catarina 3"
                    max-width="100%"
                  />
                </MapImg>
              )}
            </Section>
          </Container>
        </>
      )}
    </>
  );
};

export async function getStaticProps() {
  const posts = await getAllFilesMetadata();
  return {
    props: { posts },
  };
}

export default Directorio;
