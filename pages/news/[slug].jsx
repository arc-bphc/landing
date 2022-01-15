import { useMemo } from 'react';
import Head from 'next/head';

import { useMDXComponent } from 'next-contentlayer/hooks';
import { allNews } from '.contentlayer/data';

import { Container } from 'components/common';
import { BoxLinks } from 'components/news';
import components from 'components/MDXComponents';

export const getStaticPaths = async () => {
  return {
    paths: allNews.map((p) => ({ params: { slug: p.slug } })),
    fallback: false
  };
};

export const getStaticProps = async ({ params }) => {
  const post = allNews.find((post) => post.slug === params?.slug);

  return {
    props: { post }
  };
};

const News = ({ post }) => {
  const Component = useMDXComponent(post.body.code);

  const dateString = useMemo(() => {
    const start = new Date(post.startDate).toLocaleDateString('en-US', {
      day: 'numeric',
      year: 'numeric',
      month: 'short'
    });

    if (!post.endDate) return startDate;

    const end = new Date(post.endDate).toLocaleDateString('en-US', {
      day: 'numeric',
      year: 'numeric',
      month: 'short'
    });

    return `${start} - ${end}`;
  }, [post.startDate, post.endDate]);

  return (
    <>
      <Head>
        <title>{post.title} || ARC</title>

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
          <h1 className='text-5xl font-semibold'>{post.title}</h1>
          <div className='flex items-center mt-3'>
            <h5 className='text-xl font-semibold'>{dateString}</h5>
          </div>

          <div className='mt-3'>
            <BoxLinks links={post.links} />
          </div>
          <div className='border-l-4 border-rose-100 bg-gray-800 mt-8 px-4 py-5 text-primary-200'>
            {post.summary}
          </div>
          <div className='mt-8 prose prose-invert max-w-none'>
            <Component components={{ ...components }} />
          </div>
        </div>
      </Container>
    </>
  );
};

export default News;
