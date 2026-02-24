const customersCollection = require("../DB/Models/customers.model");

const addNewCustomer = async (req, res) => {
  try {
    await customersCollection.create(req.body);
    res.status(201).json({ success: true, message: "Customer added successfully" });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Error adding customer", error: error.message });
  }
};

module.exports = {
  addNewCustomer,
};