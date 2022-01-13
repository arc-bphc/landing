import Navbar from 'components/common/Navbar';
import Footer from 'components/common/Footer';

import '../styles/globals.css';

const navigation = [
  { text: 'About', href: '/about' },
  { text: 'Resources', href: '/resources' },
  // { text: 'team', href: '/team' }, make it a part of about
  { text: 'Sponsors', href: '/sponsors' },
  { text: 'Contact', href: '/contact' }
];

const socials = [
  { text: 'github', href: 'https://github.com/arc-bphc' },
  {
    text: 'facebook',
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
