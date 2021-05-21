import React from 'react';
import Heading from '../Heading';

import s from './PokemonCard.module.scss';
// interface PokemonCardProps {
//     name?: string
//     abilities?: object
//     img?: string
//     stats?: {
//         hp: number,
//         attack: number,
//         defense: number,
//         "special-attack": number,
//         "special-defense": 20,
//         speed: 45
//     }
//
//
// }
export interface Stats {
  hp: number;
  attack: number;
  defense: number;
  special_attack: number;
  special_defense: number;
  speed: number;
}

export interface PokemonCardProps {
  name_clean?: string;
  abilities: string[];
  stats: Stats;
  types?: string[];
  img?: string;
  name?: string;
  base_experience?: number;
  height?: number;
  id?: number;
  is_default?: boolean;
  order?: number;
  weight?: number;
}
const PokemonCard: React.FC<PokemonCardProps> = ({ name, children, abilities, stats, img }) => {
  return (
    <div className={s.root}>
      <div className={s.infoWrap}>
        <Heading priority={4}>{name}</Heading>
        <div className={s.statWrap}>
          <div className={s.statItem}>
            <div className={s.statValue}>{stats.attack}</div>
            Attack
          </div>
          <div className={s.statItem}>
            <div className={s.statValue}>{stats.defense}</div>
            Defense
          </div>
        </div>
        <div className={s.labelWrap}>
          {abilities.map((ability) => (
            <span className={s.label}>{ability}</span>
          ))}
        </div>
      </div>
      <div className={s.pictureWrap}>
        <img src={img} alt={name} />
      </div>
    </div>
  );
};

export default PokemonCard;
