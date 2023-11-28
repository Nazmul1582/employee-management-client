import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";

export default function SignUp() {
  const { createUser, updateUserProfile } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm();

  const onSubmit = (data) => {
    const { name, email, password, photoUrl } = data;

    createUser(email, password)
      .then(() => {
        updateUserProfile(name, photoUrl)
          .then(() => {
            Swal.fire({
              title: "User created successfully!",
              icon: "success",
              showConfirmButton: false,
              timer: 1500,
            });
          })
          .catch((error) => {
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: error.message,
            });
          });
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
    <Container component="main" maxWidth="xs" sx={{ mb: "50px" }}>
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography component="h2" fontWeight={600} variant="h5">
          Sign Up
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
            label="Your Name"
            {...register("name", { required: true })}
            autoFocus
            type="text"
          />
          {errors.name && (
            <Typography color="red">Name is required!</Typography>
          )}
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
              pattern: /(?=.*[A-Z])(?=.*[!@#$&*])/,
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
          {errors.password?.type === "pattern" && (
            <Typography color="red">
              Pasword contains at least an uppercase and a special character!
            </Typography>
          )}
          <Controller
            name="Role"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <FormControl fullWidth>
                <InputLabel>Role</InputLabel>
                <Select label="Role" {...field}>
                  <MenuItem value="employee">Employee</MenuItem>
                  <MenuItem value="hr">HR</MenuItem>
                  <MenuItem value="admin">Admin</MenuItem>
                </Select>
              </FormControl>
            )}
          />
          <TextField
            margin="normal"
            fullWidth
            {...register("bank_account_no", { required: true })}
            label="Bank Account No."
            type="text"
          />
          {errors.bank_account_no && (
            <Typography color="red">Bank account no. is required!</Typography>
          )}
          <TextField
            margin="normal"
            fullWidth
            {...register("salary", { required: true })}
            label="Salary"
            type="number"
          />
          {errors.salary && (
            <Typography color="red">Salary is required!</Typography>
          )}
          <TextField
            margin="normal"
            fullWidth
            {...register("designation", { required: true })}
            label="Designation"
            type="text"
          />
          {errors.designation && (
            <Typography color="red">Designation is required!</Typography>
          )}
          <TextField
            margin="normal"
            fullWidth
            {...register("photo", { required: true })}
            type="file"
          />
          {errors.photo && (
            <Typography color="red">Photo is required!</Typography>
          )}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign Up
          </Button>
          <Grid textAlign="center">
            <Link href="/login" variant="body2">
              {"Already have an account? Login"}
            </Link>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}
