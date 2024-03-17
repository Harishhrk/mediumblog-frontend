"use client";
import { Box, Button, Grid, Snackbar, Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import { useRouter } from "next/navigation";
import login from "@/app/services";

export default function Login() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  // const handleClick = () => {
  //   setOpen(true);
  // };
  const handlelogin = async () => {
    const payload = { email: username, password: password };
    const responseData = await login(payload);
    const token = responseData?.data?.token;

    if (responseData?.status === 200) {
      router.push("/", { scroll: false });
    } else {
      <Snackbar autoHideDuration={6000} message="Error" />;
    }
  };
  return (
    <Box>
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
        sx={{ minHeight: "90vh" }}
      >
        <Grid item xs={3}>
          <Typography variant="h3" mb={2}>
            Login
          </Typography>
          <Box>
            <TextField
              required
              id="outlined-required"
              label="Email"
              onChange={(e) => setUsername(e.target.value)}
            />
          </Box>
          <Box
            sx={{
              mt: 3,
            }}
          >
            <TextField
              required
              id="outlined-required"
              label="Password"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </Box>
          <Button onClick={handlelogin} sx={{ mt: "2rem" }} variant="contained">
            Login
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}
