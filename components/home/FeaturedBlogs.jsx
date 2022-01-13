import Showcase from 'components/common/Showcase';

// Fill this up with contentlayer bs
const featured = [
  {
    link: 'blog/pov-wand',
    title: 'POV Wand'
  },
  {
    link: 'blog/intro-to-rl',
    title: 'Introduction to Concepts in RL'
  },
  {
    link: 'blog/led-matrix',
    title: 'LED Matrix'
  },
];

const FeaturedItem = ({ deets }) => {
  return (
    <div className='col-span-1'>
      <a
        href={deets.link}
        className='flex flex-row md:flex-col gap-8 justify-between border-4 border-rose-500 rounded-lg p-4 h-full md:min-h-[14em] origin-center hover:scale-[1.05] transition-transform'
      >
        {/* <div className='text-sm'>{deets.desc}</div> */}
        <span className='md:text-2xl font-semibold'>{deets.title}</span>
      </a>
    </div>
  );
};

const FeaturedBlogs = () => {
  return (
    <div className='mt-24'>
      <h2 className='text-3xl font-semibold'>Featured Blogs</h2>
      <Showcase Component={FeaturedItem} items={featured} max={4} linkToAll='/blog' />
    </div>
  );
};

export default FeaturedBlogs;
