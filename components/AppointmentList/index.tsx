import React, { FC, useEffect, useState } from 'react';
import { IAppointmentCard } from '../AppointmentCard/AppointmentCard.type';
import { AppointmentCard } from '../AppointmentCard';
import Link from 'next/link';
import { PagesLinks } from '../../core/constants/pagesLinks.constant';
import { AppointmentListView } from './AppointmentListView';
import { useSelector, useDispatch } from 'react-redux';
import { changingWords } from '../../core/utils/changingWords';

export const AppointmentList: FC<{ view: string }> = (props) => {
  const { view } = props;
  const visibleCards = useSelector((state) => state.profile.visibleCards);
  const allCards = useSelector((state) => state.profile.cards as IAppointmentCard[]);
  const [cards, setCards] = useState(allCards);
  const [countRest, setCountRest] = useState(0);
  const [btnShow, setBtnShow] = useState(false);
  const dispatch = useDispatch();

  let listClassName: string;

  view === AppointmentListView.HORIZONTAL
    ? (listClassName = 'appointment-list__list appointment-list__list_gorizontal')
    : (listClassName = 'appointment-list__list appointment-list__list_vertical');

  useEffect(() => {
    if (view === AppointmentListView.HORIZONTAL) {
      setCountRest(cards.slice(2).length);
      setCards(cards.slice(0, 2));
    } else {
      setCards(allCards);
      dispatch({ type: 'VISIBLE_CARDS', payload: allCards });
    }
  }, []);

  useEffect(() => {
    if (view !== AppointmentListView.HORIZONTAL) {
      setCards(visibleCards);
      allCards.length === cards.length ? setBtnShow(false) : setBtnShow(true);
    }
  }, [visibleCards, allCards, cards]);

  return (
    <section className="appointment-list">
      {props.view === AppointmentListView.HORIZONTAL ? (
        <h2 className="appointment-list__title">Записи на прием</h2>
      ) : btnShow ? (
        <button
          className="appointment-list__button-show"
          onClick={() => dispatch({ type: 'VISIBLE_CARDS', payload: allCards })}
        >
          Показать все записи
        </button>
      ) : null}
      <div className="appointment-list__content">
        <ul className={listClassName}>
          {cards.map((card) => (
            <li key={card.id} className="appointment-list__item">
              <AppointmentCard appointmentCard={card} />
            </li>
          ))}
        </ul>
        <div className="appointment-list__countRest">
          {countRest > 0 && props.view === AppointmentListView.HORIZONTAL && <div>Еще {countRest} {changingWords(countRest, ['запись', 'записи', 'записей'])}</div>}
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
