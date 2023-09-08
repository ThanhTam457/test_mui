import { Box, IconButton, Typography } from "@mui/material";

interface IList {
    icon: string,
    name: string,
}

const listWork: IList[] = [
    {icon: '/images/p1_f4.png', name: 'Ethereum'},
    {icon: '/images/p2_f4.png', name: 'Polygon'},
    {icon: '/images/p3_f4.png', name: 'Gnosis Safe'},
    {icon: '/images/p4_f4.png', name: 'Snapshot'},
    {icon: '/images/p5_f4.png', name: 'ENS'},
    {icon: '/images/p6_f4.png', name: 'OpenSea'},
]

const boxDesign ={
    backgroundColor: '#121E28',
    border: "1px solid #2A3744",
    borderRadius: '20px',
    width: '150px',
    height: '150px',
    textAlign: 'center'
}

const List_Workwith = () =>
    listWork.map((item)=>{
        return ( 
            <Box className='text-center px-5 mx-1 py-6'>
                <Box sx={boxDesign}>
                    <IconButton><img style={{width: '100%'}} src={`${item.icon}`} alt="" /></IconButton>
                </Box>
                <Typography className="text-white pt-3">{item.name}</Typography>
            </Box>
        );

    })
 
export default List_Workwith;