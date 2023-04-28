import { Box, Typography } from "@mui/material"
import '../../styles/spacer.css'
import CursorTrailer from "../../components/cursorTrailer"
import Home from "../../components/home"


const SinglePagePortfolio = () => {

    return (
        <>
            <CursorTrailer />
            <Box sx={{width: "100%", height: "80vh", backgroundColor: "#FA7268"}}>
                <Home />
            </Box>

            <div className="spacer layer1"></div>
            
            <Box sx={{width: "100%", height: "80vh", backgroundColor: "#001220"}}>
                <Typography variant="h2" color="white">About!</Typography>
            </Box>
            
            <div className="spacer layer2"></div>

            <Box sx={{width: "100%", height: "80vh", backgroundColor: "#FA7268"}}>
                <Typography variant="h2" color="white">Projects</Typography>
            </Box>

            <div className="spacer layer3"></div>
            
            <Box sx={{width: "100%", height: "80vh", backgroundColor: "#001220"}}>
                <Typography variant="h2" color="white">Contact</Typography>
            </Box>
        </>
    )
}

export default SinglePagePortfolio