import { StaticImageData } from "next/image"

export interface IAppointmentCard {
    id: number | string,
    date: Date,
    clinic: {
        name: string,
        address: string
    },
    doctor: {
        image: StaticImageData | string,
        name: string,
        post: string
    }
}