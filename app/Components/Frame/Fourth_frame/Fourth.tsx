import { Box, Typography } from "@mui/material";
import List_Workwith from "./ListWork";

const Fourth_Frame = () => {
    return ( 
        <Box className='py-20 text-center'>
            <Typography variant="h2" component="div" className="align-middle font-bold text-white px-5">Works with</Typography>
            <Box className='flex flex-wrap px-10 justify-center mx-20'>
                <List_Workwith/>
            </Box>
        </Box>
     );
}
 
export default Fourth_Frame;