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

export default function Home(characters: Homeprops) {
    return (
    <div className={styles.homepage}>
      <Head>
        <title> Home | RMCharList </title>
      </Head>

      <section className={styles.mainCharacters}>
        <h2>Selecione um Personagem!</h2>
      </section>
      
      <ul>
              
      </ul>
        
    </div>   
  )
}