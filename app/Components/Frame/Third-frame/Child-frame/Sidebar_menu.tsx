import { Box, IconButton, Link, Typography } from "@mui/material";

export interface Sidebar {
    icon: string,
    name: string,
}

export interface List_Sidebar extends Array<Sidebar>{}

type props = {
    arr: List_Sidebar,
}

const Menu_for_frame = ({arr}: props) => 
    arr.map((item)=>{
        return ( 
            <Link href='#' underline="none" className='flex flex-wrap align-middle text-center mx-3 hover:bg-bn_hover rounded-lg focus:bg-opacity-10'>
                <IconButton color="inherit"><img className="w-6 px-3 py-1" src={`${item.icon}`} alt="" /></IconButton>
                <Typography variant="h6" className="text-white font-normal pt-2">{item.name}</Typography>
            </Link>
        );
    })

 
export default Menu_for_frame;