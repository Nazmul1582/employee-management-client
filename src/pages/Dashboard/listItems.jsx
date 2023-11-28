import * as React from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import DetailsIcon from '@mui/icons-material/Details';
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import BarChartIcon from "@mui/icons-material/BarChart";
import PaymentIcon from '@mui/icons-material/Payment';
import HomeIcon from '@mui/icons-material/Home';
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar';
import { Link } from "@mui/material";

export const mainListItems = (
  <React.Fragment>
    <ListItemButton>
      <ListItemIcon>
        <FormatListBulletedIcon />
      </ListItemIcon>
      <Link href="/employee-list" underline="none" color="black">
        <ListItemText primary="Employee List" />
      </Link>
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <DetailsIcon />
      </ListItemIcon>
      <Link href="/details" underline="none" color="black">
        <ListItemText primary="Details" />
      </Link>
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <DonutLargeIcon />
      </ListItemIcon>
      <Link href="/progress" underline="none" color="black">
        <ListItemText primary="Progress" />
      </Link>
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <BarChartIcon />
      </ListItemIcon>
      <Link href="/work-sheet" underline="none" color="black">
        <ListItemText primary="Work Sheet" />
      </Link>
    </ListItemButton>

    <ListItemButton>
      <ListItemIcon>
        <PaymentIcon />
      </ListItemIcon>
      <Link href="/payment-history" underline="none" color="black">
        <ListItemText primary="Payment History" />
      </Link>
    </ListItemButton>

    <ListItemButton>
      <ListItemIcon>
        <FormatListBulletedIcon />
      </ListItemIcon>
      <Link href="/all-employee-list" underline="none" color="black">
        <ListItemText primary="All Employee List" />
      </Link>
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
