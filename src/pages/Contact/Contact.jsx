import { Button, Container, Grid, Paper, TextField } from "@mui/material";

const Contact = () => {
  return (
    <Container maxWidth="xl" sx={{ py: "80px" }}>
      <Grid container spacing={3}>
        <Grid item xs={12}></Grid>
        <Grid item xs={12}>
          <Paper component="form" elevation={2} sx={{padding: 5, display: "flex", flexDirection: "column", gap: 3, width: "80%", mx: "auto"}}>
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
