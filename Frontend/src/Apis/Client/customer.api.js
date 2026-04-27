import api from "../Base/api.config";

const customerApi = {
  postCustomerData: (customerData) => api.post("/customers", customerData),
};

export default customerApi