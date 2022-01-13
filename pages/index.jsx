import Head from 'next/head';

import Container from 'components/common/Container';

import { Hero, FeaturedBlogs, Spotlight, Sponsors } from "components/home"

export default function Home() {
  return (
    <>
      <Head>
        <title>ARC || The Automation and Robotics Club</title>

        <meta charSet='utf-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      </Head>
      <Container>
        <Hero />
        <FeaturedBlogs />
        <Spotlight />
        <Sponsors />
      </Container>
    </>
  );
}
