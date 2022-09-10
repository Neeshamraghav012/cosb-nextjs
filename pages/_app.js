import '../styles/globals.css'
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Script from 'next/script'

function MyApp({ Component, pageProps }) {

  return (
      <>

        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
        />
        
        <Script
          id="gtag-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />

        <Navbar/>
        <Component {...pageProps} />
        <Footer className={'mt-20'}/>
    </>
  )

}

export default MyApp
