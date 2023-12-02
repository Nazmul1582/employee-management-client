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
            minWidth: "450px",
            marginLeft: {
              xs: 16,
            },
            padding: {
              xs: 1,
              md: 5,
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
              <MenuItem value="sales">Sales</MenuItem>
              <MenuItem value="support">Support</MenuItem>
              <MenuItem value="content">Content</MenuItem>
              <MenuItem value="paper-work">Paper Work</MenuItem>
            </Select>
          </FormControl>
          <TextField
            type="number"
            id="outlined-basic"
            label="Hours"
            variant="filled"
          />
          <TextField
            type="date"
            id="outlined-basic"
            label="Date"
            variant="filled"
            sx={{width: "100%"}}
          />
          <Button variant="contained">Add</Button>
        </Paper>
      </Grid>
    </Box>
  );
};

export default WorkSheet;
