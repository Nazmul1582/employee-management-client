import {
  Box,
  Container,
  Grid,
  IconButton,
  Paper,
  Typography,
} from "@mui/material";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import HubOutlinedIcon from "@mui/icons-material/HubOutlined";
import ThumbUpAltOutlinedIcon from "@mui/icons-material/ThumbUpAltOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";

const ourApproach = () => {
  return (
    <Box component="section" pt={10}>
      <SectionTitle
        heading="Our Approach"
        subHeading="Unlocking Success with Our Approach"
      />
      <Container maxWidth="xl">
        <Grid container justifyContent="center" alignItems="center" spacing={4}>
          {ourApproachItems.map((item) => (
            <Grid item xs={12} md={6} lg={4} key={item.id}>
              <Paper
                sx={{
                  backgroundColor: "white",
                  textAlign: "center",
                  p: 5,
                  transition: "all 0.3s",
                  "&:hover": {
                    backgroundColor: "primary.main",
                    color: "white",
                    "& .MuiIconButton-root": {
                      backgroundColor: "secondary.main",
                      color: "primary.main"
                    },
                    "& .MuiTypography-root": {
                      color: "white",
                    },
                  },
                }}
              >
                <IconButton size="large" sx={{backgroundColor: "secondary.main", color: "primary.main", mb: 2}}>{item.icon}</IconButton>
                <Typography gutterBottom variant="h6" fontWeight={500}>
                  {item.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {item.description}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default ourApproach;

const ourApproachItems = [
  {
    id: 1,
    icon: <HubOutlinedIcon style={{ fontSize: "40px"}} />,
    title: "How We Work",
    description:
      "At Talent Pulse, our work methodology revolves around efficiency and effectiveness. We prioritize streamlined processes, cutting-edge technology, and a commitment to excellence. Discover how our approach can elevate your employee management experience to new heights.",
  },
  {
    id: 2,
    icon: <ThumbUpAltOutlinedIcon style={{ fontSize: "40px"}} />,
    title: "Why Choose Us",
    description:
      "Why choose Talent Pulse for your employee management needs? Our dedication to innovation, customer satisfaction, and unparalleled service sets us apart. Explore the reasons why businesses trust us to optimize their workforce management and unlock success.",
  },
  {
    id: 3,
    icon: <PeopleOutlinedIcon style={{ fontSize: "40px"}} />,
    title: "Meet the Team",
    description:
      "Get to know the passionate individuals who drive Talent Pulse's mission forward. Our diverse and talented team is committed to delivering top-notch solutions and ensuring your experience with us is exceptional. Meet the faces shaping the future of employee management.",
  },
];
