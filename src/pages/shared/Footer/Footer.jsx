import { Box, Container, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box component="section" bgcolor="white" py={8}>
      <Container maxWidth="xl">
        <Typography component="p" textAlign="center">
          Copyright &copy; 2023 - All right reserved by Talent Pulse
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
