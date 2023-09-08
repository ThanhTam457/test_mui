import { Box, Typography } from "@mui/material";
import List_People from "./ListPeople";
import List_Word from "./ListWord";

const Fifth_Frame = () => {
    return ( 
        <Box className='py-20 text-center'>
            <Typography variant="h2" component="div" className="align-middle font-bold text-white px-5">Help at every step</Typography>
            <Box className='flex flex-wrap px-5 justify-center'>
                <List_People/>
            </Box>
            <Box className='flex flex-wrap px-5 justify-center'>
                <List_Word/>
            </Box>
        </Box>
     );
}
 
export default Fifth_Frame;