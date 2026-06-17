import { AppProvider } from "@toolpad/core/AppProvider";
import { Card, TextField, Button, Typography } from "@mui/material";
import { callAPI } from "./Helpers";

function SignUp() {
  const handleSignUp = async (formData: {
    username: string;
    email: string;
    password: string;
  }) => {
    const create_response = await callAPI("post", "/create_user", formData);
    if (create_response.status === 201) {
      const new_form_data = {
        identifier: formData.username,
        password: formData.password,
      };
      const login_response = await callAPI("post", "/login", new_form_data);
      if (login_response.status === 200) {
        window.location.href = "/";
      } else {
        console.log(login_response);
        //window.location.href = "/sign-in";
      }
    } else {
      console.log(create_response);
      //window.location.reload();
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;

    const formData = {
      username: (form.elements.namedItem("username") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      password: (form.elements.namedItem("password") as HTMLInputElement).value,
    };

    handleSignUp(formData);
  };

  return (
    <AppProvider>
      <Card variant="outlined" sx={{ p: "2rem", pl: "1rem", width: 350 }}>
        <Typography variant="h5" gutterBottom fontWeight="bold">
          Sign up
        </Typography>
        <Typography variant="subtitle2" gutterBottom fontWeight="light">
          Welcome, please sign up to continue
        </Typography>

        <form onSubmit={handleSubmit}>
          <TextField
            name="username"
            sx={{ m: "0.5rem" }}
            size="small"
            required
            label="Username"
            placeholder="eg. Max"
            fullWidth
            autoFocus
          />

          <TextField
            name="email"
            sx={{ m: "0.5rem" }}
            required
            size="small"
            label="Email"
            type="email"
            fullWidth
            placeholder="eg. lorem@ipsum.com"
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
            Sign Up
          </Button>
        </form>

        <Typography
          variant="subtitle2"
          sx={{ mt: "0.5rem" }}
          gutterBottom
          fontWeight="light"
        >
          Already have an account?&nbsp;&nbsp;
          <a href="/sign-in">
            <u>Sign in</u>
          </a>
        </Typography>
      </Card>
    </AppProvider>
  );
}

export { SignUp };
