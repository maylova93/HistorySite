import { useQuery } from "@tanstack/react-query";
import style from '../../pages/TodayPage/Today.module.scss'; 
import { BackToTop } from "../../components/Ekstra/BackToTop";


  const fetchTodayEvents = async () => {
  const today = new Date();
  const month = today.getMonth() + 1;
  const day = today.getDate();
  const url = `https://api.wikimedia.org/feed/v1/wikipedia/en/onthisday/all/${month}/${day}`;

  const res = await fetch(url);
  if (!res.ok) {
    throw new Error("Network response was not ok");
  }
  return res.json();
};

export const Today = () => {
  const { isLoading, error, data } = useQuery({
    queryKey: ["todayEvents"], 
    queryFn: fetchTodayEvents, 
    onSuccess: (data) => {
      console.log("API data fetched successfully:", data); 
    },
    onError: (error) => {
      console.error("Error fetching API data:", error);
    },
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const events = data?.events || [];

  return (
    <div className={style.timeline}>
      <div className={style.topCircle}></div> {/* Større cirkel i toppen */}
      {events.map((event, index) => (
        <div key={index} className={style.timelineEvent}>
          <div className={style.content}>
            <h3>Year: {event.year}</h3>
            <p>{truncateText(event.text, 100)}</p>
            {event.pages?.[0]?.content_urls?.desktop?.page && (
              <a href={event.pages[0].content_urls.desktop.page} target="_blank" rel="noopener noreferrer">
                Read more <span role="img" aria-label="book">📖</span>
              </a>
            )}
            <BackToTop/>
          </div>
        </div>
      ))}
    </div>
  );
};

const truncateText = (text, maxLength) => {
  if (text.length > maxLength) {
    return text.slice(0, maxLength) + '...';
  }
  return text;
};
