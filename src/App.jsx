import { useEffect } from 'react';
import Alert from './components/Alert';
import Artworks from './components/Artworks';
import CreateNFT from './components/CreateNFT';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import Loading from './components/Loading';
import ShowNFT from './components/ShowNFT';
import Transactions from './components/Transactions';
import UpdateNFT from './components/UpdateNFT';
import { isWallectConnected } from './Blockchain.services';

const App = () => {
  useEffect(async () => {
    await isWallectConnected();
  }, []);
  return (
    <div className="min-h-screen">
      <div className="gradient-bg-hero">
        <Header />
        <Hero />
      </div>
      <Artworks />
      <Transactions />
      <Footer />
      <CreateNFT />
      <ShowNFT />
      <UpdateNFT />
      <Loading />
      <Alert />
    </div>
  );
};
//512.44
export default App;
