import { Outlet } from "react-router-dom";
import Navbar from "../pages/shared/Navbar/Navbar";
import Footer from "../pages/shared/Footer/Footer";
import { Box } from "@mui/material";

const Main = () => {
  return (
    <>
      <Navbar />
      <Box bgcolor="secondary.main">
        <Outlet />
      </Box>
      <Footer />
    </>
  );
};

export default Main;
