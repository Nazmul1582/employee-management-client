import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const { user, logout } = useAuth();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar sx={{ background: "white" }} position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Link style={{ textDecoration: "none" }} to="/">
            <Typography
              variant="h5"
              noWrap
              color="primary"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "sans-serif",
                fontWeight: 700,
                textDecoration: "none",
              }}
            >
              TalentPulse
            </Typography>
          </Link>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="black"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              <Link style={{ textDecoration: "none", color: "black" }} to="/">
                <MenuItem
                  onClick={handleCloseNavMenu}
                  sx={{ "&:hover": { color: "#4540df" } }}
                >
                  <Typography textAlign="center" px={5}>
                    Home
                  </Typography>
                </MenuItem>
              </Link>
              {user && (
                <Link
                  style={{ textDecoration: "none", color: "black" }}
                  to="/dashboard"
                >
                  <MenuItem
                    onClick={handleCloseNavMenu}
                    sx={{ "&:hover": { color: "#4540df" } }}
                  >
                    <Typography textAlign="center" px={5}>
                      Dashboard
                    </Typography>
                  </MenuItem>
                </Link>
              )}
              <Link
                style={{ textDecoration: "none", color: "black" }}
                to="/contact"
              >
                <MenuItem
                  onClick={handleCloseNavMenu}
                  sx={{ "&:hover": { color: "#4540df" } }}
                >
                  <Typography textAlign="center" px={5}>
                    Contact
                  </Typography>
                </MenuItem>
              </Link>
            </Menu>
          </Box>
          <Link style={{ textDecoration: "none", flexGrow: 1 }} to="/">
            <Typography
              variant="h5"
              noWrap
              color="primary"
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                fontFamily: "sans-serif",
                fontWeight: 700,
                textDecoration: "none",
              }}
            >
              TalentPulse
            </Typography>
          </Link>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
            }}
          >
            <Link style={{ textDecoration: "none" }} to="/">
              <Button
                sx={{
                  my: 2,
                  color: "black",
                  fontWeight: 600,
                  "&:hover": { color: "#4540df" },
                }}
              >
                Home
              </Button>
            </Link>
            {user && (
              <Link style={{ textDecoration: "none" }} to={`/dashboard`}>
                <Button
                  sx={{
                    my: 2,
                    color: "black",
                    fontWeight: 600,
                    "&:hover": { color: "#4540df" },
                  }}
                >
                  Dashboard
                </Button>
              </Link>
            )}
            <Link style={{ textDecoration: "none" }} to="/contact">
              <Button
                sx={{
                  my: 2,
                  color: "black",
                  fontWeight: 600,
                  "&:hover": { color: "#4540df" },
                }}
              >
                Contact
              </Button>
            </Link>
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            {user ? (
              <>
                <IconButton sx={{ p: 0 }}>
                  <Avatar alt="user profile photo" src={user.photoURL} />
                </IconButton>
                <Button
                  onClick={logout}
                  variant="contained"
                  sx={{ ml: "10px" }}
                >
                  Logout
                </Button>
              </>
            ) : (
              <Link to="/login">
                <Button variant="contained" sx={{ ml: "10px" }}>
                  Login
                </Button>
              </Link>
            )}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
