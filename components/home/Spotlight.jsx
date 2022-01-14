import NextLink from 'next/link';

import Showcase from 'components/common/Showcase';
import {
  WebsiteIcon,
  LinkedinIcon,
  EmailIcon,
  GithubIcon
} from 'components/icons';

// Fill this up with contentlayer bs
const featured = [
  {
    name: 'Aditya Chopra',
    image: 'https://arc-bphc.github.io/assets/img/members/Aditya%20Chopra.jpg',
    website: 'https://adeecc.vercel.app',
    linkedin: 'https://adeecc.vercel.app',
    email: 'https://adeecc.vercel.app',
    github: 'https://adeecc.vercel.app'
  },
  {
    name: 'Arjun Prasad',
    image: 'https://arc-bphc.github.io/assets/img/members/Arjun%20Prasad.jpg',
    website: 'https://adeecc.vercel.app',
    linkedin: 'https://adeecc.vercel.app',
    email: 'https://adeecc.vercel.app',
    github: 'https://adeecc.vercel.app'
  },
  {
    name: 'Aditya Chopra',
    image: 'https://arc-bphc.github.io/assets/img/members/Aditya%20Chopra.jpg',
    website: 'https://adeecc.vercel.app',
    linkedin: 'https://adeecc.vercel.app',
    email: 'https://adeecc.vercel.app',
    github: 'https://adeecc.vercel.app'
  },
  {
    name: 'Aditya Chopra',
    image: 'https://arc-bphc.github.io/assets/img/members/Aditya%20Chopra.jpg',
    website: 'https://adeecc.vercel.app',
    linkedin: 'https://adeecc.vercel.app',
    email: 'https://adeecc.vercel.app',
    github: 'https://adeecc.vercel.app'
  }
];

const FeaturedDude = ({ deets }) => {
  return (
    <div className='col-span-1 flex flex-col gap-y-6 mb-8'>
      <div className='rounded-xl overflow-hidden h-[12em]'>
        <img src={deets.image} alt={deets.name} className='object-fill' />
      </div>
      <div className='flex flex-col gap-y-2'>
        <h4 className='font-semibold'>{deets.name}</h4>
        <div className='flex flex-row gap-x-2'>
          {deets.website && (
            <NextLink href={deets.website}>
              <a className='h-3 w-3'>
                <WebsiteIcon />
              </a>
            </NextLink>
          )}
          {deets.linkedin && (
            <NextLink href={deets.linkedin}>
              <a className='h-3 w-3'>
                <LinkedinIcon />
              </a>
            </NextLink>
          )}
          {deets.email && (
            <NextLink href={deets.email}>
              <a className='h-3 w-3'>
                <EmailIcon />
              </a>
            </NextLink>
          )}
          {deets.github && (
            <NextLink href={deets.github}>
              <a className='h-3 w-3'>
                <GithubIcon />
              </a>
            </NextLink>
          )}
        </div>
      </div>
    </div>
  );
};

const Spotlight = () => {
  return (
    <div className='mt-24'>
      <h2 className='text-3xl font-semibold'>Members Spotlight</h2>
      <div className='mt-4 border-l-4 border-rose-300 pl-4 text-gray-500'>
        View 3 random members of the club at every refresh!
      </div>
      <Showcase
        Component={FeaturedDude}
        items={featured}
        max={3}
        linkToAll='/about'
      />
    </div>
  );
};

export default Spotlight;
