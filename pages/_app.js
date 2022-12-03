import '../styles/globals.css'
import '../styles/styles.css'
import HomeLayout from '../components/layouts/homeLayout';

const layouts = {
  L1: HomeLayout,
};

function MyApp({ Component, pageProps }) {
  const Layout = layouts[Component.layout] || ((children) => <>{children}</>);
  return <Layout><Component {...pageProps} /></Layout>
}

export default MyApp
