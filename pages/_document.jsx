import { Html, Head, Main, NextScript } from 'next/document';

export default function Document(props) {
  return (
    <Html lang='en'>
      <Head>
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link
          rel='preconnect'
          href='https://fonts.gstatic.com'
          crossOrigin='true'
        />
        <link
          href='https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&family=Roboto+Mono:wght@300;400;600;700&display=swap'
          rel='stylesheet'
        />

        <link href='/static/favicons/favicon.ico' rel='shortcut icon' />
        <link href='/static/favicons/site.webmanifest' rel='manifest' />

        <link
          href='/static/favicons/apple-touch-icon.png'
          rel='apple-touch-icon'
          sizes='180x180'
        />
        <link
          href='/static/favicons/favicon-32x32.png'
          rel='icon'
          sizes='32x32'
          type='image/png'
        />
        <link
          href='/static/favicons/favicon-16x16.png'
          rel='icon'
          sizes='16x16'
          type='image/png'
        />
        <link
          color='#111827'
          href='/static/favicons/safari-pinned-tab.svg'
          rel='mask-icon'
        />
        <meta content='#111827' name='theme-color' />
        <meta content='#ffffff' name='msapplication-TileColor' />
        <meta
          content='/static/favicons/browserconfig.xml'
          name='msapplication-config'
        />
      </Head>
      <body className='bg-gray-900 text-white'>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
