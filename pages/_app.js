import '../styles/globals.css'
const DefaultLayout = ({ children }) => {
  return <>
    { children }
  </>
}
function MyApp({ Component, pageProps }) {
  const Layout = Component.Layout || DefaultLayout;

  return <Layout><Component {...pageProps} /></Layout>
}

export default MyApp
