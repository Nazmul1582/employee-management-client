import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
import { NavLink, useNavigate } from "react-router-dom";
import axiosPublic from "../../utils/AxiosPublic";

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm();
  const onSubmit = async (data) => {
    const { email, password } = data;
    const user = await axiosPublic.get(`/users/${email}`);
    if (password === user.data?.password && user.data?.isFired) {
      return Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "You're fired! So, you can't login.",
      });
    }
    login(email, password)
      .then(() => {
        reset();
        Swal.fire({
          title: "User successfully logged-in!",
          icon: "success",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate("/");
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: error.message,
        });
      });
  };

  return (
    <Container component="main" maxWidth="xs" sx={{ minHeight: "calc(100vh - 69px)", height: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>
      <Box
        sx={{
          py: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography component="h2" fontWeight={600} variant="h5">
          Login
        </Typography>
        <Box
          component="form"
          onSubmit={handleSubmit(onSubmit)}
          noValidate
          sx={{ mt: 1 }}
        >
          <TextField
            margin="normal"
            fullWidth
            label="Email Address"
            {...register("email", { required: true })}
            type="email"
          />
          {errors.email && (
            <Typography color="red">Email is required!</Typography>
          )}
          <TextField
            margin="normal"
            fullWidth
            {...register("password", {
              required: true,
              minLength: 6,
            })}
            label="Password"
            type="password"
          />
          {errors.password?.type === "required" && (
            <Typography color="red">Pasword is required!</Typography>
          )}
          {errors.password?.type === "minLength" && (
            <Typography color="red">
              Pasword must be 6 characters or longer!
            </Typography>
          )}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2, py: 2 }}
          >
            Login
          </Button>
          <Grid textAlign="center">
            <Typography variant="body2">
              Don&apos;t have an account?{" "}
              <NavLink to="/signup" style={{color:"#4540df"}}>
                Sign Up
              </NavLink>
            </Typography>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}
