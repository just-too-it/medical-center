import { time } from 'console';
import React, {FC} from 'react';
import { AppButton } from '../UI/AppButton';
import { IButton } from '../UI/AppButton/AppButton.type';
import { IAppointmentCard } from '../AppointmentCard/AppointmentCard.type';
import { AppointmentCard } from '../AppointmentCard';

export const AppointmentList:FC<{ appointmentCards: IAppointmentCard[] }> = (props)=>{


    return(
        <section>
            <h2>Записи на прием</h2>
            <ul>
                {props.appointmentCards.map(card=>(
                    <li key={card.id}><AppointmentCard appointmentCard={card}/></li>
                ))}
                </ul>
        </section>
    )
}