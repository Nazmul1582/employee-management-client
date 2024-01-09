import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { TablePagination, Typography } from "@mui/material";
import React from "react";
import useSalary from "../../../hooks/useSalary";
import useAuth from "../../../hooks/useAuth";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export default function PaymentHistory() {
  const { user } = useAuth();
  const [salaries] = useSalary(user?.email);

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const visibleRows = React.useMemo(
    () => salaries.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage),
    [page, rowsPerPage, salaries]
  );

  return (
    <React.Fragment>
      <Typography
        textAlign="center"
        component="h2"
        variant="h4"
        fontWeight={600}
        mb={4}
      >
        Payment History
      </Typography>
      <TableContainer component={Paper}>
        <Table aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="center">Month</StyledTableCell>
              <StyledTableCell align="center">Amount</StyledTableCell>
              <StyledTableCell align="center">Transaction Id</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {visibleRows.length < 1 ? (
              <StyledTableCell colSpan={3}>
                <Typography
                  variant="h5"
                  textAlign="center"
                  fontWeight={600}
                  my={5}
                >
                  No salary available
                </Typography>
              </StyledTableCell>
            ) : (
              visibleRows.map((salary) => (
                <StyledTableRow key={salary._id}>
                  <StyledTableCell align="center" component="th" scope="salary">
                    {salary.month}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {salary.salary} TK.
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {salary.transactionId}
                  </StyledTableCell>
                </StyledTableRow>
              ))
            )}
          </TableBody>
        </Table>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={salaries.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </TableContainer>
    </React.Fragment>
  );
}
