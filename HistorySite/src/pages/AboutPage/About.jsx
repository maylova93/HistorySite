import styles from './About.module.scss';

export const About = () => {
    return (
        <div className={styles.aboutContainer}>
            <h1 className={styles.title}>Om Projektet</h1>
            <p className={styles.description}>
                Dette projekt er en spændende rejse gennem historien! Her kan du lære om begivenheder, der fandt sted på denne dag, på en bestemt dato, eller fra et givent år og frem. 
            </p>
            <p className={styles.funFact}>
                Vidste du? 🧠 Historien om Isaac Newton og æblet, der faldt ned fra træet, er ikke bare en legende. Det siges, at dette inspirerede ham til at formulere tyngdeloven! 🌳🍎
            </p>
            <p className={styles.funFact}>
                Bonusfakta: Den første e-mail blev sendt i 1971 af Ray Tomlinson. Kan du gætte, hvad den sagde? Det var simpelthen "QWERTYUIOP"! 💻📧
            </p>
        </div>
    );
};