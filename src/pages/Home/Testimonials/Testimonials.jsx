import { Box, Container, Grid } from "@mui/material";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const Testimonials = () => {
  return (
    <Box component="section" sx={{ py: "5rem" }}>
      <Container maxWidth="xl">
        <Grid item xs={12}>
          <SectionTitle
            heading="Testimonials"
            subHeading="Discover the Success Stories of Companies Transformed by Talent Pulse"
          />
        </Grid>
      </Container>
    </Box>
  );
};

export default Testimonials;
