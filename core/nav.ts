import { INavItem } from "../components/ProfileLayout/Nav/NavItem.type";
import { PagesLinks } from "./constants/pagesLinks.constant";

export const nav: INavItem[] = [
    {
        id: 1,
        title: 'Профиль',
        iconName: 'heart',
        link: PagesLinks.PROFILE
    },
    {
        id: 2,
        title: 'Врачи и клиники',
        iconName: 'doctors',
        link: PagesLinks.MOCK_URL
    },
    {
        id: 3,
        title: 'Сообщения',
        iconName: 'message',
        link: PagesLinks.MOCK_URL
    },
    {
        id: 4,
        title: 'Тестирование',
        iconName: 'test',
        link: PagesLinks.MOCK_URL
    },
    {
        id: 5,
        title: 'Полезно знать',
        iconName: 'useful',
        link: PagesLinks.MOCK_URL
    },
    {
        id: 6,
        title: 'Помощь',
        iconName: 'help',
        link: PagesLinks.MOCK_URL
    },
]