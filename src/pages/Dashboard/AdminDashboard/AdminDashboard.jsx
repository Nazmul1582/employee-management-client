import { Avatar, Box, Grid, Paper, Typography } from "@mui/material";
import moment from "moment";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import useUser from "../../../hooks/useUser";
import useSalary from "../../../hooks/useSalary";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Legend } from "recharts";

const AdminDashboard = ({ user }) => {
  const formatedDate = moment().format("ddd, DD MMM YYYY");
  const [users] = useUser();
  const [salaries] = useSalary("");

  const salaryByMonth = salaries.reduce((acc, currObj) => {
    const key = `${currObj.month}-${currObj.year}`;
    if (!acc[key]) {
      acc[key] = 0;
    }
    acc[key] += currObj.salary;
    return acc;
  }, {});

  const chartData = Object.keys(salaryByMonth)
    .map((date) => {
      const [month, year] = date.split("-");
      return { month, year, totalSalary: salaryByMonth[date] };
    })
    .sort(
      (a, b) =>
        new Date(`${a.year}-${a.month}`) - new Date(`${b.year}-${b.month}`)
    );

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
        <Grid
          container
          alignItems="center"
          justifyContent="space-between"
          spacing={5}
        >
          <Grid item>
            <Grid
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: 1,
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
        spacing={5}
        my={3}
      >
        <Grid item sm={12} md={12} lg={12} xl={6}>
          <Paper
            sx={{
              p: 5,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography variant="h6" fontWeight={600} pb={2}>
              Employees History
            </Typography>
            <PieChart
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              height={350}
              width={350}
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
        <Grid item sm={12} md={12} lg={12} xl={6}>
          <Paper>
            <Typography
              variant="h6"
              fontWeight={600}
              textAlign="center"
              pt={4}
              pb={2}
            >
              Salary History
            </Typography>
            <Box sx={{ p: 3, height: 400, minWidth: 500 }}>
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={chartData}
                  margin={{
                    top: 20,
                    right: 30,
                    left: 20,
                    bottom: 20,
                  }}
                  barSize={20}
                >
                  <XAxis
                    dataKey={({ month, year }) =>
                      `${month.slice(0, 3)}-${year.toString().slice(-2)}`
                    }
                    scale="point"
                    padding={{ left: 10, right: 10 }}
                  />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <CartesianGrid strokeDasharray="3 3" />
                  <Bar
                    dataKey="totalSalary"
                    fill="#8884d8"
                    background={{ fill: "#eee" }}
                    maxBarSize={80}
                  />
                </BarChart>
              </ResponsiveContainer>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AdminDashboard;
