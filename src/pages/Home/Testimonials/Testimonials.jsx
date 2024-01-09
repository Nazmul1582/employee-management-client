import { Box, Container, Grid } from "@mui/material";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import Carousel from "./Carousel";

const Testimonials = () => {
  return (
    <Box component="section" pt={10}>
      <Container maxWidth="xl">
        <Grid item xs={12}>
          <SectionTitle
            heading="Testimonials"
            subHeading="Discover the Success Stories of Companies Transformed by Talent Pulse"
          />
          <Carousel />
        </Grid>
      </Container>
    </Box>
  );
};

export default Testimonials;
