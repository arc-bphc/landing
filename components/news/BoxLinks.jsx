import NextLink from 'next/link';

const BoxLink = ({ href, title }) => {
  return (
    <NextLink href={href} passHref>
      <a className='px-3 py-2 text-rose-400 border-2 border-rose-400 hover:text-rose-500 hover:border-rose-500 transition-colors'>
        {title}
      </a>
    </NextLink>
  );
};

const BoxLinks = ({ links }) => {
  return (
    <div className='flex gap-x-5'>
      {links?.map((link) => (
        <BoxLink key={link.href} {...link} />
      ))}
    </div>
  );
};

export default BoxLinks;
