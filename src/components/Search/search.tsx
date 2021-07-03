import Head from 'next/head';
import React, { useState, useEffect } from 'react';

import style from './Home.module.scss';

export default function SearchPage(props) {
    const [searchTerm, setSearchTerm] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    
    const [allCharacters, setAllCharacters] = useState([]);

    const handleChange = event => {
        setSearchTerm(event.target.value);
     };

    useEffect(() => {
        const results = allCharacters.filter(person =>
        person.toLowerCase().includes(searchTerm.toLowerCase())
    );
        setSearchResults(results);
    }, [searchTerm]);

    return(      
        <div className={style.input}>
            <Head>
                <title> {allCharacters.title} | RMCharList </title>
            </Head>
                <p>Procure por um Personagem!</p>
                <input 
                    type="text"
                    placeholder="Search"
                    onChange={handleChange}
                    id="searchchar"
                />
                <button 
                    type="button"
                    id="searchchar"
                >
                    Buscar
                </button>
                <ul>
                    {allCharacters.map(item => (
                    <a href="characters/{characters.id}"><li>{item}</li></a>
                ))}
                </ul>
        </div>        
    )
}