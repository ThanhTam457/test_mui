import { Box, Typography } from "@mui/material";

const List_Word = () => {
    return ( 
        <Box className='flex items-center flex-col'>
            <Box className='flex items-start flex-row py-3'>
                <Typography className="text-white font-bold text-5xl px-3">Success managers</Typography>
                <img src="/images/star1_f5.png" alt="" />
                <Typography className="text-white font-bold text-5xl px-3">Knowledge base</Typography>
            </Box>
            <Box className='flex items-start  flex-row py-3'> 
                <Typography className="text-white font-bold text-5xl px-3">Chat support</Typography>
                <img src="/images/star2_f5.png" alt="" />
                <Typography className="text-white font-bold text-5xl px-3">Tutorials</Typography>
                <img src="/images/star3_f5.png" alt="" />
                <Typography className="text-white font-bold text-5xl px-3">Templates</Typography>
            </Box>
            <Box className='flex items-start  flex-row py-3'>
                <Typography className="text-white font-bold text-5xl px-3">Smart Contract development</Typography>
                <img src="/images/star4_f5.png" alt="" />
                <Typography className="text-white font-bold text-5xl px-3">Events</Typography>
            </Box>
            <Box className='flex items-start  flex-row py-3'>
                <Typography className="text-white font-bold text-5xl px-3">Education</Typography>
                <img src="/images/star5_f5.png" alt="" />
                <Typography className="text-white font-bold text-5xl px-3">Guides</Typography>
            </Box>
        </Box>
     );
}
 
export default List_Word;