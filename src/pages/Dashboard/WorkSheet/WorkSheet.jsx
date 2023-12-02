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

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

export default function WorkSheet() {
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log("from work sheet");
    console.log(data);
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
              <TableCell align="center">Tasks</TableCell>
              <TableCell align="center">Hours</TableCell>
              <TableCell align="center">Date</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="center" component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="center">{row.calories}</TableCell>
                <TableCell align="center">{row.fat}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
