import { Box, Button, Paper, TextField, Typography } from "@mui/material";
import { toast } from "react-toastify";

const Login = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#eaeaea",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Paper elevation={8} sx={{ padding: 2 }}>
        <Typography variant="h5" component="h1" align="center" gutterBottom>
          Login
        </Typography>
        <TextField variant="outlined" label="Email" sx={{ mb: 2 }} fullWidth />
        <Button
          variant="contained"
          onClick={() => toast.success("Verification email has been sent!")}
          fullWidth
        >
          Login
        </Button>
      </Paper>
    </Box>
  );
};

export default Login;
