import { ThemeProvider } from 'next-themes';
import '@/styles/globals.css';
import Navbar from 'components/Navbar';
import Footer from 'components/Footer';

const App = ({ Component, pageProps }) => (
  <ThemeProvider attribute="class">
    <div>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </div>
  </ThemeProvider>
);
export default App;
