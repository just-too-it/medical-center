import React, { FC } from 'react';
import { AppIcon } from '../UI/AppIcon';

import { IUser } from '../User/User.type';

export const ProfileLayout: FC<{ user: IUser, children:React.ReactElement }> = (props) => {
  const { name, image } = props.user;

  return (
    <>
      <header className="header">
        <h1 className="header__title">Мой профиль</h1>
        <ul className="header__list">
          <li className="header__item">
            <AppIcon type={'button'} name="search" iconOnClick={() => {}} />
          </li>
          <li className="header__item">
            <AppIcon type={'button'} name="bell" iconOnClick={() => {}} />
          </li>
          <li className="header__item">
            <AppIcon type={'button'} name="eye" iconOnClick={() => {}} />
          </li>
        </ul>
        <div className="header__user">
          <div className="header__avatar" style={{ backgroundImage: `url(${image.src})` }}></div>
        </div>
        <button type="button" className="header__open" />
      </header>
      <main>
          {props.children}
      </main>
    </>
  );
};
