import { Avatar, Box, Container, Paper, Typography } from "@mui/material";
import { useLoaderData } from "react-router-dom";
import Chart from "./Chart";

const Details = () => {
  const { data: user } = useLoaderData();
  return (
    <Box>
      <Container maxWidth="xl">
        <Paper
          sx={{ textAlign: "center", p: 3, mb: 4 }}
        >
          <Avatar
            src={user.image}
            alt="employee photo"
            sx={{ width: 150, height: 150, mx: "auto", mb: 3 }}
          />
          <Typography component="h2" variant="h6" fontWeight={600}>
            Employee Name: {user.name}
          </Typography>
          <Typography variant="h6" fontWeight={500}>
            Designation: {user.designation}
          </Typography>
        </Paper>
        <Paper sx={{p: 3, height: 400}}>
            <Chart email={user.email} />
        </Paper>
      </Container>
    </Box>
  );
};

export default Details;
