const customersCollection = require("../DB/Models/customers.model");

const addNewCustomer = async (req, res) => {
  const consultationStatus = "Pending";
  const data = { ...req.body, consultationStatus };

  try {
    await customersCollection.create(data);
    res
      .status(201)
      .json({ success: true, message: "Customer added successfully" });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "An error occured while adding the customer",
      error: error.message,
    });
  }
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
};
