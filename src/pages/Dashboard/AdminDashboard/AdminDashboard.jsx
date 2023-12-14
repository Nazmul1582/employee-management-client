import { Avatar, Box, Grid, Paper, Typography } from "@mui/material";
import moment from 'moment'

const AdminDashboard = ({ user }) => {
  const formatedDate = moment().format("ddd, DD MMM YYYY")
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
                gap: 2
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
    </Box>
  );
};

export default AdminDashboard;
