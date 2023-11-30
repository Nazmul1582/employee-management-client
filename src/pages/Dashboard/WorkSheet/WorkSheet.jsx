import {
  Button,
  Container,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  TextField,
  Typography,
} from "@mui/material";

const WorkSheet = () => {
  return (
    <Container maxWidth="xl" sx={{ py: "80px" }}>
      <Grid container>
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
            <Typography variant="h6" fontWeight={600} textAlign="center">
              Work Sheet
            </Typography>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Tasks</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Tasks"
              >
                <MenuItem value={10}>A</MenuItem>
                <MenuItem value={20}>B</MenuItem>
                <MenuItem value={30}>C</MenuItem>
              </Select>
            </FormControl>
            <TextField id="outlined-basic" label="Hours" variant="filled" />
            <TextField id="outlined-basic" label="Date" variant="filled" />
            <Button variant="contained">Submit</Button>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default WorkSheet;
