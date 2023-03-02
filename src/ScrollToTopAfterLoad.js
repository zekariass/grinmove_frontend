import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTopAfterLoad() {
  const { search } = useLocation();
  //   const {search} = useLocation

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [search]);

  return null;
}

export default ScrollToTopAfterLoad;
