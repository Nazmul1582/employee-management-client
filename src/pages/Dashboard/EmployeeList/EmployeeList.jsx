import { Button, IconButton } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import CheckIcon from '@mui/icons-material/Check';
import useUser from "../../../hooks/useUser";
import { DataGrid } from "@mui/x-data-grid";
import axiosPublic from "../../../utils/AxiosPublic";

const columns = [
  { field: "name", headerName: "Name", width: 130 },
  { field: "email", headerName: "Email", width: 180 },
  {
    field: "isVerified",
    headerName: "Is Verified",
    width: 80,
    renderCell: (params) => (
      <IconButton onClick={() => handleVerify(params.row.id)} aria-label="delete">
        {params.row.isVerified ? <CheckIcon /> : <CloseIcon />}
        {console.log("from table - ",params.row.isVerified)}
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
const handleVerify = async(id) => {
  const isVerifiedUser = {isVerified: true}
  const res = await axiosPublic.patch(`/users/${id}`, isVerifiedUser)
  console.log(res.data);
};
const handlePay = (id) => {
  console.log(id);
};
const handleButtonClick = (id) => {
  console.log(id);
};

const EmployeeList = () => {
  const [users] = useUser();
  const rows = users.map((ele) => {
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