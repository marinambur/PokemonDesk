import React, {useEffect, useMemo, useState} from 'react';
import PokemonCard from '../../components/PokemonCard';
import s from './Pokedex.module.scss';
import Heading from '../../components/Heading';
import useData from "../../hook/getData";
import {Ipokemons, PokemonsRequest} from "../../interface/pokemon";
import useDebounce from "../../hook/useDebounce";
interface IQuery {
  name?: string
  limit: number
}

const Pokedex = () => {
  const [searchValue, setSearchValue] = useState('');
  const [query, setQuery] = useState<IQuery>({
    limit: 12
  });
const debouncedValue = useDebounce(searchValue, 500);
  const {
    data,
    isLoading,
    isError
  } = useData<Ipokemons>('getPokemons', query, [debouncedValue]);
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
    setQuery((state) =>({
      ...state,
      name: e.target.value,
    }))
  }

  if (isError) {
    return <div>
      ERR....
    </div>
  }
  return (
    <div>
      <div className={s.root}>
        <Heading priority={3}>{!isLoading && data && data.total} pokemons for you to choose your favorite</Heading>
        <div>
          <input type={"text"} value={searchValue} onChange={handleSearchChange}/>
        </div>
        <div className={s.grid}>
          {!isLoading && data && data.pokemons.map((item: PokemonsRequest) => (
            <PokemonCard key={item.id} img={item.img} name={item.name_clean} stats={item.stats} abilities={item.abilities} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pokedex;
