import { Box, Button, Grid, Typography } from "@mui/material";
import { Link, useRouteError } from "react-router-dom";

const NotFound = () => {
  const error = useRouteError();

  return (
    <Box minHeight="100vh" display="flex" justifyContent="center" alignItems="center">
      <Grid textAlign="center">
        <Typography variant="h3" fontWeight={600}>Oops!</Typography>
        <Typography my={2}>
          {error.status} {error.statusText}
        </Typography>
        <Link to="/">
          <Button variant="contained">Go Home</Button>
        </Link>
      </Grid>
    </Box>
  );
};

export default NotFound;
