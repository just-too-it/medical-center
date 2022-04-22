import { IAppointmentCard } from "../components/AppointmentCard/AppointmentCard.type";
import { IUser } from "../components/User/User.type";
import { mockUser, mockAppointmentCards } from "../core/mock/mock";

interface IProfile {
    user: IUser;
    cards: IAppointmentCard[];
    visibleCards: IAppointmentCard[];
}

const defaultState: IProfile = {
    user: mockUser,
    cards: mockAppointmentCards,
    visibleCards: mockAppointmentCards
}

export const profileReducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'USER':
            return { ...state, user: action.payload }
        case 'CARDS':
            return { ...state, cards: action.payload }
        case 'VISIBLE_CARDS':
            return { ...state, visibleCards: action.payload }
        default:
            return state;
    }
}