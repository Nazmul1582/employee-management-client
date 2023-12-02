import {
  Box,
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import useWorkSheet from "../../../hooks/useWorkSheet";

export default function WorkSheet() {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const [workSheet, refetch] = useWorkSheet(user.email);
  console.log(workSheet);
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    console.log(data);
    const { task, hours, date } = data;
    const submittedTask = {
      task,
      hours,
      date,
      name: user.displayName,
      email: user.email,
    };
    try {
      const res = await axiosSecure.post(
        "/users/employee/work-sheet",
        submittedTask
      );
      if (res.data) {
        refetch();
        Swal.fire("Your task submitted successfully", "", "success");
      }
    } catch (error) {
      console.log(error);
      Swal.fire("Oops!", error.message, "error");
    }
    reset();
  };
  return (
    <Box>
      <TableContainer sx={{ mb: 5 }}>
        <Table sx={{ minWidth: 500 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            <TableRow>
              <TableCell>
                <Box component={Paper}>
                  <Grid
                    onSubmit={handleSubmit(onSubmit)}
                    component="form"
                    elevation={2}
                    sx={{
                      padding: {
                        xs: 2,
                        md: 5,
                      },
                      display: "flex",
                      alignItems: "center",
                      gap: 1,
                    }}
                  >
                    <Grid
                      width={"100%"}
                      display="flex"
                      flexDirection="column"
                      gap={1}
                    >
                      <Controller
                        name="task"
                        rules={{ required: true }}
                        control={control}
                        defaultValue=""
                        render={({ field }) => (
                          <FormControl fullWidth>
                            <InputLabel>Task</InputLabel>
                            <Select label="Task" {...field}>
                              <MenuItem value="sales">Sales</MenuItem>
                              <MenuItem value="support">Support</MenuItem>
                              <MenuItem value="content">Content</MenuItem>
                              <MenuItem value="paper-work">Paper Work</MenuItem>
                            </Select>
                          </FormControl>
                        )}
                      />
                      {errors.task && (
                        <Typography color="red">Task is required!</Typography>
                      )}
                    </Grid>
                    <Grid
                      width={"100%"}
                      display="flex"
                      flexDirection="column"
                      gap={1}
                    >
                      <TextField
                        type="number"
                        label="Hours"
                        variant="filled"
                        fullWidth
                        {...register("hours", { required: true })}
                      />
                      {errors.hours && (
                        <Typography color="red">Hours is required!</Typography>
                      )}
                    </Grid>
                    <Grid
                      width={"100%"}
                      display="flex"
                      flexDirection="column"
                      gap={1}
                    >
                      <TextField
                        type="date"
                        label="Date"
                        variant="filled"
                        {...register("date", { required: true })}
                      />
                      {errors.date && (
                        <Typography color="red">Date is required!</Typography>
                      )}
                    </Grid>
                    <Button type="submit" fullWidth variant="contained">
                      Add
                    </Button>
                  </Grid>
                </Box>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>

      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center" sx={{ fontWeight: 600 }}>
                Tasks Name
              </TableCell>
              <TableCell align="center" sx={{ fontWeight: 600 }}>
                Hours
              </TableCell>
              <TableCell align="center" sx={{ fontWeight: 600 }}>
                Date
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {workSheet.length === 0 ? (
              <TableRow>
                <TableCell colSpan={3}>
                  <Typography
                    component="h3"
                    variant="h6"
                    fontWeight={600}
                    textAlign="center"
                    my={5}
                  >
                    No task available
                  </Typography>
                </TableCell>
              </TableRow>
            ) : (
              workSheet.map((task) => (
                <TableRow
                  key={task._id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell align="center" component="th" scope="row">
                    {task.task}
                  </TableCell>
                  <TableCell align="center">{task.hours} Hours</TableCell>
                  <TableCell align="center">{task.date}</TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
