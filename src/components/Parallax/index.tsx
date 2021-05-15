import React, { useEffect, useState } from 'react';

import s from './Parallax.module.scss';

import SmallPokeBallPng from './assets/PokeBall1.png';
import CloudPng from './assets/Cloud1.png';
import PokeBallPng from './assets/Pokeball2.png';
import CloudBigPng from './assets/Cloud2.png';
import PikachuPng from './assets/Pikachu.png';

const Parallax = () => {
  const [screenX, setScreenX] = useState(0);
  const [screenY, setScreenY] = useState(0);
  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setScreenX(event.screenX);
      setScreenY(event.screenY);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [screenX, screenY]);
  return (
    <div className={s.root}>
      <div
        className={s.smallPokeBall}
        style={{
          transform: `translate(${screenY * 0.1}px, ${screenX * 0.1}px)`,
        }}>
        <img src={SmallPokeBallPng} alt="Small PokeBall" />
      </div>
      <div
        className={s.cloud}
        style={{
          transform: `translate(${screenY * 0.09}px, ${screenX * 0.09}px)`,
        }}>
        <img src={CloudPng} alt="Cloud PokeBall" />
      </div>
      <div
        className={s.cloudBig}
        style={{
          transform: `translate(${screenY * 0.08}px, ${screenX * 0.08}px)`,
        }}>
        <img src={CloudBigPng} alt="Cloud Big PokeBall" />
      </div>
      <div
        className={s.pokeBall}
        style={{
          transform: `translate(${screenY * 0.07}px, ${screenX * 0.07}px)`,
        }}>
        <img src={PokeBallPng} alt="Big PokeBall" />
      </div>
      <div
        className={s.pikachu}
        style={{
          transform: `translate(${screenY * 0.03}px, ${screenX * 0.03}px)`,
        }}>
        <img src={PikachuPng} alt="Cloud PokeBall" />
      </div>
    </div>
  );
};

export default Parallax;
