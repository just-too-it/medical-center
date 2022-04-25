import type { NextPage } from 'next';
import { PagesLinks } from '../core/constants/pagesLinks.constant';
import Link from 'next/link';

const Home: NextPage = () => {
  return (
    <div className="home">
      <h1>Выполнение тестового задания по Frontend</h1>
      <p>Задание: реализовать веб-интерфейс управления записями на прием к врачу.</p>
      <p>Реализованы экраны:</p>
      <ul>
        <li>
          <Link href={PagesLinks.PROFILE}>
            <a>личный кабинет список учреждений и поиск врачей,</a>
          </Link>
        </li>
        <li>
          <Link href={PagesLinks.RECORDS}>
            <a>лк записи на прием</a>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Home;
