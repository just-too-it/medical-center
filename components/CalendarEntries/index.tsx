import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import 'react-calendar/dist/Calendar.css';
import { isSameDay } from 'date-fns';
import { mockAppointmentCards } from '../../core/mock/mock';

const Calendar = dynamic(() => import('react-calendar'), { ssr: false });

const datesToAddContentTo = [
  new Date('2020-06-15'),
  new Date('2020-06-15'),
  new Date('2020-07-02'),
  new Date(),
  new Date(),
];

export const CalendarEntries = () => {
  const [value, onChange] = useState(new Date());
  const [appointmentCards, setAppointmentCards] = useState(mockAppointmentCards);

  return (
    <div>
      <Calendar
        onChange={onChange}
        value={value}
        className="calendar-entries"
        tileContent={({ date, view }) => {
          {
            let numberOfEntries = 0;
            if (view === 'month') {
              appointmentCards.forEach((card) => {
                if (isSameDay(card.date, date)) {
                  numberOfEntries++;
                }
              });

              return numberOfEntries === 0 ? null : <div className="marker">{numberOfEntries}</div>;
            }
          }
        }}
        activeStartDate={new Date(2020, 5, 1)}
        /* tileClassName={name} */
        onClickDay={(value) => {
          /* console.log('New date is: ', value) */
          const newArray = appointmentCards.filter((card) => isSameDay(card.date, value));
        console.log(newArray)
        setAppointmentCards(newArray)
        
        }}
      />
    </div>
  );
};

/* if (datesToAddContentTo.find(dDate => isSameDay(dDate, date))) {
  /* console.log(format(new Date("2022-04-01"), "'Today is a' eeee")) */
/*   tileClass+=' newrtr';
  setName(' newrtr')
  content++
  return <div className='newrtr'>{content}</div>;
}  */

/* 
import { differenceInCalendarDays, format } from 'date-fns'; 

export const isSameDay = (a, b) => {
  return differenceInCalendarDays(a, b) === 0;
} */

/* function tileContent({ date, view }) {
  let content = 0;
  if (view === 'month') {
    datesToAddContentTo.forEach((dayEntry) => {
      if (isSameDay(dayEntry, date)) {
        content++;
      }
    });

    return content === 0 ? null : <div className='marker'>{content}</div>;
  }
} */


/* function tileContent({ date, view }) {
  let content = 0;
  if (view === 'month') {
    datesToAddContentTo.forEach((dayEntry) => {
      if (isSameDay(dayEntry, date)) {
        content++;
      }
    });

    return content === 0 ? null : <div className="marker">{content}</div>;
  }
} */

/* 
appointmentCards.forEach((card) => {
  if (isSameDay(card.date, value)) {
    console.log(value);
  }
}); */