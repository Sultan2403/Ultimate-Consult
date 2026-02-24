const customersCollection = require("../DB/Models/customers.model");

const getCustomers = async (req, res) => {
  try {
    const customers = await customersCollection.find();

    res.status(200).json({ success: true, customers });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "An error occurred" });
  }
};

module.exports = { getCustomers };
