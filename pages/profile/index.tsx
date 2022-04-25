import type { NextPage } from 'next';
import Head from 'next/head';
import { AppointmentList } from '../../components/AppointmentList';
import { ProfileLayout } from '../../components/ProfileLayout';
import { nav } from '../../core/nav';
import { patientCards } from '../../core/patientCards';
import { PatientCards } from '../../components/PatientCards';
import { AppointmentListView } from '../../components/AppointmentList/AppointmentListView';
import { useSelector } from 'react-redux';

const Profile: NextPage = () => {
  const user = useSelector((state) => state.profile.user);

  return (
    <>
      <Head>
        <title>Профиль пользователя</title>
        <meta
          name="description"
          content="Профиль пользователя - записи на прием, результаты анализов и многое другое."
        />
      </Head>
      <ProfileLayout user={user} navigation={nav}>
        <div className="profile">
          <div className="profile__appointment">
            <AppointmentList view={AppointmentListView.HORIZONTAL} />
          </div>
          <div className="profile__patient">
            <PatientCards cards={patientCards} />
          </div>
        </div>
      </ProfileLayout>
    </>
  );
};

export default Profile;
