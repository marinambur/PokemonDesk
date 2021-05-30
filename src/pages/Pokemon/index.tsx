import React from 'react';
import useData from "../../hook/getData";
import s from './Pokemon.module.scss';
import {Ipokemons, PokemonsRequest} from "../../interface/pokemon";
import Heading from "../../components/Heading";
export interface PokemonProps {
    id: string|number
}
const Pokemon: React.FC<PokemonsRequest> = ({id}) => {
    const {data, isLoading} = useData<PokemonsRequest>('getPokemon', {id});
    console.log(data)
    return (
        <div className={s.root}>
            <div className={s.pictureWrap}>
                <img src={`${data && data?.img}`} alt={`${data?.name}`} />
            </div>
            <div className={s.infoWrap}>
                <div className={s.nameText}>
                    <Heading priority={2} className={s.pokemonHeader}>{data && data?.name}</Heading>
                    <div className={s.pokemonParams}>
                        <Heading priority={'p'}>Generation 1</Heading>
                        <Heading priority={4} className={s.pokemonId}>{id}</Heading>
                    </div>
                </div>
                <div className={s.abilities}>
                    <div className={s.textBox}>
                        <p >Abilities</p>
                        <div className={s.features}>
                            {data && data?.abilities.map((ability) => (
                                <p>{ability}</p>
                            ))}
                        </div>
                    </div>

                </div>
                <div className={s.xpBox}>
                <div className={s.healthyPoints}>
                    <div className={s.xpTextBox}>
                        <p>Healthy Points</p>
                        <p>1 000 000</p>
                        <div className={s.green}></div>
                    </div>

                </div>
                <div className={s.experience}>
                    <div className={s.xpTextBox}>
                        <p>Experience</p>
                        <p>1 000 000</p>
                        <div className={s.yellow}></div>
                    </div>

                </div>
                </div>
                <div className={s.statWrap}>
                    <div className={s.statItem}>
                        <div className={s.statValue}>{data && data?.stats.attack}</div>
                        Attack
                    </div>
                    <div className={s.statItem}>
                        <div className={s.statValue}>{data && data?.stats.defense}</div>
                        Defense
                    </div>
                    <div className={s.statItem}>
                        <div className={s.statValue}>{data && data?.stats.attack}</div>
                        Sp. Attack
                    </div>
                    <div className={s.statItem}>
                        <div className={s.statValue}>{data && data?.stats.defense}</div>
                        Sp. Defense
                    </div>
                </div>
                <div className={s.labelWrap}>
                    {data && data?.abilities.map((ability) => (
                        <span className={s.label}>{ability}</span>
                    ))}
                </div>
            </div>

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
