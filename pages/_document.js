import Document, { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script';


export default class CustomDocument extends Document {

  render() {
    return (
      <Html>
        <Head>
          
          <Script
                src='https://platform-api.sharethis.com/js/sharethis.js#property=63cd16ce25f4b2001938785b&product=sop'
                async='async'
                type='text/javascript'
                strategy="lazyOnload"
                onLoad={() =>
                console.log(`script loaded correctly, window.FB has been populated`)
                }
            />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}