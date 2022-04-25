import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import 'react-calendar/dist/Calendar.css';
import { isSameDay } from 'date-fns';
import { useDispatch, useSelector } from 'react-redux';
import { MONTHS } from '../../core/constants/date.constant';
import { IAppointmentCard } from '../AppointmentCard/AppointmentCard.type';

const Calendar = dynamic(() => import('react-calendar'), { ssr: false });

export const CalendarEntries = () => {
  const [value, onChange] = useState(new Date());
  const allCards = useSelector((state) => state.profile.cards as IAppointmentCard[]);
  const dispatch = useDispatch();

  return (
    <div>
      <Calendar
        onChange={onChange}
        value={value}
        className="calendar-entries"
        navigationLabel={({ date }) => `${MONTHS[date.getMonth()]}, ${date.getFullYear()}`}
        tileContent={({ date, view }) => {
          {
            let numberOfEntries = 0;
            if (view === 'month') {
              allCards.forEach((card) => {
                if (isSameDay(card.date, date)) {
                  numberOfEntries++;
                }
              });
              return numberOfEntries === 0 ? null : <div className="marker">{numberOfEntries}</div>;
            }
          }
        }}
        defaultActiveStartDate={new Date(2020, 5, 1)}
        onClickDay={(value) => {
          const visibleCards = allCards.filter((card) => isSameDay(card.date, value));
          dispatch({ type: 'VISIBLE_CARDS', payload: visibleCards });
        }}
      />
    </div>
  );
};
