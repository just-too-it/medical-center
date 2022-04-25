import type { NextPage } from 'next';
import Head from 'next/head';
import { AppointmentList } from '../../components/AppointmentList';
import { ProfileLayout } from '../../components/ProfileLayout';
import { nav } from '../../core/nav';
import { AppointmentListView } from '../../components/AppointmentList/AppointmentListView';
import { Breadcrumbs } from '../../components/Breadcrumbs';
import { IBreadcrumbs } from '../../components/Breadcrumbs/Breadcrumbs.type';
import { PagesLinks } from '../../core/constants/pagesLinks.constant';
import { CalendarEntries } from '../../components/CalendarEntries';
import { useSelector } from 'react-redux';

const Records: NextPage = () => {
  const user = useSelector((state) => state.profile.user);

  const btnBack: IBreadcrumbs = {
    title: 'Мои записи',
    link: PagesLinks.PROFILE,
  };

  return (
    <>
      <Head>
        <title>Записи пациента в календаре</title>
        <meta name="description" content="Календарь с записями пациента на прием к врачу." />
      </Head>
      <ProfileLayout user={user} navigation={nav}>
        <div className="records">
          <div className="records__breadcrumbs">
            <Breadcrumbs item={btnBack} />
          </div>
          <div className="records__content">
            <div className="records__appointment">
              <AppointmentList view={AppointmentListView.VERTICAL} />
            </div>
            <div className="records__calendar">
              <CalendarEntries />
            </div>
          </div>
        </div>
      </ProfileLayout>
    </>
  );
};

export default Records;
