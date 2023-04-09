import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { checkValidateForm, checkValidatePhoneNumber} from "../utils/checkValidateHelper";
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
    address: "",
  });

  // FUNCTIONS
  const handleSubmit = (e) => {
    e.preventDefault();
    const isFormValid = checkValidateForm(
      formValue.name,
      formValue.surname,
      formValue.email,
      formValue.address,
      phone,
      phoneNumberValidate
    );
    if (isFormValid) {
      navigate(
        "/thank-you-page",
        { state: { information: formValue, phone } || {} },
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
      className="flex items-center backgroundHome justify-center min-h-screen flex-col font-serif bg-dark "
    >
      <h1 className="text-4xl border-b-2 border-white pb-2 text-white">
        Lead From
      </h1>

      <form onSubmit={handleSubmit} className="my-5 max-w-[500px]">
        <div className="flex gap-2">
          <div className="flex flex-col bg-halfdark w-full rounded-lg border border-transparent focus-within:border-blue-400">
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

          <div className="flex flex-col bg-halfdark w-full rounded-lg border border-transparent focus-within:border-blue-400">
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

        <div className="bg-halfdark mt-2 rounded-lg border border-transparent focus-within:border-blue-400">
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

        <div className="mt-2 flex flex-col bg-halfdark rounded-lg border border-transparent focus-within:border-blue-400">
          <label className="text-white px-3 text-xs mt-2" htmlFor="address">
            Address
          </label>
          <textarea
            onChange={handleChange}
            className="resize-none w-full bg-transparent h-40 rounded-lg outline-none px-3 text-white py-2"
            name="address"
            value={formValue.address}
            id="address"
            cols="30"
            rows="10"
          ></textarea>
        </div>

        <div className="flex gap-2 mt-2">
          <button
            className="h-10 z-10 bg-halfdark relative after:transition-all after:z-[-1] after:opacity-50 after:duration-500 text-white w-full rounded-lg after:content[''] after:w-0 after:h-full after:absolute after:left-0 after:top-0 after:rounded-lg hover:after:w-full   after:bg-blue-400 "
            type="submit"
          >
            <span className="z-30 font-bold">Send</span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default HomePage;
