import { useMemo } from 'react';
import Head from 'next/head';

import Container from 'components/common/Container';
import { Showcase, TeamItem } from 'components/common';

import team from 'data/team.json';

const About = () => {
  const _team = useMemo(
    () => team.sort((a, b) => (a.name > b.name ? 1 : b.name > a.name ? -1 : 0)),
    []
  );
  return (
    <>
      <Head>
        <title>About Us || The Automation and Robotics Club</title>

        <meta charSet='utf-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      </Head>
      <Container>
        <div className='mt-24 flex flex-col gap-y-24'>
          <div className=''>
            <h2 className='text-4xl font-semibold flex-shrink max-w-lg'>
              About Us
            </h2>
            <div className='mt-10 flex flex-col gap-y-3'>
              <p>
                The Automation and Robotics Club (ARC) of BITS Hyderabad is a
                diverse group of students interested in working at the
                intersection of{' '}
                <span className='text-rose-400'>
                  Electronics, Programming and Design
                </span>
                . We provide a platform to learn and experiment with the latest
                developments, from <span className='text-rose-400'>CAD</span>{' '}
                and <span className='text-rose-400'>Circuit Design</span>, all
                the way to{' '}
                <span className='text-rose-400'>Machine Learning</span> and{' '}
                <span className='text-rose-400'>Artificial Intelligence</span>,
                applying them in robotics.
              </p>
              <p>
                This Club is an excellent place for anyone willing to work at
                the forefront of science and engineering. We work as a team on a
                wide range of projects, as big as{' '}
                <span className='text-rose-400'>SAUVC</span> and{' '}
                <span className='text-rose-400'>Mars Rovers</span> to smaller
                projects for those just starting! Members are also encouraged to
                exchange experiences and expertise via blogs and discussions
                shared with the general body.
              </p>
              <p>
                With robotics being a rapidly changing field, we strive to keep
                up with the latest developments in both research and industry
                while also learning about various subfields in detail. Apart
                from this, we frequently work on exhibition projects to display
                during the annual technical fest on the campus and other events
                throughout the year.
              </p>
              <p>
                We are open to anyone with a general interest in engineering and
                who wants to explore robotics, so feel free to get in touch with
                us.
              </p>
            </div>
          </div>

          <div className=''>
            <h3 className='text-3xl font-semibold flex-shrink max-w-lg'>
              Our Team
            </h3>
            {/* Add Group Photo */}
            <Showcase Component={TeamItem} items={_team} />
          </div>
        </div>
      </Container>
    </>
  );
};

export default About;
