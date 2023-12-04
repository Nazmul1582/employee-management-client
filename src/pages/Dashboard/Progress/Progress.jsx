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

  const getUniqueEmployeesName = (sheet) => {
    const uniqueEmployees = new Set();
    sheet.forEach(task => {
      uniqueEmployees.add(task.name)
    })
    return Array.from(uniqueEmployees)
  }
  const employees = getUniqueEmployeesName(workSheet)

  const tasks = workSheet.filter(task => {
    if(employeeName){
    return task.name === employeeName;
    }
    return task;
  })

  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow hover>
            <TableCell align="center" sx={{ fontWeight: 600 }}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Employee</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={employeeName}
                  label="Employee"
                  onChange={(e) => {setEmployeeName(e.target.value)}}
                >
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
              Date
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {loading ? (
            <TableRow hover>
              <TableCell colSpan={3}>
                <LinearProgress sx={{ m: 3 }} />
              </TableCell>
            </TableRow>
          ) : tasks.length === 0 ? (
            <TableRow hover>
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
