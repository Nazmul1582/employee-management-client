import { Avatar, Box, Container, Paper, Typography } from "@mui/material";
import { useLoaderData } from "react-router-dom";

const Details = () => {
  const { data: user } = useLoaderData();
  return (
    <Box>
      <Container maxWidth="xl">
        <Paper
          elevation={6}
          sx={{ textAlign: "center", p: 5 }}
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
      </Container>
    </Box>
  );
};

export default Details;
