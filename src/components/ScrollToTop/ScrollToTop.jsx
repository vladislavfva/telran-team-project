import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    // Прокрутить страницу вверх при изменении маршрута
    window.scrollTo(0, 0);
  }, [location]);

  return null;
};

export default ScrollToTop;
