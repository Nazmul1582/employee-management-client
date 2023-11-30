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
import { Link } from "@mui/material";

export const listItemsForHR = (
  <React.Fragment>
    <ListItemButton href="/dashboard/employee-list">
      <ListItemIcon>
        <FormatListBulletedIcon />
      </ListItemIcon>
      <ListItemText primary="Employee List" />
    </ListItemButton>
    <ListItemButton href="/dashboard/progress">
      <ListItemIcon>
        <DonutLargeIcon />
      </ListItemIcon>
      <ListItemText primary="Progress" />
    </ListItemButton>
  </React.Fragment>
);

export const listItemsForEmployee = (
  <React.Fragment>
    <ListItemButton href="/dashboard/payment-history">
      <ListItemIcon>
        <PaymentIcon />
      </ListItemIcon>
      <ListItemText primary="Payment History" />
    </ListItemButton>
    <ListItemButton href="/dashboard/work-sheet">
      <ListItemIcon>
        <BarChartIcon />
      </ListItemIcon>
      <ListItemText primary="Work Sheet" />
    </ListItemButton>
  </React.Fragment>
);

export const listItemsForAdmin = (
  <React.Fragment>
    <ListItemButton href="/dashboard/all-employee-list">
      <ListItemIcon>
        <FormatListBulletedIcon />
      </ListItemIcon>
      <ListItemText primary="All Employee List" />
    </ListItemButton>
  </React.Fragment>
);

export const secondaryListItems = (
  <React.Fragment>
    <ListItemButton>
      <ListItemIcon>
        <HomeIcon />
      </ListItemIcon>
      <Link href="/" underline="none" color="black">
        <ListItemText primary="Home" />
      </Link>
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <PermContactCalendarIcon />
      </ListItemIcon>
      <Link href="/contact" underline="none" color="black">
        <ListItemText primary="Contact" />
      </Link>
    </ListItemButton>
  </React.Fragment>
);
