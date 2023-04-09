import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { getUtmParametersToLocalStorage } from "../utils/getUtmParamsFromLocalStorageHelper";
import thankyouImg from "../assets/images/ty.png";
import { TiArrowBack } from "react-icons/ti";

const ThankYouPage = () => {
  const { state } = useLocation();
  const [utmParams, setUtmParams] = useState({});
  const { name, surname, address, email } = state.information;
  const { phone } = state;

  useEffect(() => {
    setUtmParams(getUtmParametersToLocalStorage());
  }, []);

  return (
    <div className="flex w-full backgroundHome items-center justify-center min-h-screen flex-col relative bg-white font-serif">
      <NavLink
        className="fixed right-10 bottom-10 border rounded-full p-2"
        to="/"
      >
        <TiArrowBack color="white" size={20} />
      </NavLink>
      <div className="flex flex-col items-center justify-center font-bold text-2xl text-center text-white">
        <img className="w-80" src={thankyouImg} alt="" />
        <h1>Thank you for sharing your information with us!</h1>
        <h2 className="text-lg mt-2">
          Below are the details you have provided:
        </h2>
      </div>

      <div className="flex sm:min-w-[500px] xs:min-w-full sm:max-w-[500px] xs:max-w-full mt-5 gap-5 my-5">
        <ul className="w-full h-full flex flex-col items-center gap-2">
          <li className="p-2 w-full bg-halfdark text-white border-2 border-transparent hover:border-blue-400 rounded-lg ">
            Name:<span className="ml-2">{name}</span>
          </li>
          <li className="p-2 w-full bg-halfdark text-white border-2 border-transparent hover:border-blue-400 rounded-lg ">
            Surname:<span className="ml-2">{surname}</span>
          </li>
          <li className="p-2 w-full bg-halfdark text-white border-2 border-transparent hover:border-blue-400 rounded-lg ">
            Email:<span className="ml-2">{email}</span>
          </li>
          <li className="p-2 w-full bg-halfdark text-white border-2 border-transparent hover:border-blue-400 rounded-lg ">
            Phone Number:<span className="ml-2">{phone}</span>
          </li>
          <li className="flex p-2 w-full h-auto bg-halfdark text-white border-2 border-transparent hover:border-blue-400 rounded-lg">
            Address:
            <span className="ml-2 flex flex-wrap break-all">{address}</span>
          </li>
          {/* UTM PARAMS */}
          <li className="p-2 w-full bg-halfdark text-white border-2 border-transparent hover:border-blue-400 rounded-lg ">
            UTM Source:
            {utmParams.utm_source ? utmParams.utm_source : "Belirtilmedi"}
          </li>
          <li className="p-2 w-full bg-halfdark text-white border-2 border-transparent hover:border-blue-400 rounded-lg ">
            UTM Medium:{" "}
            {utmParams.utm_medium ? utmParams.utm_medium : "Belirtilmedi"}
          </li>
          <li className="p-2 w-full bg-halfdark text-white border-2 border-transparent hover:border-blue-400 rounded-lg ">
            UTM Term: {utmParams.utm_term ? utmParams.utm_term : "Belirtilmedi"}
          </li>
          <li className="p-2 w-full bg-halfdark text-white border-2 border-transparent hover:border-blue-400 rounded-lg ">
            UTM Campaign:{" "}
            {utmParams.utm_campaign ? utmParams.utm_campaign : "Belirtilmedi"}
          </li>
          <li className="p-2 w-full bg-halfdark text-white border-2 border-transparent hover:border-blue-400 rounded-lg ">
            UTM Content:{" "}
            {utmParams.utm_content ? utmParams.utm_content : "Belirtilmedi"}
          </li>
        </ul>
      </div>

      {/*  */}
    </div>
  );
};

export default ThankYouPage;
