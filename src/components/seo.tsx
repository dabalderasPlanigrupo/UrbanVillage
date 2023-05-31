import Head from 'next/head';
import config from './config';

interface SEOProps {
  description: string;
  title: string;
}

const SEO: React.FC<SEOProps> = ({ description, title }) => {
  const siteTitle = config.title;

  return (
    <Head>
      <title>{`${title} | ${siteTitle}`}</title>
      <meta
        name="google-site-verification"
        content="2DpX7fjnu21AkkwXjTo3jQ-cLfv7QkW-QSxjP9-C8_I"
      />
      <meta name="description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:site_name" content={siteTitle} />
      <meta property="facebook:card" content="summary" />
      <meta property="facebook:creator" content={config.social.facebook} />
      <meta property="facebook:title" content={title} />
      <meta property="facebook:description" content={description} />
    </Head>
  );
};

export default SEO;
