import { Header } from '../components/Header/index';
import SearchPage from '../components/Search/search'
import { CharactersContextProvider } from '../contexts/CharactersContext';

import styles from '../styles/globals.scss'

function MyApp({ Component, pageProps }) {

  return (
    <CharactersContextProvider>
      <div className={styles.wrapper}>
        <main>
          <Header />
          <SearchPage />
                
        </main>
      </div>
    </CharactersContextProvider>
  )
}

export default MyApp
