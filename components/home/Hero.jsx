import NextLink from 'next/link';

const Hero = () => {
  return (
    <div className='flex'>
      <div className='flex flex-col-reverse md:flex-row mt-28 justify-between w-full'>
        <div className='flex flex-col gap-y-3'>
          <h1 className='text-5xl font-semibold flex-shrink max-w-lg'>
            The Automation and Robotics Club
          </h1>
          <div className='flex flex-col md:flex-row p-4 gap-x-8 gap-y-3 md:items-center mt-4 border-dashed border-2 border-white'>
            <h4 className='text-xl font-semibold text-rose-500 tracking-wide'>
              Design
            </h4>
            <h4 className='text-xl font-semibold text-rose-500 tracking-wide'>
              Develop
            </h4>
            <h4 className='text-xl font-semibold text-rose-500 tracking-wide'>
              Create
            </h4>
          </div>
          <h6 className='mt-24 text-lg'>
            Wanna join us? Start{' '}
            <NextLink href='/levelup' passHref>
              <a className='text-rose-500 hover:text-rose-400 underline underline-offset-4 decoration-dotted transition-colors'>
                here
              </a>
            </NextLink>
          </h6>
        </div>

        <img
          src='/static/images/logo.png'
          alt='Logo'
          className='hidden sm:block h-48 w-48'
        />
      </div>
    </div>
  );
};

export default Hero;
