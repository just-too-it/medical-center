import React, { FC, ReactPropTypes } from 'react';

import { IUser } from '../User/User.type';
import { Header } from './Header';
import { Nav } from './Nav';
import { nav } from '../../core/nav';
import { AppointmentList } from '../AppointmentList';
import { mockAppointmentCard, mockAppointmentCards } from '../../core/mock/mock';
import { IAppointmentCard } from '../AppointmentCard/AppointmentCard.type';
import { INavItem } from './Nav/NavItem.type';
import { AppointmentCard } from '../AppointmentCard';

export const ProfileLayout: FC<{ user: IUser, navigation: INavItem[], children:React.ReactNode }> = (props) => {

  return (
    <>
        <div className="container">
          <Header user={props.user}/>
          <Nav items={props.navigation}/>
          <main>
              {props.children}
          </main>
        </div>
        
    </>
  );
};
