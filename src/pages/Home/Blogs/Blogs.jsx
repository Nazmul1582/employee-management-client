import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { blogs } from "./allBlogs";

const Blogs = () => {
  return (
    <Box component="section" pt={10}>
      <Container maxWidth="xl">
        <SectionTitle
          heading="Our Blogs"
          subHeading="Insights & Strategies: Empowering Your Workforce"
        />
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          spacing={4}
          my={3}
        >
          {blogs.map((service) => (
            <Grid item xs={12} md={6} lg={4} key={service.id}>
              <Card
                sx={{
                  transition: "all 0.5s",
                  "&:hover": {
                    transform: "translateY(-10px)",
                  },
                }}
              >
                <CardMedia
                  component="img"
                  height={250}
                  image={service.image}
                  title="service image"
                />
                <CardContent>
                  <Grid display="flex" justifyContent="space-between" mb={2}>
                    <Typography
                      fontSize="14px"
                      color="text.secondary"
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: 1,
                      }}
                    >
                      <AccountCircleOutlinedIcon />
                      By Admin
                    </Typography>
                    <Typography
                      fontSize="14px"
                      color="text.secondary"
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: 1,
                      }}
                    >
                      <AccessTimeIcon />
                      {service.date}
                    </Typography>
                  </Grid>
                  <Typography gutterBottom variant="h5" component="div">
                    {service.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {service.summary}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="medium">Read More</Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Blogs;
