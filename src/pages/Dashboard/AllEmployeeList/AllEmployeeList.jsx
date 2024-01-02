import {} from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button, TablePagination, Typography } from "@mui/material";
import useUser from "../../../hooks/useUser";
import React, { useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const AllEmployeeList = () => {
  const [users, refetch] = useUser();
  const axiosSecure = useAxiosSecure();
  const filteredUsers = users.filter(
    (user) => user.userRole !== "admin" && user.isVerified
  );

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const visibleRows = React.useMemo(
    () =>
      filteredUsers.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage),
    [page, rowsPerPage, filteredUsers]
  );

  const handleFired = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "Do you want to fired this employee?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, fired!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const res = await axiosSecure.patch(`/users/admin/${id}`, {
            isFired: true,
          });
          if (res.data.modifiedCount > 0) {
            refetch();
            Swal.fire({
              title: "Fired!",
              text: "The employee has been fired.",
              icon: "success",
              showConfirmButton: false,
              timer: 1500,
            });
          }
        } catch (error) {
          Swal.fire({
            title: "Oops!",
            text: error.message,
            icon: "error",
          });
        }
      }
    });
  };
  const handleMakeHR = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "Do you want to make this employee to HR?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, confirm!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const res = await axiosSecure.patch(`/users/admin/make-hr/${id}`, {
            role: "hr",
          });
          if (res.data.modifiedCount > 0) {
            refetch();
            Swal.fire({
              title: "Fired!",
              text: "The employee has been converted to HR.",
              icon: "success",
              showConfirmButton: false,
              timer: 1500,
            });
          }
        } catch (error) {
          Swal.fire({
            title: "Oops!",
            text: error.message,
            icon: "error",
          });
        }
      }
    });
  };

  return (
    <React.Fragment>
      <Typography
        textAlign="center"
        component="h2"
        variant="h4"
        fontWeight={600}
        mb={4}
      >
        All Employee List
      </Typography>
      <TableContainer component={Paper}>
        <Table aria-label="customized table">
          <TableHead>
            <TableRow hover>
              <TableCell sx={{ fontWeight: "bold" }} align="center">
                Name
              </TableCell>
              <TableCell sx={{ fontWeight: "bold" }} align="center">
                Designation
              </TableCell>
              <TableCell sx={{ fontWeight: "bold" }} align="center">
                Make HR
              </TableCell>
              <TableCell sx={{ fontWeight: "bold" }} align="center">
                Status
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {visibleRows.map((user) => (
              <TableRow key={user._id} hover>
                <TableCell align="center" component="th" scope="user">
                  {user.name}
                </TableCell>
                <TableCell align="center">{user.designation}</TableCell>
                <TableCell align="center">
                  {user.userRole === "hr" ? (
                    <Typography fontWeight={600} color="green">
                      HR
                    </Typography>
                  ) : (
                    <Button
                      onClick={() => handleMakeHR(user._id)}
                      variant="outlined"
                    >
                      Make HR
                    </Button>
                  )}
                </TableCell>
                <TableCell align="center">
                  {user.isFired ? (
                    <Typography fontWeight={600} color="red">
                      Fired
                    </Typography>
                  ) : (
                    <Button
                      onClick={() => handleFired(user._id)}
                      variant="contained"
                    >
                      Fire
                    </Button>
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={filteredUsers.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </TableContainer>
    </React.Fragment>
  );
};
export default AllEmployeeList;
