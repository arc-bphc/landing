import { useRouter } from 'next/router';
import NextLink from 'next/link';
import cn from 'classnames';

import Container from 'components/common/Container';
import MobileMenu from 'components/common/MobileMenu';

const NavItem = ({ href, text }) => {
  const router = useRouter();
  const isActive = router.asPath == href;
  return (
    <NextLink href={href} passHref>
      <a
        className={cn(
          isActive ? 'font-semibold text-rose-400' : 'font-normal text-rose-50',
          'sm:py-2 rounded-lg hover:text-rose-500 transition-all '
        )}
      >
        {text}
      </a>
    </NextLink>
  );
};

const Navbar = ({ navigation }) => {
  return (
    <div className='fixed w-full bg-gray-900/75 backdrop-blur'>
      <MobileMenu navigation={navigation} />
      <Container>
        <nav className='hidden md:flex md:justify-between h-20 items-center'>
          <div className=''>
            {/* Logo */}
            <NavItem
              href='/'
              text={
                <img src="/static/images/logo.png" alt="logo" className='w-16' />
              }
            />
          </div>
          <div className='flex gap-x-3'>
            {navigation.map(({ href, text }) => (
              <NavItem key={href} href={href} text={text} />
            ))}
          </div>
        </nav>
      </Container>
    </div>
  );
};

export default Navbar;
