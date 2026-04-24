export const validateContactForm = (formData) => {
  const errors = {};

  // First Name validation
  if (!formData.firstName || formData.firstName.trim() === "") {
    errors.firstName = "First name is required";
  }

  // Last Name validation
  if (!formData.lastName || formData.lastName.trim() === "") {
    errors.lastName = "Last name is required";
  }

  // Email validation
  if (!formData.email || formData.email.trim() === "") {
    errors.email = "Email is required";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
    errors.email = "Email must be a valid email address";
  }

  // Phone Number validation (optional but if provided, must be valid)
  if (!formData.phoneNumber) {
    errors.phoneNumber =
      "Phone number must be a valid international phone number";
  } else {
    const phoneRegex = /^\+?[1-9]\d{1,14}$/;
    if (!phoneRegex.test(formData.phoneNumber.trim().replace(/\s|-/g, ""))) {
      errors.phoneNumber =
        "Phone number must be a valid international phone number";
    }
  }

  if (!formData.businessName || formData.businessName.trim() === "") {
    errors.businessName = "Business name is required";
  } else if (formData.businessName.trim().length < 5) {
    errors.businessName = "Business name must be at least 5 characters long";
  }

  if (!formData.message || formData.message.trim() === "") {
    errors.message = "Message is required";
  } else if (formData.message.trim().length < 50) {
    errors.message = "Message must be at least 50 characters long";
  }

  return errors;
};
