import { Box, Button, Typography } from "@mui/material";

const boxSX = {
    border: "1px solid #2A3744",
    borderRadius: "25px",
    backgroundColor: "#121E28",
}

const Sixth_Frame = () => {
    return ( 
        <Box className='my-20 py-3 px-10 mx-32 lg:mx-56 text-center' sx={boxSX} >
            <Typography variant="h2" className="text-white font-bold py-10">Weekly digest</Typography>
            <Typography variant="h4" className="text-txt_sixth font-bold py-3">Latest news on DAOs and Web3</Typography>
            <Box className='flex flex-wrap text-center justify-center py-10'>
                <input className="bg-inp_sixth pe-40 ps-10 mx-3 text-2xl" style={{border: "1px solid #2A3744", borderRadius: "15px", paddingTop: "15px", paddingBottom: "15px"}} type="text" placeholder="Your email" />
                <Button className="rounded-2xl bg-bn_sixth text-black px-5 mx-3 font-bold">Subscribe</Button>
            </Box>
        </Box>
     );
}
 
export default Sixth_Frame;