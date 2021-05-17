import React from 'react';

import s from './Header.module.scss';
import { ReactComponent as PokemonLogoSvg } from './assets/Logo.svg';

interface IMenu {
  value: string;
  link: string;
  id: number;
}
const MENU: IMenu[] = [
  {
    value: 'Home',
    link: '#',
    id: 1,
  },
  {
    value: 'Pokédex',
    link: '#',
    id: 2,
  },
  {
    value: 'Legendaries',
    link: '#',
    id: 3,
  },
  {
    value: 'Documentation',
    link: '#',
    id: 4,
  },
];
const Header = () => {
  return (
    <div className={s.root}>
      <div className={s.wrap}>
        <div className={s.pokemonLogo}>
          <PokemonLogoSvg />
        </div>
        <div className={s.menuWrap}>
          {MENU.map(({ id, value, link }, index) => (
            <a key={id} href={link} className={s.menuLink}>
              {value}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
