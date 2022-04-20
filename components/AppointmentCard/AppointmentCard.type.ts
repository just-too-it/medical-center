export interface IAppointmentCard {
    id: number | string,
    dateFull: {
        day: string,
        date: Date | any,
        time: any
    },
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