import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';

import { useCharacters } from '../../contexts/CharactersContext';
import { useRouter } from 'next/router';
import { api } from '../../services/api';
import { GetStaticPaths, GetStaticProps } from 'next';

import styles from './character.module.scss';

type Character = {
    id: string;
    title: string;
    description: string;
    image: string;
}

type CharacterProps = {
    chars: Character[];
    Characters: Character[];    
}

export default function Character( { chars }: CharacterProps) {
    const { characters } = useCharacters();
    const router = useRouter()
    return (
        <div className={styles.characters}>
            <Head>
                <title>{characters.title} | RMCharList</title>
            </Head>
            <div className={styles.imageContainer}>
                <Link href="/">
                    <img src="/arrow-left.svg" alt="Voltar" />
                </Link>
                    <Image 
                        width={700}
                        height={160}
                        src={characters.image}
                        objectFit="cover"
                    />
            </div>

            <header>
                <h1>{characters.title}</h1>
            </header>

            <div 
                className={styles.description}
                dangerouslySetInnerHTML={{ __html: characters.description }}
            />
        </div>
    )
}

export const getStaticPaths: GetStaticPaths = async () => {
    const { data } = await api.get('/characters', {
        params: {
            _limit: 5,
            _sort: 'id',
            _order: 'desc'
        }
    })

    const paths = data.map((characters)=>({
        params: {
            slug: characters.id
        }
    }))

    return {
        paths,
        fallback: 'blocking'
    }
}

export const getStaticProps: GetStaticProps = async (context)=> {
    const { slug } = context.params

    const { data } = await api.get(`/characters/${slug}`)

    const {
        ...rest 
    } = data;
    const characters = {
        ...rest
    }

    return {
        props: {
            characters
        },
        revalidate: 60 * 60 * 24 * 360 // 360 dias
    }
}