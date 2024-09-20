import style from './InfoBox.module.scss';

export const InfoBox = () => {
  return (
    <div className={style.infoBox}>
      <div className={style.info}>
      <h1>ON THIS DAY</h1>
      <p>
        What happened on this day - historical events<br />
        deaths and births throughout time
      </p>
      </div>
    </div>
  );
};
