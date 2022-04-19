import React, { FC } from 'react';

import { IUser } from '../User/User.type';
import { Header } from './Header';
import { Nav } from './Nav';
import { nav } from '../../core/nav';

export const ProfileLayout: FC<{ user: IUser, children:React.ReactElement }> = (props) => {

  return (
    <>
        <Header user={props.user}/>
        <Nav items={nav}/>
      <main>
          {props.children}
      </main>
    </>
  );
};
