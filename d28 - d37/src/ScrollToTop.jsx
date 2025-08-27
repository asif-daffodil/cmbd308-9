import { useEffect } from 'react';
import { useLocation } from 'react-router';

const ScrollToTop = () => {
  const location = useLocation();
  useEffect(() => {
    // Scroll to top on route change
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, [location.pathname]);
  return null;
};

export default ScrollToTop;
