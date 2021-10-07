import PropTypes from 'prop-types';
import Footer from './Footer';
import Header from './Header';
import Navbar from './Navbar';
import Head from 'next/head';

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link
          rel="preload"
          href="/fonts/Inter/Inter-VariableFont_slnt\,wght.ttf"
          as="font"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/fonts/OpenSans/OpenSans-VariableFont_wdth\,wght.ttf"
          as="font"
          crossOrigin=""
        />
        <link rel="icon" type="image/png" href="/img/nmu-logo.png" />
        <title>Next Player Up</title>
      </Head>
      <div className="container">
        <Header />
        <Navbar />
        {children}
        <Footer />
      </div>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
