import api from "../Base/api.config";

const adminApi = {
  getConsultations: () => api.get("customers"),
  login: (payload) => api.post("auth/login", payload)
};

export default adminApi
