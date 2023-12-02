import * as React from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import DonutLargeIcon from "@mui/icons-material/DonutLarge";
import BarChartIcon from "@mui/icons-material/BarChart";
import PaymentIcon from "@mui/icons-material/Payment";
import HomeIcon from "@mui/icons-material/Home";
import PermContactCalendarIcon from "@mui/icons-material/PermContactCalendar";
import { NavLink } from "react-router-dom";

export const listItemsForHR = (
  <React.Fragment>
    <NavLink to="/dashboard/employee-list" style={{textDecoration: "none", color:"black"}}>
    <ListItemButton>
      <ListItemIcon>
        <FormatListBulletedIcon />
      </ListItemIcon>
      <ListItemText primary="Employee List" />
    </ListItemButton>
    </NavLink>
    <NavLink to="/dashboard/progress" style={{textDecoration: "none", color:"black"}}>
    <ListItemButton>
      <ListItemIcon>
        <DonutLargeIcon />
      </ListItemIcon>
      <ListItemText primary="Progress" />
    </ListItemButton>
    </NavLink>
  </React.Fragment>
);

export const listItemsForEmployee = (
  <React.Fragment>
    <NavLink to="/dashboard/payment-history" style={{textDecoration: "none", color:"black"}}>
    <ListItemButton>
      <ListItemIcon>
        <PaymentIcon />
      </ListItemIcon>
      <ListItemText primary="Payment History" />
    </ListItemButton>
    </NavLink>
    <NavLink to="/dashboard/work-sheet" style={{textDecoration: "none", color:"black"}}>
    <ListItemButton>
      <ListItemIcon>
        <BarChartIcon />
      </ListItemIcon>
      <ListItemText primary="Work Sheet" />
    </ListItemButton>
    </NavLink>
  </React.Fragment>
);

export const listItemsForAdmin = (
  <React.Fragment>
    <NavLink to="/dashboard/all-employee-list" style={{textDecoration: "none", color:"black"}}>
    <ListItemButton>
      <ListItemIcon>
        <FormatListBulletedIcon />
      </ListItemIcon>
      <ListItemText primary="All Employee List" />
    </ListItemButton>
    </NavLink>
  </React.Fragment>
);

export const secondaryListItems = (
  <React.Fragment>
    <NavLink to="/" style={{textDecoration: "none", color: "black"}}>
      <ListItemButton>
        <ListItemIcon>
          <HomeIcon />
        </ListItemIcon>
        <ListItemText primary="Home" />
      </ListItemButton>
    </NavLink>
    <NavLink to="/contact" style={{textDecoration: "none", color: "black"}}>
      <ListItemButton>
        <ListItemIcon>
          <PermContactCalendarIcon />
        </ListItemIcon>
        <ListItemText primary="Contact" />
      </ListItemButton>
    </NavLink>
  </React.Fragment>
);
