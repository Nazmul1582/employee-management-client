import { Box, Container, Typography, useTheme } from "@mui/material";
import MailOutlineOutlinedIcon from "@mui/icons-material/MailOutlineOutlined";

const NewsLetter = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundImage: `linear-gradient(180deg, ${theme.palette.primary.main}80, ${theme.palette.primary.dark}), url(https://i.ibb.co/1ns2wGx/discussing-office.jpg)`,
        py: 10,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Container
        maxWidth="xl"
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            display: "grid",
            placeItems: "center",
            background: theme.palette.secondary.main,
            width: 100,
            height: 100,
            borderRadius: "50%",
            padding: 2,
            boxShadow: theme.shadows[4],
            marginBottom: 5,
          }}
        >
          <MailOutlineOutlinedIcon
            sx={{ fontSize: "3rem", color: theme.palette.primary.main }}
          />
        </Box>
        <Box color="white" textAlign="center">
          <Typography variant="h3" gutterBottom>
            Subscribe to Our Newsletter
          </Typography>
          <Typography variant="body1">
            Stay updated with our latest news, events, and exclusive offers.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default NewsLetter;
