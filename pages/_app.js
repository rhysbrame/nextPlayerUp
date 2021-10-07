import { AppProvider } from '../contexts/AppContext';
import Layout from '../components/Layout';
import PropTypes from 'prop-types';
import '../styles/css/styles.css';

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
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};

export default App;
