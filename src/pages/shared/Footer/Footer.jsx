import { Box, Container, Grid, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <Box component="section" bgcolor="white" py={8}>
      <Container maxWidth="xl">
        <Box>
          <Grid container>
            <Grid item xs={12} sm={12} md={6} lg={3}>
              <NavLink style={{ textDecoration: "none" }} to="/">
                <Typography
                  variant="h5"
                  noWrap
                  color="primary"
                  sx={{
                    mr: 2,
                    fontFamily: "sans-serif",
                    fontWeight: 700,
                    textDecoration: "none",
                    mt: 5,
                  }}
                >
                  TalentPulse
                </Typography>
              </NavLink>
              <Typography>Providing reliable tech since 2023</Typography>
            </Grid>

            <Grid item xs={12} sm={12} md={6} lg={3}>
              <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
                <Typography variant="h6" mb={1} fontWeight={500}>
                  Services
                </Typography>
                <NavLink style={{ textDecoration: "none" }} to="">
                  <Typography
                    sx={{
                      color: "gray",
                      transition: "0.1s",
                      width: "fit-content",
                      "&:hover": { color: "primary.main" },
                    }}
                  >
                    Branding
                  </Typography>
                </NavLink>
                <NavLink style={{ textDecoration: "none" }} to="">
                  <Typography
                    sx={{
                      color: "gray",
                      transition: "0.1s",
                      width: "fit-content",
                      "&:hover": { color: "primary.main" },
                    }}
                  >
                    Design
                  </Typography>
                </NavLink>
                <NavLink style={{ textDecoration: "none" }} to="">
                  <Typography
                    sx={{
                      color: "gray",
                      transition: "0.1s",
                      width: "fit-content",
                      "&:hover": { color: "primary.main" },
                    }}
                  >
                    Marketing
                  </Typography>
                </NavLink>
                <NavLink style={{ textDecoration: "none" }} to="">
                  <Typography
                    sx={{
                      color: "gray",
                      transition: "0.1s",
                      width: "fit-content",
                      "&:hover": { color: "primary.main" },
                    }}
                  >
                    Development
                  </Typography>
                </NavLink>
              </Box>
            </Grid>

            <Grid item xs={12} sm={12} md={6} lg={3}>
              <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
                <Typography variant="h6" mb={1} fontWeight={500}>
                  Company
                </Typography>
                <NavLink style={{ textDecoration: "none" }} to="/">
                  <Typography
                    sx={{
                      color: "gray",
                      transition: "0.1s",
                      width: "fit-content",
                      "&:hover": { color: "primary.main" },
                    }}
                  >
                    Home
                  </Typography>
                </NavLink>
                <NavLink style={{ textDecoration: "none" }} to="/about">
                  <Typography
                    sx={{
                      color: "gray",
                      transition: "0.1s",
                      width: "fit-content",
                      "&:hover": { color: "primary.main" },
                    }}
                  >
                    About
                  </Typography>
                </NavLink>
                <NavLink style={{ textDecoration: "none" }} to="/dashboard">
                  <Typography
                    sx={{
                      color: "gray",
                      transition: "0.1s",
                      width: "fit-content",
                      "&:hover": { color: "primary.main" },
                    }}
                  >
                    Dashboard
                  </Typography>
                </NavLink>
                <NavLink style={{ textDecoration: "none" }} to="/contact">
                  <Typography
                    sx={{
                      color: "gray",
                      transition: "0.1s",
                      width: "fit-content",
                      "&:hover": { color: "primary.main" },
                    }}
                  >
                    Contact
                  </Typography>
                </NavLink>
              </Box>
            </Grid>

            <Grid item xs={12} sm={12} md={6} lg={3}>
              <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
                <Typography variant="h6" mb={1} fontWeight={500}>
                  Legal
                </Typography>
                <NavLink style={{ textDecoration: "none" }} to="">
                  <Typography
                    sx={{
                      color: "gray",
                      transition: "0.1s",
                      width: "fit-content",
                      "&:hover": { color: "primary.main" },
                    }}
                  >
                    Terms of use
                  </Typography>
                </NavLink>
                <NavLink style={{ textDecoration: "none" }} to="">
                  <Typography
                    sx={{
                      color: "gray",
                      transition: "0.1s",
                      width: "fit-content",
                      "&:hover": { color: "primary.main" },
                    }}
                  >
                    Privacy policy
                  </Typography>
                </NavLink>
                <NavLink style={{ textDecoration: "none" }} to="">
                  <Typography
                    sx={{
                      color: "gray",
                      transition: "0.1s",
                      width: "fit-content",
                      "&:hover": { color: "primary.main" },
                    }}
                  >
                    Cookie policy
                  </Typography>
                </NavLink>
              </Box>
            </Grid>
          </Grid>
        </Box>

        <Typography component="p" textAlign="center" pt={8}>
          Copyright &copy; 2023 - All right reserved by Talent Pulse
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
