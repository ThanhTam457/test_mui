'use client'

import { Box, Link } from "@mui/material";
const d_list = [
    'Organisation design',
    'Smart contract development',
    'Fundraising',
    'Launch marketing',
    'Member onboarding',
    'Contributor management',
    'DAO operations',
]
const ListDesign = () => {
    return ( 
        <Box>
            {d_list.map((item)=>(
                <Link variant="h2" underline="none"  className="font-bold text-center hover:text-blueText" style={{color: '#37424D', whiteSpace: "pre-line"}}><pre className="my-1">{item}</pre></Link>
            ))}
        </Box>
     );
}
 
export default ListDesign;