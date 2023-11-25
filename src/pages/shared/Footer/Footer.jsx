import { Box, Container, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box component="section" bgcolor="#263238" paddingY="50px">
      <Container maxWidth="xl">
        <Typography component="p" textAlign="center" color="white">
        Copyright &copy; 2023 - All right reserved by Talent Pulse
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
