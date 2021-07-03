import { GetStaticPaths, GetStaticProps } from 'next';
import { api } from '../../services/api';
import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function Characters(props) {
    const [allCharacters, setAllCharacters] = useState([]);
 
    useEffect(() => {
        (
            async () => {
                const response = await fetch('http://localhost:3333/characters');

                const content = await response.json();

                setAllCharacters(content);
            }
        )()
    }, []);

    return (
       <div>
           <Head>
               <title>{props.title}</title>
           </Head>
           <div>
               <Link href="/">
                    <button type="button">
                        <img src="/arrow-left.svg" alt="Voltar" />
                    </button>
               </Link>
           </div>
       </div>
)};

export const getStaticPaths: GetStaticPaths = async () => {

    const {data} = await api.get('http://localhost:3333/characters', {
        params: {
          _limit: 2,
          _order: 'desc'
        }
      })
    
    const paths = data.map(characters=>({
        params: {
          slug: characters.id
        }
    }))
    
    return {
        paths,
        fallback: 'blocking',
    }
}

export const getStaticProps: GetStaticProps = async (context)=>{
    const { slug } = context.params;

    const { data } = await api.get(`/characters/${slug}`)
  
    const {
        image,
      ...rest
  
    } = data;
    const characters = {
      ...rest,
    }
  
    return {
      props: {
        characters
      },
      revalidate: 60 * 60 * 24 * 360 // 360 dias
    }
  }