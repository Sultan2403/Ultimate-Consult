import { useState } from "react";
import TextField from "@mui/material/TextField";
import useAdmin from "../Hooks/useAdmin";
import { validateAdminLogin } from "../Helpers/Validation/adminLoginValidation";

const iconClassName = "h-5 w-5 text-[#76777d]";

function InstitutionIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-6 w-6 text-white"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M12 3 2 8l10 5 8.2-4.1V16h1.8V8L12 3Zm-6 9.8V18h2v-5.2l-2 1Zm4 2V18h2v-2.2l-2-1ZM4 20v1h16v-1H4Zm10-4.2V18h2v-5.2l-2 1Zm4-2V18h2v-4.2l-2-1Z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg
      aria-hidden="true"
      className={iconClassName}
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M20 6H4a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2Zm-.4 2L12 13.2 4.4 8h15.2ZM4 16V9.4l7.4 5.1a1 1 0 0 0 1.2 0L20 9.4V16H4Z" />
    </svg>
  );
}

function LockIcon() {
  return (
    <svg
      aria-hidden="true"
      className={iconClassName}
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M17 8h-1V6a4 4 0 1 0-8 0v2H7a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-8a2 2 0 0 0-2-2Zm-7-2a2 2 0 1 1 4 0v2h-4V6Zm7 12H7v-8h10v8Z" />
    </svg>
  );
}

function EyeIcon({ open }) {
  if (open) {
    return (
      <svg
        aria-hidden="true"
        className={iconClassName}
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M12 6.5c5.2 0 9.3 4.5 10 5.3.1.1.1.3 0 .4-.7.8-4.8 5.3-10 5.3S2.7 13 2 12.2a.3.3 0 0 1 0-.4c.7-.8 4.8-5.3 10-5.3Zm0 2C8.9 8.5 6 11 4.1 12c2 1 4.8 3.5 7.9 3.5s5.9-2.5 7.9-3.5c-2-1-4.8-3.5-7.9-3.5Zm0 1.5a2 2 0 1 1 0 4 2 2 0 0 1 0-4Z" />
      </svg>
    );
  }

  return (
    <svg
      aria-hidden="true"
      className={iconClassName}
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M3.2 4.5 2 5.7l3.1 3.1C3.6 10.1 2.5 11.4 2 12c.7.9 4.8 5.5 10 5.5 1.9 0 3.5-.6 4.9-1.4l3 3 1.2-1.2L3.2 4.5ZM8 11.7a4 4 0 0 0 4.3 4.3L8 11.7Zm4-5.2c5.2 0 9.3 4.6 10 5.5-.3.4-1.4 1.8-3 3.1l-1.4-1.4a6 6 0 0 0-7.7-7.7L8.3 4.4A9.3 9.3 0 0 1 12 6.5Z" />
    </svg>
  );
}

export default function AdminLoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [formErrors, setFormErrors] = useState({});

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

    await login({
      email: formData.email.trim(),
      password: formData.password.trim(),
    });
  };

  return (
    <main className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-[#f7f9fb] px-4 py-8 sm:px-6 sm:py-10 lg:px-8">
      <div className="pointer-events-none absolute -right-24 -top-20 h-72 w-72 rounded-full bg-[#6cf8bb]/25 blur-3xl sm:h-[26rem] sm:w-[26rem]" />
      <div className="pointer-events-none absolute -bottom-20 -left-24 h-72 w-72 rounded-full bg-[#dae2fd]/45 blur-3xl sm:h-[24rem] sm:w-[24rem]" />

      <section className="relative z-10 flex w-full max-w-[27.5rem] flex-col gap-6 sm:gap-7">
        <header className="flex flex-col items-center gap-2 text-center">
          <div className="flex h-12 w-12 items-center justify-center rounded-md bg-[#006c49] shadow-sm">
            <InstitutionIcon />
          </div>
          <h1 className="text-[1.65rem] font-semibold tracking-[-0.01em] text-[#191c1e] sm:text-[1.85rem]">
            Ultimate Consult
          </h1>
          <p className="max-w-xs text-base text-[#45464d] sm:max-w-none">
            Secure access to Admin portal
          </p>
        </header>

        <div className="rounded-xl border border-[#c6c6cd] bg-white p-5 shadow-[0_4px_20px_rgba(15,23,42,0.05)] sm:p-8">
          <form className="flex flex-col gap-6" noValidate onSubmit={handleSubmit}>
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
                placeholder="name@accountingfirm.com"
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
                      <MailIcon />
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
                      <LockIcon />
                    </InputAdornment>
                  ),
                  endAdornment: (
                    <InputAdornment position="end">
                      <button
                        type="button"
                        className="transition hover:opacity-80"
                        aria-label={showPassword ? "Hide password" : "Show password"}
                        onClick={() => setShowPassword((prevState) => !prevState)}
                      >
                        <EyeIcon open={showPassword} />
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
                <span className="text-sm text-[#45464d]">Remember this device</span>
              }
            />

            <Button
              type="submit"
              disabled={loading}
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
