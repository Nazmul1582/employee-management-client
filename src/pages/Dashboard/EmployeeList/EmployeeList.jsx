import useUser from "../../../hooks/useUser";
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'name', headerName: 'Name', width: 70 },
  { field: 'email', headerName: 'Email', width: 130 },
  { field: 'varified', headerName: 'Varified', width: 130 },
  { field: 'bank_account_no', headerName: 'Bank Account', width: 130 },
  { field: 'salary', headerName: 'Salary', width: 130 },
  { field: 'pay', headerName: 'Pay', width: 130 },
  { field: 'details', headerName: 'Details', width: 130 },
];

const EmployeeList = () => {
    const [users] = useUser();
    console.log(users);
    const userRow = users.map(ele => {
        return{
            id: ele._id,
            name: ele.name,
            email: ele.email,
            varified: false,
            bank_account_no: ele.bank_account_no,
            salary: ele.salary,
            pay: "pay btn",
            details: "details"
        }
    })
    return (
        <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={userRow}
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