const customersCollection = require("../DB/Models/customers.model");
const { createCustomerWithTransaction, verifyConsultationAccessToken } = require("../Services/customers.service");

const verifyConsultationAccessTokenController = async (req, res) => {
  const accessToken = req.params.token;

  try {
    const result = await verifyConsultationAccessToken({accessToken});

    if (!result.success) {
      return res.status(404).json({
        success: false,
        message: result.message,
      })
    }

    return res.status(200).json({
      success: true,
      message: "Token is valid",
      supportReference: result.supportReference,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "An error occured while verifying token",
    });
  }
};

const addNewCustomer = async (req, res) => {
  // const accessToken = req.params.token;

  const customerData = req.body;
  const result = await createCustomerWithTransaction({/*accessToken,*/ customerData}); 

  // The above line creates a plain customer now. BEWARE

  // if (!result.success) {
  //   return res.status(404).json({
  //     success: false,
  //     message:
  //       typeof result.error === "string" ? result.error : result.error.message,
  //   });
  // }

  res.status(201).json({
    success: true,
    message: "Your request was successful. We'll get in touch within 24 hours",
  });
};

const getCustomers = async (req, res) => {
  try {
    const customers = await customersCollection.find();
    res.status(200).json({ success: true, customers });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "An error occurred" });
  }
};

module.exports = {
  addNewCustomer,
  getCustomers,
  verifyConsultationAccessTokenController,
};
