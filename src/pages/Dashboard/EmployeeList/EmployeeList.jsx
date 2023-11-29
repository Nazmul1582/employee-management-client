import {
  Button, IconButton
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import CheckIcon from "@mui/icons-material/Check";
import useUser from "../../../hooks/useUser";
import { DataGrid } from "@mui/x-data-grid";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const EmployeeList = () => {
  const [users] = useUser();
  const axiosSecure = useAxiosSecure()
  const columns = [
    { field: "name", headerName: "Name", width: 130 },
    { field: "email", headerName: "Email", width: 180 },
    {
      field: "isVerified",
      headerName: "Is Verified",
      width: 80,
      renderCell: (params) => (
        <IconButton
          onClick={() => handleVerify(params.row.id)}
          aria-label="delete"
        >
          {params.row.isVerified ? <CheckIcon /> : <CloseIcon />}
        </IconButton>
      ),
    },
    { field: "bank_account_no", headerName: "Bank Account", width: 130 },
    { field: "salary", headerName: "Salary", width: 80 },
    {
      field: "pay",
      headerName: "Pay",
      width: 80,
      renderCell: (params) => (
          <Button
            disabled={params.row.isVerified ? false : true}
            variant="contained"
            onClick={() => handlePay(params.row.id)}
          >
            Pay
          </Button>
      ),
    },
    {
      field: "details",
      headerName: "Details",
      width: 100,
      renderCell: (params) => (
        <Button
          onClick={() => handleButtonClick(params.row.id)}
          variant="outlined"
        >
          Details
        </Button>
      ),
    },
  ];

  const handleVerify = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "Do you want to verify this user?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, verify user!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const isVerifiedUser = { isVerified: true };
          const res = await axiosSecure.patch(`/users/${id}`, isVerifiedUser);
          if (res.data.modifiedCount > 0) {
            Swal.fire({
              title: "Verified!",
              text: "Your user has been verified.",
              icon: "success",
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

  const handlePay = async(id) => {
    const res = await axiosSecure.get(`/users/${id}`);

    const { value: formValues } = await Swal.fire({
      title: 'Enter Salary Information',
      html:`
        <label for="salary">Salary</label>
        <input type="number" id="salary" class="swal2-input" value=${res.data.salary}>
        <label for="month">Month</label>
        <input type="text" id="month" class="swal2-input" placeholder="Enter month">
        <label for="year">Year</label>
        <input type="number" id="year" class="swal2-input" placeholder="Enter year">        
      `,
      preConfirm: () =>  {
        const salary = document.getElementById('salary').value;
        const month = document.getElementById('month').value;
        const year = document.getElementById('year').value;
        const transactionId = `tid-${Date.now()}`
        const employee = res.data.email;
        const payDetails = {employee, salary, month, year, transactionId};
        return payDetails;
      }
    });
    if (formValues) {
      formValues.salary = parseInt(formValues.salary)
      formValues.year = parseInt(formValues.year)
      try {
        const res = await axiosSecure.post(`/users/employee/pay-salary`, formValues)
        if(res.data._id){
          Swal.fire({
            title: "You have paid the salary!",
            icon: "success",
            timer: 1500,
            showConfirmButton: false
          });
        }        
      } catch (error) {
        Swal.fire("Oops!", error.message, "error");
      }
    }
  };

  const handleButtonClick = (id) => {
    console.log(id);
  };

  const rows = users
    .filter((user) => user.userRole !== "admin" && user.userRole !== "hr")
    .map((ele) => {
      return {
        id: ele._id,
        name: ele.name,
        email: ele.email,
        isVerified: ele.isVerified,
        bank_account_no: ele.bank_account_no,
        salary: ele.salary,
      };
    });
  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
  );
};

export default EmployeeList;
