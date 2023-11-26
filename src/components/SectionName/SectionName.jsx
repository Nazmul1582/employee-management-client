import { Paper, Typography } from "@mui/material";

const SectionName = ({name}) => {
    return (
            <Paper elevation={5} sx={{background: "#fff", px: "20px", py: "8px", borderRadius: "50px", mx:"auto", width: "fit-content", mb: "40px"}}>
                <Typography textAlign="center" fontWeight={600}>---{name}---</Typography>
            </Paper>
    );
};

export default SectionName;