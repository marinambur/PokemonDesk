import React, {useEffect, useState} from 'react';
import PokemonCard from '../../components/PokemonCard';
import s from './Pokedex.module.scss';
import Heading from '../../components/Heading';
import config from "../../config";
import req from "../../utils/request";

export interface Stats {
  hp: number;
  attack: number;
  defense: number;
  special_attack: number;
  special_defense: number;
  speed: number;
}

export interface PokemonCard {
  name_clean?: string;
  abilities?: string[];
  stats?: Stats;
  types?: string[];
  img?: string;
  name?: string;
  base_experience?: number;
  height?: number;
  id?: number;
  is_default?: boolean;
  order?: number;
  weight?: number;

  map(
    element: ({
      img,
      name_clean,
      stats,
      abilities,
      types,
      id,
    }: {
      img: string;
      name_clean: string;
      stats: Stats;
      abilities: any;
      id: any;
      types: any;
      name: any;
      base_experience: any;
      height: number;
      is_default: boolean;
      order: number;
      weight: number;
    }) => JSX.Element,
  ): any;
}
const usePokemons = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  useEffect(()=> {
    const getPokemons = async() => {
      setIsLoading(true);
      const url = `${config.client.server.protocol}://${config.client.server.host}${config.client.endpoint.getPokemons.uri.pathname}`;
      console.log('URL', url)
      try {
        const result = await req('getPokemons');
        setData(result);
      } catch (e) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    }
    getPokemons();
  }, []);
  return {
    data,
    isLoading,
    isError
  }
}
const Pokedex = () => {
  const {
    data,
    isLoading,
    isError
  } = usePokemons();
  if (isLoading) {
    return <div>
      LOADING....
    </div>
  }
  if (isError) {
    return <div>
      ERR....
    </div>
  }
  return (
    <div>
      <div className={s.root}>
        <Heading priority={3}>{data.total} pokemons for you to choose your favorite</Heading>
        <div className={s.grid}>
          {data.pokemons.map(item => (
            <PokemonCard key={item.id} img={item.img} name={item.name_clean} stats={item.stats} abilities={item.abilities} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pokedex;
