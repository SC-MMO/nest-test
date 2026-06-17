import { AppProvider } from "@toolpad/core/AppProvider";
import { Card, TextField, Button, Typography } from "@mui/material";
import { callAPI } from "./Helpers";
import { useNavigate } from "react-router-dom";

function SignIn() {
  const navigate = useNavigate();
  const handleSignIn = async (formData: {
    identifier: string;
    password: string;
  }) => {
    const response = await callAPI("post", "/login", formData);
    if (response.status === 200) {
      window.location.href = "/";
    } else {
      window.location.reload();
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;

    const formData = {
      identifier: (form.elements.namedItem("identifier") as HTMLInputElement)
        .value,
      password: (form.elements.namedItem("password") as HTMLInputElement).value,
    };

    handleSignIn(formData);
  };

  return (
    <AppProvider>
      <Card variant="outlined" sx={{ p: "2rem", pl: "1rem", width: 350 }}>
        <Typography variant="h5" gutterBottom fontWeight="bold">
          Sign In
        </Typography>
        <Typography variant="subtitle2" gutterBottom fontWeight="light">
          Welcome back, please sign up to continue
        </Typography>

        <form onSubmit={handleSubmit}>
          <TextField
            name="identifier"
            sx={{ m: "0.5rem" }}
            size="small"
            required
            label="Username/Email"
            placeholder="eg. Max | lorem@ipsum.com"
            fullWidth
            autoFocus
          />

          <TextField
            name="password"
            sx={{ m: "0.5rem" }}
            size="small"
            label="Password"
            type="password"
            fullWidth
            placeholder="********"
            autoComplete="current-password"
          />

          <Button
            sx={{ m: "0.5rem" }}
            variant="outlined"
            size="large"
            color="inherit"
            fullWidth
            type="submit"
          >
            Sign In
          </Button>
        </form>
        <Typography
          variant="subtitle2"
          sx={{ mt: "0.5rem" }}
          gutterBottom
          fontWeight="light"
        >
          Don't have an account?&nbsp;&nbsp;
          <a href="/sign-up">
            <u>Sign up</u>
          </a>
        </Typography>
      </Card>
    </AppProvider>
  );
}

export { SignIn };
