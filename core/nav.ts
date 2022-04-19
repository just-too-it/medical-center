import { INavItem } from "../components/ProfileLayout/Nav/NavItem.type";

export const nav: INavItem[] = [
    {
        id: 1,
        title: 'Профиль',
        iconName: 'heart',
        link: '/profile'
    },
    {
        id: 2,
        title: 'Врачи и клиники',
        iconName: 'doctors',
        link: '/mock-url'
    },
    {
        id: 3,
        title: 'Сообщения',
        iconName: 'message',
        link: '/mock-url'
    },
    {
        id: 4,
        title: 'Тестирование',
        iconName: 'test',
        link: '/mock-url'
    },
    {
        id: 5,
        title: 'Полезно знать',
        iconName: 'useful',
        link: '/mock-url'
    },
    {
        id: 6,
        title: 'Помощь',
        iconName: 'help',
        link: '/mock-url'
    },
]