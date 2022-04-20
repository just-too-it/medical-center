import { IPatientCard } from "../components/PatientCard/PatientCard.type"
import info from '../assets/icons/patient_info.svg'
import add from '../assets/icons/patient_add.svg'
import analysis from '../assets/icons/patient_analysis.svg'
import history from '../assets/icons/patient_history.svg'

/* export const patientCards: IPatientCard[] = [
    {
        title: 'Информация о пациенте',
        list: ['Ваши личные данные', 'Рекомендации врачей', 'История болезней'],
        icon: info
    },
    {
        title: 'Добавить  информацию',
        description: 'Добавляйте в свою электронную медицинскую карту новые данные',
        icon: add
    },
    {
        title: 'Результаты анализов',
        description: 'Вы можете узнать здесь результаты своих анализов',
        icon: analysis
    },
    {
        title: 'История приемов',
        description: 'Вся информация о полученных услугах за все время хранится здесь',
        icon: history
    },
] */
export const patientCards: IPatientCard[] = [
    {
        title: 'Информация о пациенте',
        list: ['Ваши личные данные', 'Рекомендации врачей', 'История болезней'],
        iconName: 'info'
    },
    {
        title: 'Добавить  информацию',
        description: 'Добавляйте в свою электронную медицинскую карту новые данные',
        iconName: 'add'
    },
    {
        title: 'Результаты анализов',
        description: 'Вы можете узнать здесь результаты своих анализов',
        iconName: 'analysis'
    },
    {
        title: 'История приемов',
        description: 'Вся информация о полученных услугах за все время хранится здесь',
        iconName: 'history'
    },
]