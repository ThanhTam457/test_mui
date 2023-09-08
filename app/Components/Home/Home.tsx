import { Box, Button, Container, Grid, colors } from "@mui/material";
import Nav from "../Navbar/Nav";
import Jumbotron from "../Jumbotron/Jumbotron";
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import First_Frame from "../Frame/First_frame/First";
import Second_Frame from "../Frame/Second_frame/Second";
import Third_Frame from "../Frame/Third-frame/Third";
import Fourth_Frame from "../Frame/Fourth_frame/Fourth";
import Fifth_Frame from "../Frame/Fifth_frame/Fifth";
import Sixth_Frame from "../Frame/Sixth_frame/Sixth";
import Seventh_Frame from "../Frame/Seventh_frame/Seventh";


const Home = () => {
    return ( 
        <Box className="bg-background">
            <Nav/>
            <Jumbotron/>
            <div className="text-center">
                <KeyboardDoubleArrowDownIcon style={{color: '#425870'}}/>
            </div>
            <First_Frame/>
            <Second_Frame/>
            <Third_Frame/>
            <Fourth_Frame/>
            <Fifth_Frame/>
            <Box className='pb-20'>
                <Sixth_Frame/>
            </Box>
            <Seventh_Frame/>
        </Box>
     );
}
 
export default Home;