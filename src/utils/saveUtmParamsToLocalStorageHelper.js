export const saveUtmParamsToLocalStorage = () => {
    const queryParams = new URLSearchParams(window.location.search);
    const utmParams = {};
    const allowedUtmParams = ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content"];
    for (const [key, value] of queryParams.entries()) {
      if (allowedUtmParams.includes(key) && !utmParams[key]) {
        utmParams[key] = value;
      }
    }
    localStorage.setItem("utmParams", JSON.stringify(utmParams));
  };