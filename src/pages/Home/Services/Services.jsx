import { Box, Container, Grid } from "@mui/material";
import ServiceCard from "../ServiceCard/ServiceCard";
import SectionName from "../../../components/SectionName/SectionName";

const Services = () => {
  const ourServices = [
    {
      id: 1,
      title: "Employee Information Management",
      description:
        "Maintain a comprehensive database with detailed employee information, ensuring easy access to relevant data for efficient management.",
      image: "https://i.ibb.co/d58MD5m/employee.png",
    },
    {
      id: 2,
      title: "Payroll and Compensation",
      description:
        "Automate salary calculations, deductions, and compensation management, ensuring accuracy and compliance with payroll regulations.",
      image: "https://i.ibb.co/znyCVNt/payroll.png",
    },
    {
      id: 3,
      title: "Work Hours and Attendance Tracking",
      description:
        "Efficiently track work hours, manage attendance records, and generate insightful reports to optimize workforce productivity.",
      image: "https://i.ibb.co/R7Sk063/package-tracking.png",
    },
    {
      id: 4,
      title: "Contract and Documentation Management",
      description:
        "Streamline the creation and management of employment contracts and other documentation, ensuring compliance and consistency.",
      image: "https://i.ibb.co/WyMCxpT/content-management.png",
    },
    {
      id: 5,
      title: "Performance Evaluation and Feedback",
      description:
        "Implement tools for assessing employee performance, providing constructive feedback, and fostering continuous professional development.",
      image: "https://i.ibb.co/PYJYw11/feedback.png",
    },
    {
      id: 6,
      title: "Employee Engagement and Satisfaction",
      description:
        "Develop strategies and tools to enhance employee engagement, satisfaction, and overall well-being for a positive workplace culture.",
      image: "https://i.ibb.co/TLHYKY3/employee-management.png",
    },
  ];

  return (
    <Box component="section" sx={{ py: "5rem" }}>
      <Container maxWidth="xl">
        <SectionName name="Services" />
        <Grid container justifyContent="center" alignItems="center" spacing={4}>
          {ourServices.map((service) => (
            <Grid item xs={12} md={6} lg={4} key={service.id}>
              <ServiceCard service={service} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Services;
