import { AppProvider } from '../contexts/AppContext';
import Layout from '../components/Layout';

import PropTypes from 'prop-types';

function App({ Component, pageProps }) {
  return (
    <AppProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AppProvider>
  );
}

App.propTypes = {
  Component: PropTypes.node.isRequired,
  pageProps: PropTypes.node.isRequired,
};

export default App;
