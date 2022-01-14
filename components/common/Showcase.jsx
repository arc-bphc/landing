import { useMemo } from 'react';

const Showcase = ({ Component, items, max, linkToAll }) => {
  const items_ = useMemo(() => {
    if (items.length <= max || !max) return items;
    const start = Math.floor(Math.random() * items.length);
    return items.slice(start, start + max);
  }, [items, max]);

  console.log(items_);

  return (
    <div className='flex flex-col gap-y-4'>
      <div className='mt-10 grid grid-cols-1 md:grid-cols-3 gap-5 items-stretch'>
        {items_.map((item) => (
          <Component key={item._id} deets={item} />
        ))}
      </div>
      {linkToAll && (
        <a
          href={linkToAll}
          className='text-primary-200 hover:text-primary-100 transition-colors flex items-center gap-x-1'
        >
          View all
          <span className=''>
            <RightArrow className='h-4 w-4' />
          </span>
        </a>
      )}
    </div>
  );
};

export default Showcase;

function RightArrow(props) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='h-7 w-7'
      width='20'
      height='20'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      {...props}
    >
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={2}
        d='M14 5l7 7m0 0l-7 7m7-7H3'
      />
    </svg>
  );
}
