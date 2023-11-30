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
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { Link } from "@mui/material";
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
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "sans-serif",
              fontWeight: 700,
              color: "inherit",
              textDecoration: "none",
            }}
          >
            TalentPulse
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
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
              <Link underline="none" href="/">
                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">Home</Typography>
                </MenuItem>
              </Link>
              <Link underline="none" href="/dashboard">
                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">Dashboard</Typography>
                </MenuItem>
              </Link>
              <Link underline="none" href="/contact">
                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">Contact</Typography>
                </MenuItem>
              </Link>
            </Menu>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "sans-serif",
              fontWeight: 700,
              color: "inherit",
              textDecoration: "none",
            }}
          >
            TalentPulse
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex", justifyContent: "center" },
            }}
          >
            <Link href="/">
              <Button sx={{ my: 2, color: "white", display: "block" }}>
                Home
              </Button>
            </Link>
            <Link href={`/dashboard`}>
              <Button sx={{ my: 2, color: "white", display: "block" }}>
                Dashboard
              </Button>
            </Link>
            <Link href="/contact">
              <Button sx={{ my: 2, color: "white", display: "block" }}>
                Contact
              </Button>
            </Link>
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            {user ? (
              <>
                <Tooltip title="Open settings">
                  <IconButton sx={{ p: 0 }}>
                    <Avatar alt="user profile photo" src={user.photoURL} />
                  </IconButton>
                </Tooltip>
                <Button
                  onClick={logout}
                  variant="contained"
                  sx={{ ml: "10px", backgroundColor: "white", color: "black" }}
                >
                  Logout
                </Button>
              </>
            ) : (
              <Button
                href="/login"
                variant="contained"
                sx={{ ml: "10px", backgroundColor: "white", color: "black" }}
              >
                Login
              </Button>
            )}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
