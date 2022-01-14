import NextLink from 'next/link';
import Container from 'components/common/Container';

const Footer = ({ navigation, socials }) => {
  return (
    <Container>
      <div className='mt-24 py-10 border-t-[1px] border-primary-300 flex flex-col gap-16'>
        <div className='grid grid-cols-1 md:grid-cols-3 md:grid-rows-3 gap-x-1 gap-y-8'>
          {/* Nav */}
          <div className='col-span-1 md:row-span-full flex flex-col gap-y-5 items-center md:items-start'>
            {navigation.map((value) => (
              <NextLink key={value.href} href={value.href}>
                <a className='text-rose-50 hover:text-rose-500 transition-colors'>
                  {value.text}
                </a>
              </NextLink>
            ))}
          </div>
          {/* Socials */}
          <div className='col-span-1 row-span-1 md:col-start-2 flex gap-x-5 justify-center items-center md:justify-start md:items-start'>
            {socials.map((value) => (
              <a
                key={value.href}
                href={value.href}
                className='text-rose-50 hover:text-rose-500 transition-colors h-6 w-6'
              >
                {value.icon}
              </a>
            ))}
          </div>
          <div className='col-span-1 md:row-span-2 md:col-start-2'>
            <div className='flex flex-col gap-y-1 items-center justify-center md:items-start'>
              <span>Contact us at</span>
              <NextLink href='mailto:arc@hyderabad.bits-pilani.ac.in'>
                <a className='text-rose-400 hover:text-rose-500 underline underline-offset-4 decoration-dotted transition-colors'>
                  arc@hyderabad.bits-pilani.ac.in
                </a>
              </NextLink>
            </div>
          </div>
          <div className='col-span-1 md:row-span-1 md:col-start-3 md:row-start-1 flex flex-col items-center md:items-start justify-center md:justify-between text-gray-400 text-sm'>
            <span>BITS Pilani Hyderabad Campus</span>
            <span>Secunderabad, Telangana 500078</span>
          </div>
          <div className='col-span-1 md:row-span-2 md:col-start-3 md:row-start-2 flex items-center justify-center md:justify-start'>
            <NextLink href='https://www.bits-pilani.ac.in/hyderabad/'>
              <a>
                <img
                  src='/static/images/bits.png'
                  alt='BITS Pilani'
                  className='h-20 object-contain'
                />
              </a>
            </NextLink>
          </div>
        </div>
        <span className='text-gray-400 mx-auto'>
          © 2022 Automation & Robotics Club
        </span>
      </div>
    </Container>
  );
};

export default Footer;
