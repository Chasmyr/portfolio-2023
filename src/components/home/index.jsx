import { Box, Typography } from "@mui/material"

const Home = () => {

    return (
        <Box sx={{width: "100%", display: "flex", justifyContent: "center"}}>
            <Box width="80%">
                <Typography variant="h2" color="white">Home !</Typography>
            </Box>
        </Box>
    )
}

export default Home