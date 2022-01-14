import Link from 'next/link';

const CustomLink = (props) => {
  const href = props.href;
  const isInternalLink = href && (href.startsWith('/') || href.startsWith('#'));

  if (isInternalLink) {
    return (
      <Link href={href}>
        <a
          className='text-rose-500 hover:text-rose-400 underline underline-offset-4 decoration-dotted transition-colors'
          {...props}
        >
          {props.children}
        </a>
      </Link>
    );
  }

  return (
    <a
      target='_blank'
      rel='noopener noreferrer'
      className='text-rose-500 hover:text-rose-400 underline underline-offset-4 decoration-dotted transition-colors'
      {...props}
    />
  );
};

function RoundedImage(props) {
  return <img alt={props.alt} className='rounded-lg' {...props} />;
}

function EmbedItem({ url }) {
  return (
    <iframe
      className='w-full aspect-video'
      src={url}
      title='YouTube video player'
      frameBorder='0'
      allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
      allowFullScreen
    />
  );
}

const MDXComponents = {
  Image: RoundedImage,
  a: CustomLink,
  EmbedItem
};

export default MDXComponents;
