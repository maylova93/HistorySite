import { useState, useEffect } from 'react';
import style from './ThisDay.module.scss';

export const ThisDay = () => {
  const [selectedDate, setSelectedDate] = useState(''); 
  const [events, setEvents] = useState([]); 
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Funktion til at opdatere datoen baseret på input
  const handleDateChange = (e) => {
    setSelectedDate(e.target.value); // Opdaterer 
  };

  // Henter data fra API, når datoen ændres
  useEffect(() => {
    const [day, month] = selectedDate.split('/'); // Splitter inputtet til dag og måned
    if (day && month && day.length === 2 && month.length === 2) {
      fetchEvents(day, month); // Henter data, hvis inputtet er gyldigt
    }
  }, [selectedDate]); 

  // Funktion til at hente data fra Wikimedia API
  const fetchEvents = async (day, month) => {
    setLoading(true); 
    setError(null); 
    try {
      // Kald til Wikimedia API
      const res = await fetch(`https://api.wikimedia.org/feed/v1/wikipedia/en/onthisday/events/${month}/${day}`);
      if (!res.ok) {
        throw new Error('Kunne ikke hente data');
      }
      const data = await res.json();
      
      setEvents(data.events || []); 
    } catch (err) {
      setError(err.message); 
     
    } finally {
      setLoading(false); 
    }
  };

  return (
    <div className={style.infoBox}>
      <div className={style.info}>
        <h1>ON: {selectedDate || 'DD/MM'}</h1>
        <p>Indtast en specifik dato for at få begivenheder, der skete på den dag.</p>
        <input
          type="text"
          placeholder="DD/MM"
          value={selectedDate}
          onChange={handleDateChange}
          className={style.dateInput}
        />
      </div>

      {loading && <p>Henter begivenheder...</p>}
      {error && <p>Fejl: {error}</p>}

      {/* Hvis der ikke er data, og vi ikke loader, vises en besked */}
      {!loading && events.length === 0 && !error && selectedDate && (
        <p>Ingen begivenheder fundet for denne dato.</p>
      )}

      {/* Viser de hentede begivenheder */}
      <ul>
        {events.map((event, index) => (
          <li key={index}>
            <h3>{event.year}</h3>
            <p>{event.text}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
