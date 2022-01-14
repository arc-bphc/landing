import NextLink from 'next/link';

import Showcase from 'components/common/Showcase';

const featured = [
  {
    link: 'blog/mars-rover',
    title: 'Mars Rover',
    image: '/static/images/blog/mars-rover.jpg'
  },
  {
    link: 'blog/saucv',
    title: 'Singapore AUV Challenge',
    image: '/static/images/blog/sauvc.jpeg'
  },
  {
    link: 'blog/automated-flute',
    title: 'The Automated Flute',
    image: 'https://picsum.photos/seed/flute/400/600'
  }
];

const FeaturedItem = ({ deets }) => {
  return (
    <div className='col-span-1 mb-8 origin-center hover:scale-[1.01] transition-transform rounded-xl overflow-hidden'>
      <NextLink href={deets.link}>
        <a className='grid grid-rows-5 grid-cols-1 h-[12em]'>
          <div className='row-start-1 col-start-1 row-span-full col-span-full flex items-end px-3 pb-2 bg-gradient-to-t from-gray-900 to-transparent'>
            <h4 className='text-xl font-semibold'>{deets.title}</h4>
          </div>
          <div className='row-start-1 col-start-1 row-span-full col-span-full -z-10'>
            <img src={deets.image} alt={deets.title} className='object-fill' />
          </div>
        </a>
      </NextLink>
    </div>
  );
};

const FeaturedBlogs = () => {
  return (
    <div className='mt-24'>
      <h2 className='text-3xl font-semibold'>Featured Projects</h2>
      <Showcase
        Component={FeaturedItem}
        items={featured}
        max={4}
        linkToAll='/blog'
      />
    </div>
  );
};

export default FeaturedBlogs;
