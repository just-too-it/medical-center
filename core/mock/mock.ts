import { IAppointmentCard } from '../../components/AppointmentCard/AppointmentCard.type';
import { IUser } from '../../components/User/User.type';
import userImage from './user.jpg';
import malyshkoImage from './malyshko.png';
import harkovImage from './harkov.png';

export const mockUser: IUser = {
  id: 1,
  name: 'Name',
  image: userImage,
};

export const mockAppointmentCards: IAppointmentCard[] = [
  {
    id: 1,
    dateFull: {
      day: 'Понедельник',
      date: '15.06.20',
      time: '15:30',
    },
    clinic: {
      name: 'СПБ ГБУЗ "Городская поликлиника №25"',
      address: 'пр. Солидарности, д. 1, к. 1, лит. А',
    },
    doctor: {
      image: malyshkoImage,
      name: 'Малушко Т. Н.',
      post: 'Хирургия',
    },
  },
  {
    id: 2,
    dateFull: {
      day: 'Понедельник',
      date: '15.06.20',
      time: '18:30',
    },
    clinic: {
      name: 'СПБ ГБУЗ "Городская поликлиника №25"',
      address: 'пр. Солидарности, д. 1, к. 1, лит. А',
    },
    doctor: {
      image: harkovImage,
      name: 'Харьков В. С.',
      post: 'Терапевтическое отделение',
    },
  },
  {
    id: 3,
    dateFull: {
      day: 'Вторник',
      date: '30.06.20',
      time: '12:10',
    },
    clinic: {
      name: 'СПБ ГБУЗ "Городская поликлиника №25"',
      address: 'пр. Солидарности, д. 1, к. 1, лит. А',
    },
    doctor: {
      image: malyshkoImage,
      name: 'Малушко Т. Н.',
      post: 'Хирургия',
    },
  },
  {
    id: 4,
    dateFull: {
      day: 'Четверг',
      date: '02.07.20',
      time: '12:30',
    },
    clinic: {
      name: 'СПБ ГБУЗ "Городская поликлиника №25"',
      address: 'пр. Солидарности, д. 1, к. 1, лит. А',
    },
    doctor: {
      image: harkovImage,
      name: 'Харьков В. С.',
      post: 'Терапевтическое отделение',
    },
  },
];
