import { Box, Paper, Typography } from "@mui/material";

const SectionName = ({heading, subHeading}) => {
    return (
        <Box maxWidth="sm" margin="auto" textAlign="center">
            <Paper elevation={5} sx={{background: "#fff", px: "20px", py: "8px", borderRadius: "50px", mx:"auto", width: "fit-content"}}>
                <Typography textAlign="center" fontWeight={600}>{heading}</Typography>
            </Paper>
            <Typography variant="h5" fontWeight={600} my="30px">{subHeading}</Typography>
        </Box>
    );
};

export default SectionName;