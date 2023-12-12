import Layout from '@/components/Layout';
import '@/styles/common.scss';
export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
