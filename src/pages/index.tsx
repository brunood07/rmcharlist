import Head from 'next/head';
import Link from 'next/link';
import styles from './Home.module.scss';

type Characters = {
  id: string;
  title: string;
  description: string;
  image: string;
}

type Homeprops = {
  
}

export default function Home(character: Homeprops) {
    return (
    <div className={styles.homepage}>
      <Head>
        <title> Home | RMCharList </title>
      </Head>

      <section className={styles.mainCharacters}>
        <h2>Selecione um Personagem!</h2>
      </section>
      
      <ul>
      
          <a href="https://localhost:3333/characters/beth-smith"><img src="bethsmith.png" alt="beth-smith" className={styles.characters}/></a>
        
          <a href="https://localhost:3333/characters/jerry-smith"><img src="jerrysmith.png" alt="jerry-smith" className={styles.characters}/></a>
      
          <a href="https://localhost:3333/characters/morty-smith"><img src="mortysmith.png" alt="morty-smith" className={styles.characters}/></a>
      
          <a href="https://localhost:3333/characters/summer-smith"><img src="summersmith.png" alt="summer-smith" className={styles.characters}/></a>
      
          <a href="https://localhost:3333/characters/rick-sanchez"><img src="ricksanchez.png" alt="rick-sanchez" className={styles.characters}/></a>
      
      </ul>
        
    </div>   
  )
}