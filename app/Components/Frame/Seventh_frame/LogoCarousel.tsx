'use client'
import { Box, Card, Typography } from "@mui/material";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';


const data = [
    '/images/p1_f7.png',
    '/images/p2_f7.png',
    '/images/p3_f7.png',
    '/images/p4_f7.png',
    '/images/p5_f7.png',
    '/images/p6_f7.png',
    '/images/p7_f7.png',
    '/images/p8_f7.png',
    '/images/p9_f7.png',
    '/images/p10_f7.png',
    '/images/p11_f7.png',
    '/images/p12_f7.png',
]

const Logo_Carousel = () => {
    return ( 
        <Box className='flex flex-wrap'>
            {data.map((item)=>(
                <Box>
                    
                </Box>
            ))}
        </Box>
     );
}
 
export default Logo_Carousel;