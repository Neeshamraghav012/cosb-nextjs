import '../styles/globals.css'
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function MyApp({ Component, pageProps }) {

  return (
      <>
        <Navbar/>
        <Component {...pageProps} />
        <Footer className={'mt-20'}/>
      </>
  )

}

export default MyApp
