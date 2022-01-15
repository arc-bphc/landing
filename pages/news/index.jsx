import { useMemo, useState } from 'react';
import Head from 'next/head';
import NextLink from 'next/link';

import { allNews } from '.contentlayer/data';

import { Container } from 'components/common';
import { BoxLinks } from 'components/news';

export const getStaticProps = async ({ params }) => {
  const news = allNews.sort(
    (a, b) => Number(new Date(b.startDate)) - Number(new Date(a.startDate))
  );

  return { props: { news } };
};

const News = ({ news }) => {
  const [searchString, setSearchString] = useState('');
  const filteredNewsNews = useMemo(
    () =>
      news
        .filter((post) =>
          post.title.toLowerCase().includes(searchString.toLowerCase())
        )
        .map((post) => {
          return {
            ...post,
            startDate: new Date(post.startDate).toLocaleDateString('en-US', {
              day: 'numeric',
              year: 'numeric',
              month: 'short'
            }),
            endDate: post.endDate
              ? new Date(post.endDate).toLocaleDateString('en-US', {
                  day: 'numeric',
                  year: 'numeric',
                  month: 'short'
                })
              : undefined
          };
        }),
    [news, searchString]
  );

  return (
    <>
      <Head>
        <title>News || ARC</title>

        <meta charSet='utf-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      </Head>

      <Container>
        <div className='mt-24 flex flex-col gap-y-5'>
          <h1 className='text-5xl font-semibold'>News</h1>
          <div className='relative w-full'>
            <input
              aria-label='search newsnews'
              type='text'
              placeholder='Search'
              onChange={(e) => setSearchString(e.target.value)}
              className='block w-full px-4 py-2 text-white bg-gray-800 rounded-md focus:ring-gray-600 focus:border-gray-600'
            />
            <svg
              className='absolute w-5 h-5 text-gray-400 right-3 top-3 dark:text-gray-300'
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
              />
            </svg>
          </div>
          {!filteredNewsNews.length && (
            <span className='text-primary-300'>No news found :(</span>
          )}
          {filteredNewsNews.map((post) => (
            <NextLink key={post.slug} href={`/news/${post.slug}`}>
              <a className='flex flex-col gap-y-4 hover:scale-[1.01] transition-transform'>
                <h3 className='text-3xl font-semibold'>{post.title}</h3>
                <h5 className='text-xl font-semibold text-gray-400'>
                  {post.startDate} {post.endDate ? ` - ${post.endDate}` : ''}{' '}
                </h5>
                <BoxLinks links={post.links} />

                <div className='border-l-4 border-accent-800 pl-4 text-gray-200'>
                  {post.summary}
                </div>
              </a>
            </NextLink>
          ))}
        </div>
      </Container>
    </>
  );
};

export default News;
