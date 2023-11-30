import {  } from "@mui/material/styles";
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

const AllEmployeeList = () => {
  const [users] = useUser();
  const filteredUsers = users.filter(user => user.userRole !== "admin" && user.isVerified)
  
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
    () => filteredUsers.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage),
    [page, rowsPerPage, filteredUsers]
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
        All Employee List
      </Typography>
      <TableContainer component={Paper}>
        <Table aria-label="customized table">
          <TableHead>
            <TableRow hover>
              <TableCell sx={{fontWeight: "bold"}} align="center">Name</TableCell>
              <TableCell sx={{fontWeight: "bold"}} align="center">Designation</TableCell>
              <TableCell sx={{fontWeight: "bold"}} align="center">Make HR</TableCell>
              <TableCell sx={{fontWeight: "bold"}} align="center">Fire</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {visibleRows.map((user) => (
              <TableRow key={user._id} hover>
                <TableCell align="center" component="th" scope="user">
                  {user.name}
                </TableCell>
                <TableCell align="center">
                  {user.designation}
                </TableCell>
                <TableCell align="center">
                  <Button variant="outlined">Make HR</Button>
                </TableCell>
                <TableCell align="center">
                  <Button variant="contained">Fire</Button>
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
}
export default AllEmployeeList;

// import { Button, IconButton } from "@mui/material";
// import CloseIcon from "@mui/icons-material/Close";
// import CheckIcon from "@mui/icons-material/Check";
// import useUser from "../../../hooks/useUser";
// import { DataGrid } from "@mui/x-data-grid";
// import Swal from "sweetalert2";
// import useAxiosSecure from "../../../hooks/useAxiosSecure";
// import { NavLink } from "react-router-dom";

// const AllEmployeeList = () => {
//   const [users] = useUser();
//   const axiosSecure = useAxiosSecure();
//   const columns = [
//     { field: "name", headerName: "Name", width: 130 },
//     { field: "designation", headerName: "Designation", width: 180 },
//     {
//       field: "make-hr",
//       headerName: "Make HR",
//       width: 80,
//       renderCell: (params) => (
//         <IconButton
//           onClick={() => handleVerify(params.row.id)}
//           aria-label="delete"
//         >
//           {params.row.isVerified ? <CheckIcon /> : <CloseIcon />}
//         </IconButton>
//       ),
//     },
//     {
//       field: "fire",
//       headerName: "Fire",
//       width: 80,
//       renderCell: (params) => (
//         <Button
//           disabled={params.row.isVerified ? false : true}
//           variant="contained"
//           onClick={() => handlePay(params.row.id)}
//         >
//           Fire
//         </Button>
//       ),
//     },
//     {
//       field: "details",
//       headerName: "Details",
//       width: 130,
//       renderCell: (params) => (
//         <NavLink to={`/dashboard/employee/${params.row.id}`}>
//           <Button variant="outlined">Details</Button>
//         </NavLink>
//       ),
//     },
//   ];

//   const handleVerify = (id) => {
//     Swal.fire({
//       title: "Are you sure?",
//       text: "Do you want to verify this user?",
//       icon: "warning",
//       showCancelButton: true,
//       confirmButtonColor: "#3085d6",
//       cancelButtonColor: "#d33",
//       confirmButtonText: "Yes, verify user!",
//     }).then(async (result) => {
//       if (result.isConfirmed) {
//         try {
//           const isVerifiedUser = { isVerified: true };
//           const res = await axiosSecure.patch(`/users/${id}`, isVerifiedUser);
//           if (res.data.modifiedCount > 0) {
//             Swal.fire({
//               title: "Verified!",
//               text: "Your user has been verified.",
//               icon: "success",
//             });
//           }
//         } catch (error) {
//           Swal.fire({
//             title: "Oops!",
//             text: error.message,
//             icon: "error",
//           });
//         }
//       }
//     });
//   };

//   const handlePay = async (id) => {
//     const res = await axiosSecure.get(`/users/${id}`);

//     const { value: formValues } = await Swal.fire({
//       title: "Enter Salary Information",
//       html: `
//         <label for="salary">Salary</label>
//         <input type="number" id="salary" class="swal2-input" value=${res.data.salary}>
//         <label for="month">Month</label>
//         <input type="text" id="month" class="swal2-input" placeholder="Enter month">
//         <label for="year">Year</label>
//         <input type="number" id="year" class="swal2-input" placeholder="Enter year">        
//       `,
//       preConfirm: () => {
//         const salary = document.getElementById("salary").value;
//         const month = document.getElementById("month").value;
//         const year = document.getElementById("year").value;
//         const transactionId = `tid-${Date.now()}`;
//         const payDetails = {
//           name: res.data.name,
//           email: res.data.email,
//           image: res.data.image,
//           designation: res.data.designation,
//           salary,
//           month,
//           year,
//           transactionId,
//         };
//         return payDetails;
//       },
//     });
//     if (formValues) {
//       formValues.salary = parseInt(formValues.salary);
//       formValues.year = parseInt(formValues.year);
//       try {
//         const res = await axiosSecure.post(
//           `/users/employee/pay-salary`,
//           formValues
//         );
//         if (res.data._id) {
//           Swal.fire({
//             title: "You have paid the salary!",
//             icon: "success",
//             timer: 1500,
//             showConfirmButton: false,
//           });
//         }
//       } catch (error) {
//         Swal.fire("Oops!", error.message, "error");
//       }
//     }
//   };

//   const rows = users
//     .filter((user) => user.userRole !== "hr" && user.isVerified)
//     .map((ele) => {
//       return {
//         id: ele._id,
//         name: ele.name,
//         designation: ele.designation,
//         isVerified: ele.isVerified,
//         bank_account_no: ele.bank_account_no,
//         salary: ele.salary,
//       };
//     });
//   return (
//     <div style={{ height: 400, width: "100%" }}>
//       <DataGrid
//         rows={rows}
//         columns={columns}
//         initialState={{
//           pagination: {
//             paginationModel: { page: 0, pageSize: 5 },
//           },
//         }}
//         pageSizeOptions={[5, 10]}
//         checkboxSelection
//       />
//     </div>
//   );
// };

// export default AllEmployeeList;
