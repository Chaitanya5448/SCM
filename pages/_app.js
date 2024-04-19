import "@/styles/globals.css";


//INTERNAL IMPORT

import {TrackProvider} from '../Conetxt/Track';
import { NavBar, Footer } from "../Components";

export default function App({ Component, pageProps }) {
  return (
    <>
    <TrackProvider>
    <NavBar/>
      <Component {...pageProps} />;    
    </TrackProvider>
    <Footer/>
    </>
  );
}
