import { useMemo, useState } from 'react';
import Head from 'next/head';
import NextLink from 'next/link';

import { allLevelUps } from '.contentlayer/data';

import { Container, TagList } from 'components/common';

export const getStaticProps = async ({ params }) => {
  let numLevels = 0;
  for (let level of allLevelUps) {
    numLevels = Math.max(level.level, numLevels);
  }

  let levels = [];

  for (let i = 0; i <= numLevels; i++) {
    levels[i] = allLevelUps.filter((levelup) => levelup.level === i);
  }

  return { props: { levels } };
};

const LevelUp = ({ levels }) => {
  return (
    <>
      <Head>
        <title>Level Up || ARC</title>

        <meta charSet='utf-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      </Head>

      <Container>
        <div className='mt-24 flex flex-col gap-y-5'>
          <h1 className='text-5xl font-semibold'>Level Up</h1>
          {!levels.length && (
            <span className='text-primary-300'>No posts found :(</span>
          )}
          {levels.map((level, index) => (
            <div key={index} className='flex flex-col'>
              <h3 className='text-3xl font-semibold border-b-2 border-gray-600'>
                Level {index}
              </h3>
              <div className='flex flex-col gap-y-2 mt-3'>
                {level.map((post) => (
                  <NextLink key={post.slug} href={`/levelup/${post.slug}`}>
                    <a className='text-rose-500 hover:text-rose-400'>
                      <div className='flex justify-between items-center'>
                        <h4 className='text-xl font-semibold'>{post.title}</h4>
                        <div className='text-gray-400'>
                          <TagList tags={post.tags} />
                        </div>
                      </div>
                    </a>
                  </NextLink>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </>
  );
};

export default LevelUp;
