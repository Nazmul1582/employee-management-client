import {
  LinearProgress,
  Paper,
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

const Progress = () => {
  const [workSheet, , loading] = useWorkSheet();
  console.log(loading);

  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow hover>
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
          {loading ? (
            <TableRow hover>
              <TableCell colSpan={3}>
                <LinearProgress sx={{ m: 3 }} />
              </TableCell>
            </TableRow>
          ) : workSheet.length === 0 ? (
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
            workSheet.map((task) => (
              <TableRow
                key={task._id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                hover
              >
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
