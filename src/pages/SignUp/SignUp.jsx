import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
import axiosPublic from "../../utils/AxiosPublic";
import { NavLink, useNavigate } from "react-router-dom";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`

export default function SignUp() {
  const { createUser, updateUserProfile } = useAuth();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    reset
  } = useForm();

  const onSubmit = async(data) => {
    const { name, email, password, userRole, bank_account_no, salary, designation, image } = data;
    const imageFile = {image: image[0]}
    const res = await axiosPublic.post(image_hosting_api, imageFile, {
      headers: {
        "Content-Type": "multipart/form-data"
      }
    })

    if(res.data.success){
      const user = {
        name, email, password, userRole, bank_account_no, salary: parseInt(salary), designation, image: res.data.data.display_url
      }
      if(user.userRole === "hr"){
        user.isVerified = true
      }

      createUser(email, password)
        .then(() => {
          updateUserProfile(name, user.image)
            .then(async() => {
              await axiosPublic.post("/users", user)
                .then((res) => {
                  reset();
                  if(res.status === 200){
                    Swal.fire({
                      title: "User created successfully!",
                      icon: "success",
                      showConfirmButton: false,
                      timer: 1500,
                    });
                    navigate("/")
                  }
                }).catch((error) => {
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
        })
        .catch((error) => {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: error.message,
          });
        });
    }

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
            name="userRole"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <FormControl fullWidth>
                <InputLabel>User Role</InputLabel>
                <Select label="User Role" {...field}>
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
            {...register("image", { required: true })}
            type="file"
          />
          {errors.image && (
            <Typography color="red">Image is required!</Typography>
          )}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2, py: 2 }}
          >
            Sign Up
          </Button>
          <Grid textAlign="center">
            <Typography variant="body2">
              Already have an account?{" "}
              <NavLink to="/login" style={{color:"#4540df"}}>
                Login
              </NavLink>
            </Typography>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}
