import { Box, IconButton } from "@mui/material";

interface IList {
    pp: string,
}

const listWork: IList[] = [
    {pp: '/images/p1_f5.png'},
    {pp: '/images/p2_f5.png'},
    {pp: '/images/p3_f5.png'},
    {pp: '/images/p4_f5.png'},
    {pp: '/images/p5_f5.png'},
]

const boxDesign ={
    borderRadius: '20px',
    width: '150px',
    height: '150px',
    textAlign: 'center'
}

const List_People = () =>
    listWork.map((item)=>{
        return ( 
            <Box sx={boxDesign} className='text-center px-3 py-3'>
                <img style={{width: '100%', borderRadius: '25px'}} src={`${item.pp}`} alt="" />
            </Box> 
        );
    })
 
export default List_People;