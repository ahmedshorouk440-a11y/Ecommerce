import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    document.activeElement.blur(); // يشيل أي focus
    window.scrollTo(0, 0);        // يرجع فوق
  }, [pathname]);

  return null;
}

export default ScrollToTop;

