import api from "./client.api";

const customerApi = {
  postCustomerData: (customerData) => api.post("customers", customerData),
};

export default customerApi