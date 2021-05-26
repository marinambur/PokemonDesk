import React from 'react';
export interface PokemonProps {
    id: string|number
}
const Pokemon: React.FC<PokemonProps> = ({id}) => {
    return (
        <div>
            This is pokemon equal {id}
        </div>
    );
};

export default Pokemon;

// import React from 'react';
// import Heading from '../../components/Heading';
//
// import s from './Pokemon.module.scss';
// export interface Stats {
//     hp: number;
//     attack: number;
//     defense: number;
//     "special-attack": number;
//     "special-defense": number;
//     speed: number;
// }
//
// export interface PokemonProps {
//     name_clean?: string;
//     abilities: string[];
//     stats: Stats;
//     types?: string[];
//     img?: string;
//     name?: string;
//     base_experience?: number;
//     height?: number;
//     id?: number;
//     is_default?: boolean;
//     order?: number;
//     weight?: number;
// }
// const Pokemon: React.FC<PokemonProps> = ({ id, name, children, abilities, stats, img }) => {
//     return (
//         <div className={s.root}>
//             <div className={s.infoWrap}>
//                 <Heading priority={4}>{id}</Heading>
//                 <div className={s.statWrap}>
//                     {/*<div className={s.statItem}>*/}
//                     {/*    <div className={s.statValue}>{stats.attack}</div>*/}
//                     {/*    Attack*/}
//                     {/*</div>*/}
//                     {/*<div className={s.statItem}>*/}
//                     {/*    <div className={s.statValue}>{stats.defense}</div>*/}
//                     {/*    Defense*/}
//                     {/*</div>*/}
//                 </div>
//                 {/*<div className={s.labelWrap}>*/}
//                 {/*    {abilities.map((ability) => (*/}
//                 {/*        <span className={s.label}>{ability}</span>*/}
//                 {/*    ))}*/}
//                 {/*</div>*/}
//             </div>
//             <div className={s.pictureWrap}>
//                 <img src={img} alt={name} />
//             </div>
//         </div>
//     );
// };
//
// export default Pokemon;
