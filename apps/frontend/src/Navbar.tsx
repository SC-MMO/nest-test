import { useState, useEffect } from "react";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import { callAPI } from "./Helpers";
import { logout } from "./Helpers";

function Navbar() {
  const [user, setUser] = useState({ authenticated: false, user: null });

  useEffect(() => {
    const fetchUser = async () => {
      const response = await callAPI("get", "/me");
      setUser(response.data);
    };
    fetchUser();
  }, []);

  function AuthButton() {
    return (
      <Button
        color="inherit"
        variant="outlined"
        onClick={user.authenticated ? logout : undefined}
        href={user.authenticated ? undefined : "/sign-in"}
        sx={{
          textTransform: "none",
          borderRadius: 2,
          "&:hover": { backgroundColor: "rgba(255,255,255,0.1)" },
        }}
      >
        {user.authenticated ? "Logout" : "Sign in"}
      </Button>
    );
  }

  return (
    <AppBar
      position="fixed"
      color="transparent"
      sx={{
        height: "4rem",
        borderBottom: "1px solid",
        borderColor: "divider",
      }}
    >
      <Toolbar>
        <Typography
          sx={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "1.75rem",
            fontWeight: 600,
          }}
        >
          The Perfect One
        </Typography>
        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1 }}
        ></Typography>
        <AuthButton />
      </Toolbar>
    </AppBar>
  );
}

export { Navbar };
