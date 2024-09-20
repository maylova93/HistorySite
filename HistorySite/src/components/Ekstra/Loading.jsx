import { useRef, useEffect, useState } from 'react';

export const Today = () => {
  const [articleCount, setArticleCount] = useState(10);
  const loadMoreRef = useRef(null);

  const handleObserver = (entities) => {
    const target = entities[0];
    if (target.isIntersecting) {
      setArticleCount((prev) => prev + 10); // Load 10 more articles
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(handleObserver, {
      root: null,
      rootMargin: '20px',
      threshold: 1.0,
    });
    if (loadMoreRef.current) {
      observer.observe(loadMoreRef.current);
    }
  }, []);

  return (
    <div>
      {/* Render first articleCount articles */}
      {events.slice(0, articleCount).map((event, index) => (
        <div key={index}>{event.text}</div>
      ))}
      <div ref={loadMoreRef} style={{ height: '50px', backgroundColor: 'transparent' }} />
    </div>
  );
};
