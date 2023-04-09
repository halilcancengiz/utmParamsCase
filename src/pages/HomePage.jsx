import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import {
  checkValidateForm,
  checkValidatePhoneNumber,
} from "../utils/checkValidateHelper";
import { saveUtmParamsToLocalStorage } from "../utils/saveUtmParamsToLocalStorageHelper";

const HomePage = () => {
  // REACT ROUTER
  const location = useLocation();
  const navigate = useNavigate();

  // STATES
  const [phone, setPhone] = useState("");
  const [phoneNumberValidate, setFormNumberValidate] = useState(false);
  const [formValue, setFormValue] = useState({
    name: "",
    surname: "",
    email: "",
    adress: "",
  });

  // FUNCTIONS
  const handleSubmit = (e) => {
    e.preventDefault();
    const isFormValid = checkValidateForm(
      formValue.name,
      formValue.surname,
      formValue.email,
      formValue.adress,
      phone,
      phoneNumberValidate
    );
    if (isFormValid) {
      navigate(
        "/thank-you-page",
        { state: { information: formValue, phone } },
        { replace: true }
      );
    }
  };
  const handleChange = (e, phone, country) => {
    setFormValue({ ...formValue, [e.target.name]: e.target.value });
  };
  const handlePhoneNumber = (phone, country) => {
    checkValidatePhoneNumber(phone, country, setPhone, setFormNumberValidate);
  };

  useEffect(() => {
    saveUtmParamsToLocalStorage();
  });

  return (
    <div
      id="backgroundHome"
      className="flex items-center   justify-center min-h-screen flex-col font-serif bg-dark"
    >
      <h1 className="text-4xl border-b-2 border-b-blue-400 pb-2 text-white">
        Lead From
      </h1>

      <form onSubmit={handleSubmit} className="my-5 max-w-[500px]">
        <div className="flex gap-2">
          <div className="flex flex-col bg-slate-700 w-full rounded-lg border border-transparent focus-within:border-blue-400">
            <label className="text-white px-3 text-xs mt-2" htmlFor="name">
              Name
            </label>
            <input
              onChange={handleChange}
              type="text"
              name="name"
              value={formValue.name}
              id="name"
              className="bg-transparent text-white w-full outline-none px-3 sm:h-8 xs:h-4 my-1 sm:text-base xs:text-sm"
            />
          </div>

          <div className="flex flex-col bg-slate-700 w-full rounded-lg border border-transparent focus-within:border-blue-400">
            <label className="text-white px-3 text-xs mt-2" htmlFor="surname">
              Surname
            </label>
            <input
              onChange={handleChange}
              type="text"
              id="surname"
              name="surname"
              value={formValue.surname}
              className="bg-transparent text-white w-full outline-none px-3 sm:h-8 xs:h-4 my-1 sm:text-base xs:text-sm"
            />
          </div>
        </div>

        <div className="bg-slate-700 mt-2 rounded-lg border border-transparent focus-within:border-blue-400">
          <label className="text-white px-3 text-xs" htmlFor="email">
            E-mail
          </label>
          <input
            onChange={handleChange}
            type="text"
            id="email"
            name="email"
            value={formValue.email}
            className="bg-transparent text-white w-full outline-none px-3 sm:h-8 xs:h-4 my-1 sm:text-base xs:text-sm"
          />
        </div>

        <PhoneInput
          country={"tr"}
          value={formValue.phoneNumber}
          onChange={handlePhoneNumber}
        />

        <div className="mt-2 flex flex-col bg-slate-700 rounded-lg">
          <label className="text-white px-3 text-xs mt-2" htmlFor="adress">
            Adress
          </label>
          <textarea
            onChange={handleChange}
            className="resize-none w-full bg-slate-700 h-40 rounded-lg outline-none px-3 text-white py-2"
            name="adress"
            value={formValue.adress}
            id="adress"
            cols="30"
            rows="10"
          ></textarea>
        </div>

        <div className="flex gap-2 mt-2">
          <input
            className="h-10 bg-blue-800 text-white w-1/2 rounded-lg"
            type="reset"
          />
          <input
            className="h-10 bg-blue-800 text-white w-1/2 rounded-lg"
            type="submit"
          />
        </div>
      </form>
    </div>
  );
};

export default HomePage;
