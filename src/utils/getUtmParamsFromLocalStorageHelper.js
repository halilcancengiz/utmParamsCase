export const getUtmParametersToLocalStorage = () => {
    const allowedParams = [
      "utm_source",
      "utm_medium",
      "utm_campaign",
      "utm_term",
      "utm_content",
    ];
    const params = JSON.parse(localStorage.getItem("utmParams"));

    if (!params) {
      console.log("No utmParams found in localStorage.");
      return {}
    }

    const filteredParams = {};
    for (const key in params) {
      if (params.hasOwnProperty(key) && allowedParams.includes(key)) {
        filteredParams[key] = params[key];
      }
    }
    return filteredParams
  };