import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { getUtmParametersToLocalStorage } from "../utils/getUtmParamsFromLocalStorageHelper";

const ThankYouPage = () => {
  const { state } = useLocation();
  const [utmParams, setUtmParams] = useState({});
  const { name, surname, adress, email } = state.information;
  const { phone } = state;

  useEffect(() => {
    setUtmParams(getUtmParametersToLocalStorage());
  }, []);

  return (
    <div>
      <h1>Thank you for your submission!</h1>
      <p>We will get back to you as soon as possible.</p>

      <h2>Here are the details you provided:</h2>
      <ul>
        <li>
          UTM Source:
          {utmParams.utm_source ? utmParams.utm_source : "Belirtilmedi"}
        </li>
        <li>
          UTM Medium:{" "}
          {utmParams.utm_medium ? utmParams.utm_medium : "Belirtilmedi"}{" "}
        </li>
        <li>
          UTM Campaign:{" "}
          {utmParams.utm_campaign ? utmParams.utm_campaign : "Belirtilmedi"}{" "}
        </li>
        <li>Name: {name} </li>
        <li>Surname:{surname} </li>
        <li>Email:{email} </li>
        <li>Phone Number:{phone} </li>
        <li>Address:{adress} </li>
      </ul>
    </div>
  );
};

export default ThankYouPage;
