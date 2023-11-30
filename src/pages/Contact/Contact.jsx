import {
  Box,
  Button,
  Container,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@mui/material";

const Contact = () => {
  const address = {
    street: "123 Main Street",
    city: "Anytown",
    state: "CA",
    zipCode: "12345",
    country: "United States",
  };

  return (
    <Container maxWidth="xl" sx={{ py: "80px" }}>
      <Grid container spacing={5}>
        <Grid item xs={12} md={6} lg={4}>
          <Paper
            elevation={3}
            style={{
              padding: 5,
              textAlign: "center",
              display: "grid",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
            }}
          >
            <Box>
              <Typography variant="h6" fontWeight={600}>Address</Typography>
              <Typography>Street: {address.street}</Typography>
              <Typography>City: {address.city}</Typography>
              <Typography>State: {address.state}</Typography>
              <Typography>Zip Code: {address.zipCode}</Typography>
              <Typography>Country: {address.country}</Typography>
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6} lg={8}>
          <Paper
            component="form"
            elevation={2}
            sx={{
              padding: 5,
              display: "flex",
              flexDirection: "column",
              gap: 3,
              mx: "auto",
            }}
          >
            <Typography variant="h6" fontWeight={600} textAlign="center">Contact Us</Typography>
            <TextField id="outlined-basic" label="Name" variant="filled" />
            <TextField id="outlined-basic" label="Email" variant="filled" />
            <Button variant="contained">Submit</Button>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Contact;
