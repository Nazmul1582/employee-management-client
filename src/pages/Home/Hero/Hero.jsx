import { Box, Button, Container, Grid, Typography } from "@mui/material";

const Hero = () => {
  return (
    <Box
      component="section"
      sx={{
        py: "8rem",
        backgroundImage: `linear-gradient(45deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.4)), url('https://i.ibb.co/1ns2wGx/discussing-office.jpg')`,
        backgroundPosition: "center",
      }}
    >
      <Container maxWidth="xl">
        <Grid container alignItems="center">
            <Grid item xs={12} md={6}>
                <Typography component="h1" variant="h2" fontWeight="600" color="white">
                Pulse of Talent Success
                </Typography>
                <Typography color="white" sx={{pb: "30px", pt:"10px"}}>Empower your business with seamless employee management. Elevate productivity, streamline operations, and nurture success with Talent Pulse.</Typography>
                <Button variant="contained">Read More</Button>
            </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Hero;
