import { Grid, IconButton, Box, Typography, Button, Link, makeStyles } from "@mui/material";
import { List_Sidebar } from "./Sidebar_menu";
import Menu_for_frame from "./Sidebar_menu";
import Child01 from "./Child-Child-frame01/Child_Child01";
import Card_Child from "./Card_Child";

const listIcon = [
    '/images/p1_f3.png',
    '/images/p2_f3.png',
    '/images/p3_f3.png',
    '/images/p4_f3.png',
    '/images/p5_f3.png',
    '/images/p6_f3.png',
    '/images/p7_f3.png',
    '/images/p8_f3.png',
]


const listIcon_next = [
    '/images/p9_f3.png',
    '/images/p10_f3.png',
]

const listMenu1 : List_Sidebar =[
    {icon: '/images/Home.png', name: "About"},
    {icon: '/images/mem.png', name: "Members"},
    {icon: '/images/diamon.png', name: "Treasury"},
    {icon: '/images/voting.png', name: "Voting"},
    {icon: '/images/feed.png', name: "Feed"},
] 

const listMenu2 : List_Sidebar =[
    {icon: '/images/setting.png', name: "Setting"},
] 

const listMenu3 : List_Sidebar =[
    {icon: '/images/paper.png', name: "Whitepaper"},
    {icon: '/images/paper.png', name: "Rules"},
    {icon: '/images/paper.png', name: "Jobs"},
] 

const boxSX ={
    paddingBottom: '0.25rem',
    paddingTop: '0.25rem',
    "&:hover": {
        borderLeft: "1px solid orange"
    }
}

const Child_Frame = () => {
    return ( 
        <Grid container spacing={0}>
            <Grid item xs={0.75} className="bg-bg_third text-center rounded-s-3xl">
                <Box className='text-center pb-64'>
                    {listIcon.map((item)=>(
                        <Box sx={boxSX}>
                            <IconButton color="inherit" size="small"  edge="end"><img className="w-10" src={`${item}`} alt="" /></IconButton>
                        </Box>
                    ))}
                </Box>
                <Box className='pt-10 text-center align-middle'>
                    {listIcon_next.map((item)=>(
                        <Box sx={boxSX}>
                            <IconButton color="inherit" size="small"  edge="end"><img className="w-10"  src={`${item}`} alt="" /></IconButton>
                        </Box>
                        ))}
                </Box>
                
            </Grid>
            <Grid item xs={3} className="bg-bg_third_2 text-left">
                <Box className='flex pt-5'>
                    <IconButton color="inherit" size="large"><img className='w-16' src="/images/p3_f3.png" alt="" /></IconButton>
                    <Box className='py-3'>
                        <Typography variant="h6" className="text-white font-normal">Demo DAO</Typography>
                        <Typography className="text-txt_third font-light">124 members</Typography>
                    </Box>
                </Box>
                <Box className='py-3'>
                    <Menu_for_frame arr={listMenu1}/>
                </Box>
                <Box className='py-3'>
                    <Typography variant="h6" className="text-txt_third font-normal px-5">Admin</Typography>
                    <Menu_for_frame arr={listMenu2}/>
                </Box>
                <Box className='py-3'>
                    <Box className='flex flex-wrap justify-between'>
                        <Typography variant="h6" className="text-txt_third font-normal px-5">Documents</Typography>
                        <Typography variant="h6" className="text-txt_third font-normal px-5">+</Typography>
                    </Box>
                    <Menu_for_frame arr={listMenu3}/>
                </Box>
                <Box className='py-3'>
                    <Typography className="text-txt_third font-extralight px-5">... Show more</Typography>
                </Box>
            </Grid>
            <Grid item xs={8.25} className="bg-bg_child_third rounded-e-3xl">
                <Box className='py-5 px-5'>
                    <Child01/>
                </Box>
                <Box className='py-2 px-5 text-left flex justify-between'>
                    <Box className='flex justify-normal'>
                        <Typography className="text-white font-bold pe-3">Membership NFTs</Typography>
                        <Typography className="text-txt_child_third_2 font-bold">3</Typography>
                    </Box>
                    <Box className='flex justify-end align-middle items-center'>
                        <Typography className="text-orange-500 px-3 text-sm">Customize</Typography>
                        <Typography className="text-txt_child_third_2 ps-2 font-bold">...</Typography>
                    </Box>
                </Box>
                <Box className='py-3 px-5 flex text-center'>
                    <Card_Child/>
                </Box>
            </Grid>
        </Grid>
       
     );
}
 
export default Child_Frame;