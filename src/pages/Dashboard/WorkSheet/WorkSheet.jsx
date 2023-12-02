import {
  Box,
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  TextField,
} from "@mui/material";

const WorkSheet = () => {
  return (
    <Box sx={{ py: "80px" }}>
      <Grid container justifyContent="center">
          <Paper
            component="form"
            elevation={2}
            sx={{
              // minWidth: "450px",
              padding: {
                xs: 1,
                md: 5
              },
              display: "flex",
              gap: 1,
              mx: "auto",
            }}            
          >
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Tasks</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Tasks"
                value=""
              >
                <MenuItem value={10}>A</MenuItem>
                <MenuItem value={20}>B</MenuItem>
                <MenuItem value={30}>C</MenuItem>
              </Select>
            </FormControl>
            <TextField  InputLabelProps={{sx: {fontSize: {xs: 10, md: 16}}}} id="outlined-basic" label="Hours" variant="filled" />
            <TextField  InputLabelProps={{sx: {fontSize: {xs: 10, md: 16}}}} id="outlined-basic" label="Date" variant="filled" />
            <Button variant="contained">Add</Button>
          </Paper>
        </Grid>
    </Box>
  );
};

export default WorkSheet;
