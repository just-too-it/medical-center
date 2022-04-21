import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { AppointmentList } from '../../components/AppointmentList';
import { ProfileLayout } from '../../components/ProfileLayout';
import { mockUser, mockAppointmentCards } from '../../core/mock/mock';
import styles from '../styles/Home.module.scss';
import { nav } from '../../core/nav';
import { PatientCard } from '../../components/PatientCard';
import { patientCards } from '../../core/patientCards';
import { PatientCards } from '../../components/PatientCards';
import { AppointmentListView } from '../../components/AppointmentList/AppointmentListView';
import { Breadcrumbs } from '../../components/Breadcrumbs';
import { IBreadcrumbs } from '../../components/Breadcrumbs/Breadcrumbs.type';
import { PagesLinks } from '../../core/constants/pagesLinks.constant';

const Records: NextPage = () => {
  const btnBack: IBreadcrumbs = {
    title: 'Мои записи',
    link: PagesLinks.PROFILE
  }

  return (
    <>
      <ProfileLayout user={mockUser} navigation={nav}>
        <div className="records">
          <div className="records__breadcrumbs">
            <Breadcrumbs item={ btnBack }/>
          </div>
          <div className="records__appointment">
            <AppointmentList appointmentCards={mockAppointmentCards} view={AppointmentListView.VERTICAL}/>
          </div>
          <div className="records__calendar">
          </div>
        </div>
      </ProfileLayout>
    </>
  );
};

export default Records;