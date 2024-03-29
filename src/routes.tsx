import React, {PropsWithChildren} from 'react';
import HomePage from './pages/Home';
import EmptyPage from './pages/Empty';
import Pokedex from './pages/Pokedex';
import Pokemon, {PokemonProps} from "./pages/Pokemon";
// @ts-ignore
export enum LinkEnum {
  HOME = '/',
  POKEDEX = '/pokedex',
  LEGENDARIES = '/legendaries',
  DOCUMENTATION = '/documentation',
  POKEMON = '/pokedex/:id',
}
interface IGeneralMenu {
  title: string;
  link: LinkEnum;
  component: (props: PropsWithChildren<any>) => JSX.Element;
}
export const GENERAL_MENU: IGeneralMenu[] = [
  {
    title: 'Home',
    link: LinkEnum.HOME,
    component: () => <HomePage />,
  },
  {
    title: 'Pokédex',
    link: LinkEnum.POKEDEX,
    component: () => <Pokedex />,
  },
  {
    title: 'Legendaries',
    link: LinkEnum.LEGENDARIES,
    component: () => <EmptyPage title="Legendaries" />,
  },
  {
    title: 'Documentation',
    link: LinkEnum.DOCUMENTATION,
    component: () => <EmptyPage title="Documentation" />,
  },
];

const SECOND_ROUTES: IGeneralMenu[] = [{
  title: 'Pokemon',
  link: LinkEnum.POKEMON,
  component: ({id}: PokemonProps) => <Pokemon id={id}/>
}]
interface IAccMenu {
  [n: string]: (props: PropsWithChildren<any>) => JSX.Element;
}
const routes = [...GENERAL_MENU, ...SECOND_ROUTES].reduce((acc: IAccMenu, item: IGeneralMenu) => {
  acc[item.link] = item.component;
  return acc;
}, {});

export default routes;
