import {
  FormControl,
  InputLabel,
  LinearProgress,
  MenuItem,
  Paper,
  Select,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";

import changeDateFormat from "../../../utils/changeDateFormat";
import useWorkSheet from "../../../hooks/useWorkSheet";
import { useState } from "react";

const Progress = () => {
  const [workSheet, , loading] = useWorkSheet();
  const [selectedEmployee, setSelectedEmployee] = useState("all-employees");
  const [selectedMonth, setSelectedMonth] = useState("all-months");

  const getUniqueEmployeesName = (sheet) => {
    const uniqueEmployees = new Set();
    sheet.forEach((task) => {
      uniqueEmployees.add(task.name);
    });
    return Array.from(uniqueEmployees);
  };

  const uniqueEmployeesName = getUniqueEmployeesName(workSheet);

  const months = [
    { id: "01", name: "January" },
    { id: "02", name: "February" },
    { id: "03", name: "March" },
    { id: "04", name: "April" },
    { id: "05", name: "May" },
    { id: "06", name: "June" },
    { id: "07", name: "July" },
    { id: "08", name: "August" },
    { id: "09", name: "September" },
    { id: "10", name: "October" },
    { id: "11", name: "November" },
    { id: "12", name: "December" },
  ];

  const tasks = workSheet.filter((task) => {
    const dateFilter =
      selectedMonth === "all-months" ||
      task.date.includes(`-${selectedMonth}-`);
    if (selectedEmployee === "all-employees" && dateFilter) {
      return task;
    }
    return task.name.includes(selectedEmployee) && dateFilter;
  });

  return (
    <>
      <Typography
        textAlign="center"
        component="h2"
        variant="h4"
        fontWeight={600}
        mb={4}
      >
        Progress
      </Typography>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow hover>
              <TableCell align="center" sx={{ fontWeight: 600 }}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">
                    Employee Name
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={selectedEmployee}
                    label="Employee"
                    onChange={(e) => {
                      setSelectedEmployee(e.target.value);
                    }}
                  >
                    <MenuItem value="all-employees">All Employees</MenuItem>
                    {uniqueEmployeesName.map((name, index) => (
                      <MenuItem key={index} value={name}>
                        {name}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </TableCell>
              <TableCell align="center" sx={{ fontWeight: 600 }}>
                Tasks
              </TableCell>
              <TableCell align="center" sx={{ fontWeight: 600 }}>
                Hours
              </TableCell>
              <TableCell align="center" sx={{ fontWeight: 600 }}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">
                    All Months
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={selectedMonth}
                    defaultValue="all-months"
                    label="Month"
                    onChange={(e) => setSelectedMonth(e.target.value)}
                  >
                    <MenuItem value="all-months">All Months</MenuItem>
                    {months.map((month) => (
                      <MenuItem key={month.id} value={month.id}>
                        {month.name}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {loading ? (
              <TableRow hover>
                <TableCell colSpan={4}>
                  <LinearProgress sx={{ m: 3 }} />
                </TableCell>
              </TableRow>
            ) : tasks.length === 0 ? (
              <TableRow hover>
                <TableCell colSpan={4}>
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
              tasks.map((task) => (
                <TableRow
                  key={task._id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  hover
                >
                  <TableCell align="center" component="th" scope="row">
                    {task.name}
                  </TableCell>
                  <TableCell align="center" component="th" scope="row">
                    {task.task}
                  </TableCell>
                  <TableCell align="center">{task.hours} Hours</TableCell>
                  <TableCell align="center">
                    {changeDateFormat(task.date)}
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default Progress;
