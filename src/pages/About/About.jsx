import {
  Box,
  Container,
  Typography,
} from "@mui/material";

const About = () => {
  return (
    <>
      <Container
        maxWidth="xl"
        sx={{ minHeight: "calc(100vh - 69px)", height: "100%", pt: 5, pb: 10 }}
      >
        <Box textAlign="center" py={10} mb={5} bgcolor="primary.main" color="white" borderRadius={1}>
            <Typography variant="h2" gutterBottom>Welcome to Talent Pulse</Typography>
            <Typography variant="body1" gutterBottom>Revolutionizing Workforce Management for a Brighter Future</Typography>
        </Box>
        
      </Container>
    </>
  );
};

export default About;
