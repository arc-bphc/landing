import NextLink from 'next/link';

import {
  WebsiteIcon,
  LinkedinIcon,
  EmailIcon,
  GithubIcon
} from 'components/icons';

const TeamItem = ({ deets }) => {
  return (
    <div className='col-span-1 flex flex-col gap-y-6 mb-8'>
      <div className='rounded-xl overflow-hidden h-[12em]'>
        <img src={deets.image} alt={deets.name} className='object-cover w-full' />
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

export default TeamItem;
