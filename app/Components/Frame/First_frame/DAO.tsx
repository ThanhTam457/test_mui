'use client'

import { Box, Button } from "@mui/material";

interface listColor {
    name: string;
    color: string;
}

interface daoList extends Array<listColor>{};

const daoList: daoList = [
    {name: 'Investment', color: 'FFB4D3'},
    {name: 'Startup', color: 'FFC24C'},
    {name: 'Service', color: 'D387F7'},
    {name: 'Community', color: '77E6FF'},
    {name: 'Impact', color: '23C9DE'},
    {name: 'DeFi', color: 'FF9E9E'},
]


const DAO_button = () => {
    return ( 
        <Box className='flex flex-wrap px-5 justify-center'>
            {daoList.map((dao)=>(
                <Button key={dao.name} className="inline-flex justify-center items-center py-3 px-5 mx-5 my-5 text-base font-extrabold text-center rounded-full font-montserrat" style={{background: '#182632', color: `#${dao.color}`}}>{dao.name} DAO</Button>
            ))}
            <Button className="inline-flex justify-center items-center py-3 px-5 mx-5 my-5 text-base font-extrabold text-center rounded-full font-montserrat" style={{background: '#182632', color: "#707F8D"}}>+ More</Button>
        </Box>
     );
}
 
export default DAO_button;