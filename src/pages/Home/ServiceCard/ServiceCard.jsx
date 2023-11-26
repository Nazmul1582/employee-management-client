import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function ServiceCard({service}) {
  return (
    <Card elevation={5}>
      <CardMedia
        sx={{ height: 200 }}
        image={service.image}
        title="service image"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {service.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {service.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="medium">Learn More</Button>
      </CardActions>
    </Card>
  );
}
