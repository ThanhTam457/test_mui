import { Box, Button, IconButton, Typography } from "@mui/material";

const buttonSocial = [
    '/images/twitter.png',
    '/images/discord.png',
    '/images/maybay.png',
    '/images/insta.png',
    '/images/xich.png',
]

const Child01 = () => {
    return ( 
        <Box className='rounded-3xl text-left mb-0'>
            <Box className='flex text-center w-69'>
                <img className="object-cover w-full rounded-t-2xl" style={{height: '8.75rem'}} src="/images/bg_eye.png" alt="" />
            </Box>
            <IconButton color="inherit" size="large"><img className='w-16 -mt-10 ms-3' src="/images/p3_f3.png" alt="" /></IconButton>
            <Box className='bg-bg_third_2 w-69 rounded-b-2xl' style={{marginTop: '-53px'}}>
                <Box className='flex justify-end pe-5 pt-5 pb-3'>
                    {buttonSocial.map((item)=>(
                        <img className="px-1" src={`${item}`} alt="" />
                    ))}
                </Box>
                <Typography variant="h5" className="text-white font-bold px-5">Demo DAO</Typography>
                <Box className='flex items-start pb-3'>
                    <Typography className="text-txt_third font-light text-xs px-5">superdao.co/demodao</Typography>
                    <img src="/images/copy.png" alt="" />
                </Box>
                <Typography className="text-white font-light text-xs px-5 py-2">Welcome to the Demo DAO 👋 Enjoy your experience of being a part of your first DAO</Typography>
                <Box className='flex px-5 py-5'>
                    <Button className="bg-bn_child bg-opacity-10 py-1 px-4 me-3 rounded-lg text-white font-light" style={{textTransform: 'none'}}>Smart contract</Button>
                    <Button className="bg-bn_child bg-opacity-10 py-1 px-4 mx-3 rounded-full text-white font-light" style={{textTransform: 'none'}}>Support</Button>
                </Box>
            </Box>
        </Box>
     );
}
 
export default Child01;