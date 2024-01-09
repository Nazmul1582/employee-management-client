import { Box, Container, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box component="section" bgcolor="#263238" py={8} mt={10}>
      <Container maxWidth="xl">
        <Typography component="p" textAlign="center" color="white">
        Copyright &copy; 2023 - All right reserved by Talent Pulse
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
