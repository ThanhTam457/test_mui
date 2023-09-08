import { Box, Button, Typography } from "@mui/material";
import Category from "./ListButton";
import Child_Frame from "./Child-frame/Child";

const Third_Frame = () => {
    return ( 
        <Box className = 'text-center py-10'>
            <Typography variant="h2" component="div" className="align-middle font-bold text-white px-5">All the tools in one app</Typography>
            <Category/>
            <Box className='px-20 py-10'>
                <Child_Frame/>
            </Box>
            <Box className='text-center py-2'>
                <Button className="text-bn_end_third bg-bn_end_third bg-opacity-20 font-bold text-2xl rounded-xl py-4 px-10" style={{textTransform: 'none'}}><img className="pe-2" src="/images/watch.png"/>Watch video</Button>
            </Box>
        </Box>
     );
}
 
export default Third_Frame;