import React, { FC } from 'react';
import { PatientCard } from '../PatientCard';
import { IPatientCard } from '../PatientCard/PatientCard.type';

export const PatientCards: FC<{ cards: IPatientCard[] }> = (props) => {
  return (
    <section className="patient-cards">
      <h2 className="patient-cards__title">Электронная карта</h2>
      <div className="patient-cards__content">
        {props.cards.map((card) => (
          <div key={card.title}>
            <PatientCard card={card} />
          </div>
        ))}
      </div>
    </section>
  );
};
