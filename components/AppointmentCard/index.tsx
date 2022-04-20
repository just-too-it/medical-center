import React, {FC} from 'react';
import { AppButton } from '../UI/AppButton';
import { IButton } from '../UI/AppButton/AppButton.type';
import { IAppointmentCard } from './AppointmentCard.type';

export const AppointmentCard:FC<{ appointmentCard: IAppointmentCard }> = (props)=>{
    const { dateFull, clinic, doctor } = props.appointmentCard;
    const btnCancel: IButton = {
        type: 'button',
        text: 'Отменить',
        btnOnClick: ()=>{}
    }

    return(
        <article className="appointment-card">
            <div className="appointment-card__info">
                <span>{dateFull.day} {dateFull.date} | {dateFull.time}</span>
                <div>{clinic.name},</div>
                <div>{clinic.address}</div>
                <div className="appointment-card__doctor">
                    <div className="appointment-card__image" style={{ backgroundImage: `url(${doctor.image.src})` }}></div>
                    <div>
                        <div className="appointment-card__name">{doctor.name}</div>
                        <div className="appointment-card__post">{doctor.post}</div>
                    </div>
                </div>
            </div>
            <div className="appointment-card__control">
                <AppButton btn={btnCancel}/>
            </div>
        </article>
    )
}