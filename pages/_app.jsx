import Navbar from 'components/common/Navbar';
import Footer from 'components/common/Footer';

import '../styles/globals.css';

import { GithubIcon, FacebookIcon } from 'components/icons';

const navigation = [
  { text: 'About', href: '/about' },
  { text: 'Blog', href: '/blog' },
  { text: 'News', href: '/news' },
  { text: 'Level Up', href: '/levelup' },
  { text: 'Contact', href: '/contact' }

  // { text: 'Sponsors', href: '/sponsors' }, Add when you have sponsors lmao
];

const socials = [
  {
    icon: <GithubIcon className='h-6 w-6' />,
    href: 'https://github.com/arc-bphc'
  },
  {
    icon: <FacebookIcon className='h-6 w-6' />,
    href: 'https://www.facebook.com/automationandroboticsclub'
  }
];

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar navigation={navigation} />
      <Component {...pageProps} />
      <Footer navigation={navigation} socials={socials} />
    </>
  );
}

export default MyApp;
