export const validateContactForm = (formData) => {
  const errors = {};

  if (!formData.fullName || formData.fullName.trim() === "") {
    errors.fullName = "Full name is required";
  } else if (formData.fullName.trim().length < 3) {
    errors.fullName = "Full name must be at least 3 characters long";
  }

  if (!formData.phoneNumber || formData.phoneNumber.trim() === "") {
    errors.phoneNumber = "Phone number is required";
  } else if (!/^(\+?\d[\d\s()-]{8,})$/.test(formData.phoneNumber.trim())) {
    errors.phoneNumber = "Please enter a valid phone number";
  }

  if (!formData.email || formData.email.trim() === "") {
    errors.email = "Email is required";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
    errors.email = "Email must be a valid email address";
  }

  if (!formData.businessName || formData.businessName.trim() === "") {
    errors.businessName = "Business name is required";
  } else if (formData.businessName.trim().length < 2) {
    errors.businessName = "Business name must be at least 2 characters long";
  }

  if (!formData.message || formData.message.trim() === "") {
    errors.message = "Message is required";
  } else if (formData.message.trim().length < 20) {
    errors.message = "Message must be at least 20 characters long";
  }

  return errors;
};
