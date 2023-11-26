import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MobileStepper from "@mui/material/MobileStepper";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import { Grid } from "@mui/material";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

var testimonials = [
  {
    id: 1,
    name: "Emily Johnson",
    position: "HR Manager",
    company: "Tech Innovations Inc.",
    testimonial:
      "Talent Pulse has transformed our HR processes. The user-friendly interface and powerful features have streamlined our workflow, making employee management efficient and effective. Highly recommended!",
    avatar: "https://i.ibb.co/vmF2krP/author1.jpg",
  },
  {
    id: 2,
    name: "Alex Rodriguez",
    position: "CEO",
    company: "Global Solutions Co.",
    testimonial:
      "Implementing Talent Pulse was a strategic move for us. The platform's capabilities have significantly improved our workforce management, and the support from the Talent Pulse team has been exceptional. We're impressed!",
    avatar: "https://i.ibb.co/2qRg9GC/author2.jpg",
  },
  {
    id: 3,
    name: "Sophie Chen",
    position: "Operations Manager",
    company: "Innovate Tech Labs",
    testimonial:
      "Talent Pulse is a game-changer for our organization. The customization options allow us to tailor the system to our specific needs. It has simplified our HR tasks and allowed us to focus on strategic initiatives. Excellent product!",
    avatar: "https://i.ibb.co/DzyRT8V/author3.jpg",
  },
  {
    id: 4,
    name: "Michael Turner",
    position: "Finance Director",
    company: "Finance Dynamics Ltd.",
    testimonial:
      "Our experience with Talent Pulse has been fantastic. The payroll and compensation features have saved us time and reduced errors. The system is reliable, and the customer support is top-notch. Thumbs up!",
    avatar: "https://i.ibb.co/RBdp1gd/author4.jpg",
  },
  {
    id: 5,
    name: "Olivia Williams",
    position: "IT Manager",
    company: "Tech Solutions Corp.",
    testimonial:
      "As an IT manager, I appreciate the security features of Talent Pulse. The system is robust, and the data is well-protected. It has become an integral part of our employee management strategy. Great job!",
    avatar: "https://i.ibb.co/n11GR29/muslim-avater.jpg",
  },
];

function Carousel() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = testimonials.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <Grid container justifyContent="center">
      <Grid item xs={12} md={6} sx={{flexGrow: 1, }}>
        <Paper
          square
          elevation={0}
          sx={{
            display: "flex",
            alignItems: "center",
            height: 50,
            pl: 2,
            bgcolor: "background.default",
          }}
        >
          <Typography>{testimonials[activeStep].label}</Typography>
        </Paper>
        <AutoPlaySwipeableViews
          axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          index={activeStep}
          onChangeIndex={handleStepChange}
          enableMouseEvents
        >
          {testimonials.map((review, index) => (
            <div key={review.id}>
              {Math.abs(activeStep - index) <= 2 ? (
                <>
                  <Grid container spacing={2} justifyContent="center">
                    <Grid item>
                      <Box
                        component="img"
                        sx={{
                          display: "block",
                          maxWidth: 400,
                          overflow: "hidden",
                          height: "60px",
                          width: "60px",
                          borderRadius: "100%",
                          objectFit: "cover",
                        }}
                        src={review.avatar}
                        alt={review.name}
                      />
                    </Grid>
                    <Grid item>
                      <Typography variant="h6" fontWeight={600}>
                        {review.name}
                      </Typography>
                      <Typography>{review.position}</Typography>
                    </Grid>
                  </Grid>
                  <Typography variant="body2" color="text.secondary" textAlign="center" py="30px">
                    {review.testimonial}
                  </Typography>
                </>
              ) : null}
            </div>
          ))}
        </AutoPlaySwipeableViews>
        <MobileStepper
          steps={maxSteps}
          position="static"
          activeStep={activeStep}
          nextButton={
            <Button
              size="small"
              onClick={handleNext}
              disabled={activeStep === maxSteps - 1}
            >
              Next
              {theme.direction === "rtl" ? (
                <KeyboardArrowLeft />
              ) : (
                <KeyboardArrowRight />
              )}
            </Button>
          }
          backButton={
            <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
              {theme.direction === "rtl" ? (
                <KeyboardArrowRight />
              ) : (
                <KeyboardArrowLeft />
              )}
              Back
            </Button>
          }
        />
      </Grid>
    </Grid>
  );
}

export default Carousel;
