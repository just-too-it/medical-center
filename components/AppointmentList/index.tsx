import { time } from 'console';
import React, { FC, useEffect, useState } from 'react';
import { AppButton } from '../UI/AppButton';
import { IButton } from '../UI/AppButton/AppButton.type';
import { IAppointmentCard } from '../AppointmentCard/AppointmentCard.type';
import { AppointmentCard } from '../AppointmentCard';
import Link from 'next/link';
import { PagesLinks } from '../../core/constants/pagesLinks.constant';

export const AppointmentList: FC<{ appointmentCards: IAppointmentCard[] }> = (props) => {
  const [cards, setCards] = useState(props.appointmentCards);
  const [countRest, setCountRest] = useState(0);

  useEffect(() => {
    setCountRest(cards.slice(2).length);
    setCards(cards.slice(0, 2));
  }, []);

  return (
    <section className="appointment-list">
      <h2 className="appointment-list__title">Записи на прием</h2>
      <div className="appointment-list__content">
        <ul className="appointment-list__list">
          {cards.map((card) => (
            <li key={card.id} className="appointment-list__item">
              <AppointmentCard appointmentCard={card} />
            </li>
          ))}
        </ul>
        <div className="appointment-list__countRest">
          {countRest > 0 && <div>Еще {countRest} записи</div>}
          <Link href={PagesLinks.RECORDS}><a>Подробнее</a></Link>
        </div>
      </div>
    </section>
  );
};
