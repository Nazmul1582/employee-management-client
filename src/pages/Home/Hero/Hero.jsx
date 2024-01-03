import { Box, Button, Container, Grid, Typography, useMediaQuery } from "@mui/material";
import { Link } from "react-router-dom";

const Hero = () => {
  const bannerHeight = {
    minHeight: 'calc(100vh - 69px)',
    height: "100%"
  }
  const isSmallScreen = useMediaQuery('(min-width: 600px)')
  return (
    <Box
      component="section"
      style={bannerHeight}
      sx={{
        py: 8,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundImage: `linear-gradient(45deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.4)), url('https://i.ibb.co/1ns2wGx/discussing-office.jpg')`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover"
      }}
    >
      <Container maxWidth="xl">
        <Grid container alignItems="center">
          <Grid item xs={12} md={6}>
            <Typography
              component="h1"
              variant={isSmallScreen ? "h2" : "h4"}
              fontWeight="600"
              color="white"
            >
              Pulse of Talent Success
            </Typography>
            <Typography color="#e0e0e0" sx={{ pb: "30px", pt: "10px" }}>
              Empower your business with seamless employee management. Elevate
              productivity, streamline operations, and nurture success with
              Talent Pulse.
            </Typography>
            <Link to="/dashboard">
              <Button size="large" variant="contained">
                Explore More
              </Button>
            </Link>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Hero;
