import {
  Box,
  CardMedia,
  Container,
  Grid,
  Typography,
  useMediaQuery,
} from "@mui/material";

const About = () => {
  const isMediumLayoutAndUp = useMediaQuery("(min-width: 600px)");
  return (
    <>
      <Container
        maxWidth="xl"
        sx={{ minHeight: "calc(100vh - 69px)", height: "100%", pt: 5, pb: 10 }}
      >
        <Box textAlign="center" py={10} mb={5} bgcolor="primary.main" color="white" borderRadius={1}>
            <Typography variant="h2" gutterBottom>Welcome to Talent Pulse</Typography>
            <Typography variant="body1" gutterBottom>Revolutionizing Workforce Management for a Brighter Future</Typography>
        </Box>
        <Typography
          variant={`${isMediumLayoutAndUp ? "h2" : "h4"}`}
          fontWeight={600}
          >
          Our Mission:
        </Typography>
        <Typography
          variant={`${isMediumLayoutAndUp ? "h2" : "h4"}`}
          fontWeight={600}
          color="primary"
          gutterBottom
        >
          Business Success
        </Typography>

        <Grid container pt={3} spacing={3}>
          <Grid item sm={12} lg={4}>
            <Box textAlign="justify">
              <Typography variant="body2" mb={2}>
                At Talent Pulse, our mission is to revolutionize the way
                organizations manage their workforce. We are committed to
                providing innovative, user-friendly solutions that simplify HR
                processes, elevate administrative efficiency, and empower
                employees to thrive in their roles.
              </Typography>

              <Typography fontWeight={600} fontSize={16} gutterBottom>
                Core Values:
              </Typography>

              <Typography variant="body2" mb={2}>
                Excellence: We are driven by a commitment to excellence in all
                aspects of our work. From feature-rich HR tools to responsive
                customer support, we strive for nothing less than outstanding
                performance.
              </Typography>

              <Typography variant="body2" mb={2}>
                Collaboration: Collaboration is at the heart of our approach. We
                believe in fostering a collaborative environment that brings
                together HR professionals, administrators, and employees for a
                seamless and harmonious work experience.
              </Typography>

              <Typography variant="body2" mb={2}>
                Innovation: Innovation fuels our solutions. We stay ahead of
                industry trends, harnessing the latest technologies to deliver
                cutting-edge features that meet the evolving needs of modern
                workplaces.
              </Typography>
            </Box>
          </Grid>
          <Grid item sm={12} lg={4}>
            <Box textAlign="justify">
              <Typography fontWeight={600} fontSize={16} gutterBottom>Our Employee Management System For HR Professionals:</Typography>
              <Typography variant="body2" mb={2}>
                Effortlessly manage employee data, track performance, and
                streamline recruitment processes with our comprehensive HR
                tools. From onboarding to talent management, we provide the
                tools you need to drive HR excellence.
              </Typography>
              <Typography variant="body2" mb={2}>
                For Administrators: Empower administrators with intuitive
                dashboards, real-time analytics, and customizable workflows.
                Simplify task management, monitor employee engagement, and
                ensure organizational compliance with ease.
              </Typography>
              <Typography variant="body2" mb={2}>
                For Employees: Create a positive employee experience with
                self-service portals, performance insights, and interactive
                communication features. From accessing payrolls to managing work
                schedules, empower your employees to take control of their work
                lives.
              </Typography>
            </Box>
          </Grid>
          <Grid item sm={12} lg={4}>
            <Box textAlign="justify">
              <Typography fontWeight={600} fontSize={16} gutterBottom>Security and Compliance</Typography>
              <Typography variant="body2" mb={2}>
                At Talent Pulse, we prioritize the security of your data. Our
                Employee Management System is built with robust security
                measures to safeguard sensitive information, ensuring compliance
                with industry standards and regulations.
              </Typography>
              <Typography variant="body2" mb={2}>
                Join Us in Transforming Workplaces We invite you to join us on
                our journey to transform workplaces. Whether you&apos;re an HR
                professional seeking innovative tools, an administrator looking
                to streamline processes, or an employee eager for a more
                connected work experience, Talent Pulse is here for you.
              </Typography>
              <Typography variant="body2" mb={2}>
                Thank you for choosing Talent Pulse as your trusted partner in
                employee management. Together, let&apos;s shape the future of
                work.
              </Typography>
              <CardMedia component="img" image="https://i.ibb.co/1ns2wGx/discussing-office.jpg" title="about image" sx={{maxHeight: 250, borderRadius: 3}} />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default About;
