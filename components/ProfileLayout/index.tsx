import React, { FC } from 'react';
import { IUser } from '../User/User.type';
import { Header } from './Header';
import { Nav } from './Nav';
import { INavItem } from './Nav/NavItem.type';

export const ProfileLayout: FC<{ user: IUser; navigation: INavItem[]; children: React.ReactNode }> = (props) => {
  return (
    <>
      <div className="container">
        <Header user={props.user} />
        <Nav items={props.navigation} />
        <main>{props.children}</main>
      </div>
    </>
  );
};
