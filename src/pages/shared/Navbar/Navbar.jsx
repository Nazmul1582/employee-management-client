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

const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

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
            <Link href="/dashboard">
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
            <Tooltip title="Open settings">
              <IconButton sx={{ p: 0 }}>
                <Avatar
                  alt="Remy Sharp"
                  src="https://i.ibb.co/n11GR29/muslim-avater.jpg"
                />
              </IconButton>
            </Tooltip>
            <Button variant="contained" sx={{ml: "10px", backgroundColor: "white", color: "black"}}>Logout</Button>
            {/* <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography component="a" href={`/${setting}`} textAlign="center" textTransform="capitalize" sx={{textDecoration: "none", color: "black"}}>{setting}</Typography>
                </MenuItem>
              ))}
            </Menu> */}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
