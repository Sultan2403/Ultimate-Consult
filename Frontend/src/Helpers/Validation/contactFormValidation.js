import validator from "validator";
import { isValidPhoneNumber } from "libphonenumber-js";

export const validateContactForm = (formData) => {
  const errors = {};

  if (!formData.firstName || formData.firstName.trim() === "") {
    errors.firstName = "First name is required";
  } else if (formData.firstName.trim().length < 3) {
    errors.firstName = "First name must be at least 3 characters long";
  }

  if (!formData.lastName || formData.lastName.trim() === "") {
    errors.lastName = "Last name is required";
  } else if (formData.lastName.trim().length < 3) {
    errors.lastName = "Last name must be at least 3 characters long";
  }

  if (!formData.phoneNumber || formData.phoneNumber.trim() === "") {
    errors.phoneNumber = "Phone number is required";
  } else if (!isValidPhoneNumber(formData.phoneNumber, "NG")) {
    errors.phoneNumber = "Please enter a valid phone number";
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
