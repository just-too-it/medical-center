import Link from 'next/link';
import React, { FC } from 'react';
import { PagesLinks } from '../../../core/constants/pagesLinks.constant';
import { AppIcon } from '../../UI/AppIcon';

import { IUser } from '../../User/User.type';

export const Header: FC<{ user: IUser }> = (props) => {
  const { image } = props.user;

  return (
    <header className="header">
      <Link href={PagesLinks.MAIN}>
        <a>
          <div className="header__logo" title="Главная страница">
            Логотип
          </div>
        </a>
      </Link>
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
  );
};
