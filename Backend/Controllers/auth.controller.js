const adminCollection = require("../DB/Models/admin.model");
const bcrypt = require("bcryptjs");
const { generateNewTokens, verifyRefreshToken } = require("../Utils/Auth/tokens.util");

const loginAdmin = async (req, res) => {
  try {
    const { password, email } = req.body;
    const existingAccount = await adminCollection
      .findOne({ email })
      .select("+password");

    if (!existingAccount) {
      return res
        .status(401)
        .json({ success: false, message: "Invalid credentials" });
    }

    const passwordsMatch = await bcrypt.compare(
      password,
      existingAccount.password,
    );

    if (!passwordsMatch) {
      return res
        .status(401)
        .json({ success: false, message: "Invalid credentials" });
    }

    const user = existingAccount.toJSON();
    const tokens = await generateNewTokens(user);

    res.status(200).json({ success: true, tokens });
  } catch (error) {
    console.error(error, error.message);
    return res
      .status(500)
      .json({ success: false, message: "An error occurred" });
  }
};


const refreshTokenController = async (req, res) => {
  try {
    const { refreshToken } = req.body;

    const user = await verifyRefreshToken(refreshToken);
    const tokens = await generateNewTokens(user.toJSON());

    res.status(200).json({ success: true, tokens });
  } catch (err) {
    if (
      err.message.includes("token") ||
      err.message.includes("User not found") ||
      err.message.includes("mismatch")
    ) {
      return res.status(401).json({ success: false, message: err.message });
    }

    console.error(err, err?.message);
    res.status(500).json({ success: false, message: "An error occured" });
  }
};


module.exports = { loginAdmin, refreshTokenController };
