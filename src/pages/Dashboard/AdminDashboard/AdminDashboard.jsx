import { Avatar, Box, Grid, Paper, Typography } from "@mui/material";
import moment from "moment";
import { PieChart, Pie, Cell, Tooltip } from "recharts";
import useUser from "../../../hooks/useUser";

const AdminDashboard = ({ user }) => {
  const formatedDate = moment().format("ddd, DD MMM YYYY");
  const [users] = useUser();
  console.log(users);
  const totalHR = users.filter(
    (user) => user.userRole === "hr" && user.isVerified && !user.isFired
  );
  const totalEmployees = users.filter(
    (user) => user.userRole === "employee" && user.isVerified && !user.isFired
  );
  const totalNotVerified = users.filter((user) => !user.isVerified);
  const totalFired = users.filter((user) => user.isFired);

  const data = [
    { name: "HR", value: totalHR.length },
    { name: "Employees", value: totalEmployees.length },
    { name: "Not Verified", value: totalNotVerified.length },
    { name: "Fired", value: totalFired.length },
  ];
  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

  return (
    <Box>
      <Paper sx={{ p: 3 }}>
        <Grid container alignItems="center" justifyContent="space-between">
          <Grid item>
            <Grid
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: 2,
              }}
            >
              <Avatar
                src={user.image}
                alt={`image of ${user.userRole}`}
                sx={{ width: 70, height: 70 }}
              />
              <Typography fontWeight={500}>Welcome Admin</Typography>
            </Grid>
          </Grid>
          <Grid item>
            <Typography>{formatedDate}</Typography>
          </Grid>
        </Grid>
      </Paper>
      <Grid
        container
        justifyContent="space-between"
        alignItems="center"
        gap={2}
        my={3}
      >
        <Grid item flex={1}>
          <Paper>
            <Typography variant="h6" fontWeight={600} textAlign="center" py={2}>
              Employees History
            </Typography>
            <PieChart
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              height={370}
              width={370}
            >
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                labelLine={false}
                outerRadius={160}
                fill="#8884d8"
                dataKey="value"
              >
                {data.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </Paper>
        </Grid>
        <Grid item flex={1}>
          <Paper>
            <Typography variant="h6" fontWeight={600} textAlign="center" py={2}>
              Total Salary
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AdminDashboard;
