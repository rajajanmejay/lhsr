import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { PAGE_META, SITE_CONFIG } from "../utils/config";
import { updateMetaTags } from "../utils/seoHelpers";

/**
 * Custom hook to update meta tags based on current route
 * Call this in App.jsx or at the top level of your app
 */
export const useMetaTags = () => {
  const location = useLocation();

  useEffect(() => {
    // Map routes to meta data keys
    const routeMetaMap = {
      "/": "home",
      "/research": "research",
      "/facilities": "facilities",
      "/people": "people",
      "/publications": "publications",
      "/gallery": "gallery",
      "/opportunities": "opportunities",
      "/contact": "contact",
    };

    const metaKey = routeMetaMap[location.pathname];
    const pageMeta = PAGE_META[metaKey] || PAGE_META.home;

    // Scroll to top
    window.scrollTo(0, 0);

    // Update meta tags
    updateMetaTags(
      pageMeta.title,
      pageMeta.description,
      `${SITE_CONFIG.url}${location.pathname}`,
      null,
      "website"
    );
  }, [location]);
};
