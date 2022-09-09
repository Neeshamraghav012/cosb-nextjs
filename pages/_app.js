import '../styles/globals.css'
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Document, { Html, Head, Main, NextScript } from 'next/document';

function MyApp({ Component, pageProps }) {

  return (
      <>


        <Html>
          <Head>


            <Script strategy="lazyOnload" src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`} />

            <Script strategy="lazyOnload">
                {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
                    page_path: window.location.pathname,
                    });
                `}
            </Script>


          </Head>
          
        </Html>


        <Navbar/>
        <Component {...pageProps} />
        <Footer className={'mt-20'}/>
    </>
  )

}

export default MyApp
