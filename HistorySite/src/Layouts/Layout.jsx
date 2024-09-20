import {Header} from '../components/Header/Header';
import { BackToTop } from '../components/Ekstra/BackToTop';
import { Navbar } from '../components/Navbar/Navbar';
import { Outlet } from 'react-router-dom';

export const Layout = () => {
  return (
    <>
      <Header  />
      <Navbar/>
    <main>
      <BackToTop/>
      <Outlet/>
    </main>
    </>
  );
};
