import { time } from 'console';
import React, { FC, useEffect, useState } from 'react';
import { AppButton } from '../UI/AppButton';
import { IButton } from '../UI/AppButton/AppButton.type';
import { IAppointmentCard } from '../AppointmentCard/AppointmentCard.type';
import { AppointmentCard } from '../AppointmentCard';
import Link from 'next/link';
import { PagesLinks } from '../../core/constants/pagesLinks.constant';
import { AppointmentListView } from './AppointmentListView';

export const AppointmentList: FC<{ appointmentCards: IAppointmentCard[]; view: string }> = (props) => {
  const { appointmentCards, view } = props;
  const [cards, setCards] = useState(appointmentCards);
  const [countRest, setCountRest] = useState(0);
  let listClassName: string;

  view === AppointmentListView.HORIZONTAL
    ? (listClassName = 'appointment-list__list appointment-list__list_gorizontal')
    : (listClassName = 'appointment-list__list appointment-list__list_vertical');

  useEffect(() => {
    if (view === AppointmentListView.HORIZONTAL) {
      setCountRest(cards.slice(2).length);
      setCards(cards.slice(0, 2));
    }
  }, []);

  return (
    <section className="appointment-list">
      {props.view === AppointmentListView.HORIZONTAL && <h2 className="appointment-list__title">Записи на прием</h2>}
      <div className="appointment-list__content">
        <ul className={listClassName}>
          {cards.map((card) => (
            <li key={card.id} className="appointment-list__item">
              <AppointmentCard appointmentCard={card} />
            </li>
          ))}
        </ul>
        <div className="appointment-list__countRest">
          {countRest > 0 && props.view === AppointmentListView.HORIZONTAL && <div>Еще {countRest} записи</div>}
          {props.view === AppointmentListView.HORIZONTAL && (
            <Link href={PagesLinks.RECORDS}>
              <a>Подробнее</a>
            </Link>
          )}
        </div>
      </div>
    </section>
  );
};
