import { useState } from "react";
import customerApi from "../Apis/Client/customer.api";

export default function useCustomer() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const execute = async (apiCall) => {
    setLoading(true);
    setError(null);
    try {
      const response = await apiCall();
      setData(response);
    } catch (err) {
      console.log(err);
      setError(() => {
        console.log(err?.response);
        return (
          err?.response?.data?.validation?.body?.message ||
          err?.response?.data?.message || "An error occured."
        );
      });
    } finally {
      setLoading(false);
    }
  };

  const methods = {
    postCustomerData: (customerData) =>
      execute(() => customerApi.postCustomerData(customerData)),
  };

  return { data, loading, error, ...methods };
}
