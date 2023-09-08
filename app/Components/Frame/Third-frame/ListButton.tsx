import { Box, Link } from "@mui/material";

const c_list = [
    'NFT membership',
    'Member directory',
    'Treasury',
    'Feed',
    'Governance',
    'App store',
]

const Category = () => {
    return ( 
        <Box className='flex flex-wrap justify-center px-5 py-5'>
            {c_list.map((item)=>(
                <Link underline="none" variant="h4" className="font-light text-center hover:text-yellow-300 px-3 py-3" style={{color: '#8395A7'}}>{item}</Link>
            ))}
        </Box>
     );
}
 
export default Category;