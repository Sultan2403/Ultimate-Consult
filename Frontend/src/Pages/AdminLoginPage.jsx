import { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import { Building2, Mail, Lock, Eye, EyeOff } from "lucide-react";
import useAdmin from "../Hooks/useAdmin";
import { validateAdminLogin } from "../Helpers/Validation/adminLoginValidation";
import { setAccessToken, setRefreshToken } from "../Helpers/Auth/tokens";
import { useNavigate } from "react-router-dom";

const iconClassName = "h-5 w-5 text-[#76777d]";

export default function AdminLoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [formErrors, setFormErrors] = useState({});

  const navigate = useNavigate();
  const { loading, error, data, login } = useAdmin();

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setFormErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validateAdminLogin(formData);
    setFormErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    login({
      email: formData.email.trim(),
      password: formData.password.trim(),
    });
  };

  useEffect(() => {
    if (data?.success) {
      const { accessToken, refreshToken } = data?.tokens || {};
      setAccessToken(accessToken);
      setRefreshToken(refreshToken);
      navigate("/admin/consultations");
    }
  }, [data, navigate]);

  return (
    <main className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-[#f7f9fb] px-4 py-8 sm:px-6 sm:py-10 lg:px-8">
      <div className="pointer-events-none absolute -right-24 -top-20 h-72 w-72 rounded-full bg-[#6cf8bb]/25 blur-3xl sm:h-[26rem] sm:w-[26rem]" />
      <div className="pointer-events-none absolute -bottom-20 -left-24 h-72 w-72 rounded-full bg-[#dae2fd]/45 blur-3xl sm:h-[24rem] sm:w-[24rem]" />

      <section className="relative z-10 flex w-full max-w-[27.5rem] flex-col gap-6 sm:gap-7">
        <header className="flex flex-col items-center gap-2 text-center">
          <div className="flex h-12 w-12 items-center justify-center rounded-md bg-[#006c49] shadow-sm">
            <Building2 className="h-6 w-6 text-white" />
          </div>
          <h1 className="text-[1.65rem] font-semibold tracking-[-0.01em] text-[#191c1e] sm:text-[1.85rem]">
            Ultimate Consult
          </h1>
          <p className="max-w-xs text-base text-[#45464d] sm:max-w-none">
            Secure admin access
          </p>
        </header>

        <div className="rounded-xl border border-[#c6c6cd] bg-white p-5 shadow-[0_4px_20px_rgba(15,23,42,0.05)] sm:p-8">
          <form
            className="flex flex-col gap-6"
            noValidate
            onSubmit={handleSubmit}
          >
            {/* Show API error at the top */}
            {error && (
              <div className="rounded-lg bg-red-100 px-4 py-3 text-red-700 border border-red-200 text-sm font-medium">
                {error}
              </div>
            )}
            {/* Show API success message at the top */}
            {data?.success && (
              <div className="rounded-lg bg-emerald-100 px-4 py-3 text-emerald-700 border border-emerald-200 text-sm font-medium">
                Login successful!
              </div>
            )}
            <div className="space-y-2">
              <TextField
                id="email"
                name="email"
                type="email"
                label="Email Address"
                placeholder="name@ultimateconsult.com"
                value={formData.email}
                onChange={handleInputChange}
                error={!!formErrors.email}
                helperText={formErrors.email}
                fullWidth
                sx={{
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "0.5rem",
                    backgroundColor: "#f7f9fb",
                    "& fieldset": {
                      borderColor: "#c6c6cd",
                    },
                    "&:hover fieldset": {
                      borderColor: "#76777d",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "#006c49",
                    },
                  },
                  "& .MuiInputLabel-root": {
                    color: "#45464d",
                    fontWeight: 500,
                    fontSize: "0.875rem",
                  },
                }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Mail className={iconClassName} />
                    </InputAdornment>
                  ),
                }}
              />
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between gap-2">
                <label
                  className="text-sm font-medium text-[#45464d]"
                  htmlFor="password"
                >
                  Password
                </label>
                <a
                  className="text-xs font-semibold uppercase tracking-[0.06em] text-[#006c49] transition hover:underline"
                  href="#"
                >
                  Forgot password?
                </a>
              </div>
              <TextField
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                placeholder="••••••••"
                value={formData.password}
                onChange={handleInputChange}
                error={!!formErrors.password}
                helperText={formErrors.password}
                fullWidth
                sx={{
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "0.5rem",
                    backgroundColor: "#f7f9fb",
                    "& fieldset": {
                      borderColor: "#c6c6cd",
                    },
                    "&:hover fieldset": {
                      borderColor: "#76777d",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "#006c49",
                    },
                  },
                  "& .MuiInputLabel-root": {
                    color: "#45464d",
                    fontWeight: 500,
                    fontSize: "0.875rem",
                  },
                }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Lock className={iconClassName} />
                    </InputAdornment>
                  ),
                  endAdornment: (
                    <InputAdornment position="end">
                      <button
                        type="button"
                        className="transition hover:opacity-80"
                        aria-label={
                          showPassword ? "Hide password" : "Show password"
                        }
                        onClick={() =>
                          setShowPassword((prevState) => !prevState)
                        }
                      >
                        {showPassword ? (
                          <EyeOff className={iconClassName} />
                        ) : (
                          <Eye className={iconClassName} />
                        )}
                      </button>
                    </InputAdornment>
                  ),
                }}
              />
            </div>

            <FormControlLabel
              control={
                <Checkbox
                  defaultChecked
                  sx={{
                    color: "#006c49",
                    "&.Mui-checked": {
                      color: "#006c49",
                    },
                  }}
                />
              }
              label={
                <span className="text-sm text-[#45464d]">
                  Remember this device
                </span>
              }
            />

            <Button
              type="submit"
              loading={loading}
              variant="contained"
              fullWidth
              sx={{
                mt: 1,
                height: 48,
                backgroundColor: "#006c49",
                color: "white",
                fontWeight: 500,
                fontSize: "1rem",
                textTransform: "none",
                borderRadius: "0.5rem",
                boxShadow: "none",
                "&:hover": {
                  backgroundColor: "#005c40",
                  boxShadow: "none",
                },
                "&:disabled": {
                  backgroundColor: "#006c49",
                  opacity: 0.7,
                },
              }}
              endIcon={!loading && <span aria-hidden="true">→</span>}
            >
              {loading ? "Signing in..." : "Sign In to Portal"}
            </Button>
          </form>
        </div>

        <footer className="space-y-2 text-center">
          <p className="text-xs text-[#76777d]/75 sm:text-sm">
            © {new Date().getFullYear()} Ultimate Consult. All rights reserved.
          </p>
        </footer>
      </section>
    </main>
  );
}
