import * as React from "react";
import { styled } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import MuiDrawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Container from "@mui/material/Container";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import {
  secondaryListItems,
  listItemsForAdmin,
  listItemsForHR,
  listItemsForEmployee,
} from "./listItems";
import { Avatar, Button, Tooltip, useMediaQuery, useTheme } from "@mui/material";
import useAuth from "../../hooks/useAuth";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import useUser from "../../hooks/useUser";
import AdminDashboard from "./AdminDashboard/AdminDashboard";

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  "& .MuiDrawer-paper": {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    boxSizing: "border-box",
    ...(!open && {
      overflowX: "hidden",
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.spacing(7),
      [theme.breakpoints.up("sm")]: {
        width: theme.spacing(9),
      },
    }),
  },
}));

export default function Dashboard() {
  const theme = useTheme();
  const isMediumLayoutAndUp = useMediaQuery(theme.breakpoints.up('md'));
  const [open, setOpen] = React.useState(isMediumLayoutAndUp);
  const location = useLocation();
  const { user, logout } = useAuth();
  const [users] = useUser();
  const currentUser = users.find((ele) => ele.email === user?.email);
  let mainListItems;
  if (currentUser?.userRole === "admin") {
    mainListItems = listItemsForAdmin;
  } else if (currentUser?.userRole === "hr") {
    mainListItems = listItemsForHR;
  } else if (currentUser?.userRole === "employee") {
    mainListItems = listItemsForEmployee;
  }

  const toggleDrawer = () => {
    setOpen(!open);
  };

  React.useEffect(() => {
    const handleResize = () => {
      setOpen(isMediumLayoutAndUp);
    };
    window.addEventListener('resize', handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [isMediumLayoutAndUp]);

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="absolute" open={open}>
        <Toolbar
          sx={{
            pr: "8px",
          }}
        >
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={toggleDrawer}
            sx={{
              marginRight: "20px",
              ...(open && { display: "none" }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <NavLink style={{textDecoration:"none",}} to="/">
            <Typography
              variant="h5"
              noWrap
              sx={{
                mr: 2,
                fontFamily: "sans-serif",
                fontWeight: 700,
                color: "white",
                width: "fit-content",
                textDecoration: "none",
              }}
            >
              TalentPulse
            </Typography>
          </NavLink>
          <Box
            sx={{
              flexGrow: 1,
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
            }}
          >
            {user && (
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
            )}
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <Toolbar
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
            px: [1],
          }}
        >
          <IconButton onClick={toggleDrawer}>
            <ChevronLeftIcon />
          </IconButton>
        </Toolbar>
        <Divider />
        <List component="nav">
          {mainListItems}
          <Divider sx={{ my: 1 }} />
          {secondaryListItems}
        </List>
      </Drawer>
      <Box
        component="main"
        sx={{
          backgroundColor: (theme) =>
            theme.palette.mode === "light"
              ? theme.palette.grey[100]
              : theme.palette.grey[900],
          flexGrow: 1,
          height: "100vh",
          overflow: "auto",
        }}
      >
        <Toolbar />
        <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
          {
            (location.pathname === "/dashboard" && currentUser?.userRole === "admin") ? <AdminDashboard user={currentUser} /> : <Outlet />
          }
        </Container>
      </Box>
    </Box>
  );
}
