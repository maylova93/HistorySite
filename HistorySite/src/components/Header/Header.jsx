import { InfoBox } from '../infobox/InfoBox';
import { ThisDay } from '../../components/infobox/ThisDay.jsx'; // Import ThisDay component
import { useLocation } from 'react-router-dom'; // Import useLocation to detect current path
import headerImage from '../../assets/image/header.jpg';
import style from './Header.module.scss';

export const Header = ( selectedDate, handleDateChange ) => {
  const location = useLocation(); // Get the current path

  return (
    <div className={style.header}>
      <div className={style.headerImageContainer}>
        <img src={headerImage} alt="Header" className={style.headerImage} />
      </div>

      {/* Conditionally render InfoBox or ThisDay based on the current path */}
      {location.pathname === "/ByDate" ? (
        <ThisDay selectedDate={selectedDate} handleDateChange={handleDateChange} />
      ) : (
        <InfoBox />
      )}
    </div>
  );
};
