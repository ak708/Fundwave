import "@/styles/globals.css";

import { NavBar, Footer } from "../components";
import { CrowdFundingProvider } from "../Context/CrowdFunding";
export default function App({ Component, pageProps }) {
  return (
    <>
      <CrowdFundingProvider>
        <NavBar />
        <Component {...pageProps} />
        <Footer />
      </CrowdFundingProvider>
    </>
  );
}
