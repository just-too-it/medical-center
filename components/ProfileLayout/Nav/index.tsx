import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { FC } from 'react';
import { INavItem } from './NavItem.type';
import logoAppvelox from '../../../assets/img/logoAppvelox.png';
import { AppButton } from '../../UI/AppButton';
import { IButton } from '../../UI/AppButton/AppButton.type';

export const Nav: FC<{ items: INavItem[] }> = (props) => {
  const route = useRouter();

  const btnRequest: IButton = {
      text: 'Подать заявку',
      type: 'button',
      btnOnClick: ()=>{},
      style: {marginLeft: "20px"}
  }

  return (
    <nav className="nav">
      <ul className="nav__list">
        {props.items.map((item) => (
          <li
            key={item.id}
            className={
              item.link === route.pathname
                ? `nav__item nav__item_active ${item.iconName}`
                : `nav__item ${item.iconName}`
            }
          >
            <Link href={item.link}>
              <a>{item.title}</a>
            </Link>
          </li>
        ))}
      </ul>
      <AppButton btn={btnRequest} />
      <div className="nav__logo">
        <Link href={'/mock-url'}>
          <a>
            <Image src={logoAppvelox} width="113px" height="20px" alt="Appvelox" />
          </a>
        </Link>
      </div>
    </nav>
  );
};
