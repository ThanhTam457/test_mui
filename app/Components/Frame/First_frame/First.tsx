import { Typography, Box } from "@mui/material";
import DAO_button from "./DAO";
import ImagePicture from "./ImagePicture";

const First_Frame = () => {
    return ( 
        <Box className="mt-5 pt-5 text-center"> 
            <div className="flex justify-center">
                <img className="align-left px-10" src="/images/star.png" alt="" />
                <Typography variant="h2" component="div" className="align-middle font-bold text-white">Ready for every project</Typography>
            </div>
            <div className="flex flex-wrap justify-center px-60">
               <DAO_button/>
            </div>
            <div className="align-middle mt-5 mx-5 px-20">
                <ImagePicture/>
            </div>
            <Typography variant="h6" component="div" position='sticky' className="inline-flex justify-center items-center py-3 px-5 text-base font-bold text-center rounded-full text-black bg-yellow-500" style={{marginTop: '-50px'}} >1000+ projects launched on Superdao</Typography>
        </Box>
     );
}
 
export default First_Frame;