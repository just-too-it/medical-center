import React, { FC } from 'react';
import { IPatientCard } from './PatientCard.type';

export const PatientCard: FC<{ card: IPatientCard }> = (props) => {
  const { title, list, description, iconName } = props.card;
  return (
    <article className="patient-card">
      <div className="patient-card__image">
        <div className={`patient-card__icon ${iconName}`}></div>
      </div>
      <div className="patient-card__content">
        <div className="patient-card__title">{title}</div>
        {list && (
          <ul className="patient-card__list">
            {list.map((item) => <li key={item}>item</li>)}
          </ul>
        )}
        {description && <div className="patient-card__description">{description}</div>}
      </div>
    </article>
  );
};
