import '../styles/globals.css'
import '../styles/styles.css'
import '../styles/stylesSlider.css'

// Layouts
import HomeLayout from '../components/layouts/homeLayout';
import SecondLayout from '../components/layouts/secondLayout';

const layouts = {
  L1: HomeLayout,
  L2: SecondLayout,
};

function MyApp({ Component, pageProps }) {
  const Layout = layouts[Component.layout] || ((children) => <>{children}</>);
  return <Layout><Component {...pageProps} /></Layout>
}

export default MyApp
