import validator from "validator";
import { parsePhoneNumberFromString } from "libphonenumber-js";

export const validateContactForm = (formData) => {
  const errors = {};

  if (!formData.fullName || formData.fullName.trim() === "") {
    errors.fullName = "Full name is required";
  } else if (formData.fullName.trim().length < 6) {
    errors.fullName = "Full name must be at least 6 characters long";
  }

  if (!formData.phoneNumber || formData.phoneNumber.trim() === "") {
    errors.phoneNumber = "Phone number is required";
  } else {
    const phone = parsePhoneNumberFromString(formData.phoneNumber);
    !phone.isValid() ? (errors.phoneNumber = "Please enter a valid phone number") : null;
  }

  if (!formData.email || formData.email.trim() === "") {
    errors.email = "Email is required";
  } else if (!validator.isEmail(formData.email.trim())) {
    errors.email = "Email must be a valid email address";
  }

  if (!formData.businessName || formData.businessName.trim() === "") {
    errors.businessName = "Business name is required";
  } else if (formData.businessName.trim().length < 7) {
    errors.businessName = "Business name must be at least 7 characters long";
  }

  if (!formData.message || formData.message.trim() === "") {
    errors.message = "Message is required";
  } else if (formData.message.trim().length < 50) {
    errors.message = "Message must be at least 50 characters long";
  }

  return errors;
};
