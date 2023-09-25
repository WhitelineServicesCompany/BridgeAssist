import '@/styles/globals.css'
import ScrollToTopButton from '../components/ScrollToTopButton/ScrollToTopButton';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'swiper/swiper-bundle.css';
export default function App({ Component, pageProps }) {
  return <>
    <Component {...pageProps} />
    <ScrollToTopButton />
  </>

}
