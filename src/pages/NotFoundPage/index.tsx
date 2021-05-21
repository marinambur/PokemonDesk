import React from 'react';
import { navigate } from 'hookrouter';
import s from './NotFound.module.scss';
import TeamRocket from './assets/TeamRocket.png';
import Button from '../../components/Button';
import { LinkEnum } from '../../routes';

const NotFoundPage = () => {
  return (
    <div className={s.root}>
      <div className={s.wrap}>
        <div className={s.text}>404</div>
        <div className={s.layer}>
          <img src={TeamRocket} alt="Team Rocket" />
          <div className={s.subtitle}>
            <span>The rocket team</span> has won this time
          </div>
          <Button onClick={() => navigate(LinkEnum.HOME)} size="small" color="yellow">
            Return
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
