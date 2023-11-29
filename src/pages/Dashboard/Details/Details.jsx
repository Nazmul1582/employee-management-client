import { Box, Container, Typography } from '@mui/material';
import { useLoaderData } from 'react-router-dom';

const Details = () => {
    const {data: user} = useLoaderData();
    return (
        <Box>
            <Container maxWidth="xl">
            <Typography>The details information of {user.name}</Typography>            
            <Typography>PhotoURL: {user.image}</Typography>
            <Typography>Designation: {user.designation}</Typography>
            </Container>
        </Box>
    );
};

export default Details;