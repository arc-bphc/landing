import { useMemo } from 'react';
import Head from 'next/head';

import { useMDXComponent } from 'next-contentlayer/hooks';
import { allLevelUps } from '.contentlayer/data';

import { Container, TagList } from 'components/common';
import components from 'components/MDXComponents';

export const getStaticPaths = async () => {
  return {
    paths: allLevelUps.map((p) => ({ params: { slug: p.slug } })),
    fallback: false
  };
};

export const getStaticProps = async ({ params }) => {
  const level = allLevelUps.find((level) => level.slug === params?.slug);

  return {
    props: { level }
  };
};

const Level = ({ level }) => {
  const Component = useMDXComponent(level.body.code);

  return (
    <>
      <Head>
        <title>{level.title} || Level Up</title>

        <meta charSet='utf-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <link
          rel='stylesheet'
          href='https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.2.0/styles/github-dark.min.css'
        ></link>
        <link
          rel='stylesheet'
          href='https://cdn.jsdelivr.net/npm/katex@0.15.1/dist/katex.min.css'
          integrity='sha384-R4558gYOUz8mP9YWpZJjofhk+zx0AS11p36HnD2ZKj/6JR5z27gSSULCNHIRReVs'
          crossOrigin='anonymous'
        />
      </Head>

      <Container>
        <div className='mt-24 flex flex-col'>
          <h1 className='text-5xl font-semibold'>{level.title}</h1>
          <div className='flex justify-between items-center mt-3'>
            <TagList tags={level.tags} />
            <div className='text-sm text-primary-300'>
              {level.readingTime.text}
            </div>
          </div>
          {/* <div className='border-l-4 border-rose-100 bg-gray-800 mt-8 px-4 py-5 text-primary-200'>
            {level.summary}
          </div> */}
          <div className='mt-8 prose prose-invert max-w-none'>
            <Component components={components} />
          </div>
        </div>
      </Container>
    </>
  );
};

export default Level;
