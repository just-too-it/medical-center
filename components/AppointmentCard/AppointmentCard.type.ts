export interface IAppointmentCard {
    id: number | string,
    date: Date,
    clinic: {
        name: string,
        address: string
    },
    doctor: {
        image: string | any,
        name: string,
        post: string
    }
}