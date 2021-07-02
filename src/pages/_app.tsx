import { Header } from '../components/Header/index';
import { CharactersContextProvider } from '../contexts/CharactersContext';
import Home from '../pages/index';

import styles from '../styles/globals.scss'

function MyApp({ Component, pageProps }) {
  return (
    <CharactersContextProvider>
      <div className={styles.wrapper}>
        <main>
          <Header />
          <Home />                
        </main>
      </div>
    </CharactersContextProvider>
  )
}

export default MyApp
