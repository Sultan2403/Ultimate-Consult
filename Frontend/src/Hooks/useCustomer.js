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
      setError(err);
      throw err;
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
