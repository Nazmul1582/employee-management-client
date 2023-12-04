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
  const [employeeName, setEmployeeName] = useState("")
  const [month, setMonth] = useState("");

  const getUniqueEmployeesName = (sheet) => {
    const uniqueEmployees = new Set();
    sheet.forEach(task => {
      uniqueEmployees.add(task.name)
    })
    return Array.from(uniqueEmployees)
  }
  const employees = getUniqueEmployeesName(workSheet)

  const tasks = workSheet.filter(task => {
    if(!employeeName){
      return task;
    }else if(employeeName === "all-employee"){
      return task;
    }
    return task.name === employeeName;
  })

  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ];

  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow hover>
            <TableCell align="center" sx={{ fontWeight: 600 }}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Employee Name</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={employeeName}
                  label="Employee"
                  onChange={(e) => {setEmployeeName(e.target.value)}}
                >
                  <MenuItem value="all-employee">All Employees</MenuItem>
                  {
                    employees.map((name, index) => <MenuItem key={index} value={name}>{name}</MenuItem>)
                  }
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
                <InputLabel id="demo-simple-select-label">Select Month</InputLabel>
                <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={month}
                defaultValue="Select"
                label="Month"
                onChange={(e) => setMonth(e.target.value)}
                >
                  <MenuItem value="Select">Select Month</MenuItem>
                  {
                    months.map((month) => <MenuItem key={month} value={month}>{month}</MenuItem>)
                  }
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
  );
};

export default Progress;
