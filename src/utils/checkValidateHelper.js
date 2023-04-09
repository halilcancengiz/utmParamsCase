import { toast } from "react-toastify"
import {
    isPossiblePhoneNumber,
    isValidPhoneNumber,
    validatePhoneNumberLength,
} from "libphonenumber-js";
import { emailRegexp } from "./regexHelper";


export const checkValidateForm = (name, surname, email, adress, phoneNumber, isValidNumber) => {
    if (name === "" || surname === "" || email === "" || adress === "" || phoneNumber === "") {
        toast.error("Lütfen Tüm alanları doldurunuz")
        return false
    }
    else if (!isValidNumber) {
        toast.error("Lütfen geçerli bir telefon numarası girin.")
        return false
    }
    else if (emailRegexp(email) === false) {
        toast.error(`Lütfen geçerli bir mail adresi giriniz.
        Örnek: example@gmail.com
        `)
        return false
    }
    else {
        toast.success("İşlem başarılı")
        return true
    }
}

export const checkValidatePhoneNumber = (phone, country, setPhone, setFormNumberValidate) => {
    let countryCode = country.countryCode.toUpperCase();
    setPhone(phone);
    let isPossible = isPossiblePhoneNumber(phone, countryCode);
    let isValid = isValidPhoneNumber(phone, countryCode);
    let validatePhone = validatePhoneNumberLength(phone, countryCode);
    if (isPossible && isValid && validatePhone === undefined) {
        setFormNumberValidate(true);
    } else {
        setFormNumberValidate(false);
    }
};