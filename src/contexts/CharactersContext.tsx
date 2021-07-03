import { createContext, useState, ReactNode, useContext } from 'react';
import Character from '../pages/characters/[slug]';

type Characters = {
    id: string;
    title: string;
    description: string;
    image: string;
};

type CharactersContextData = {
    charactersList: Characters[];
    characters: Characters[];
}

export const CharactersContext = createContext({} as CharactersContextData);

type CharactersContextProviderProps = {
    children: ReactNode;
};

export function CharactersContextProvider({ children }: CharactersContextProviderProps) {
    const [charactersList, setCharactersList] = useState([]);
      
    function charsList(list: Characters[], index: string) {
        setCharactersList([Character])        
    }

    return (
        <CharactersContext.Provider
        value={{ 
            charactersList,
            setCharactersList
            
        }}>
                    {children}
        </CharactersContext.Provider>
    )
};

export const useCharacters = () => {
    return useContext(CharactersContext)
};