import { Box, Grid, Typography } from "@mui/material";
import ListDesign from "./ListDesign";

const Second_Frame = () => {
    return ( 
        <Box className='py-20'>
            <Grid container className="py-10">
                <Grid item xs={11} className="text-center">
                    <Typography variant="h2" component="div" className="align-middle font-bold text-white px-5">Designed for the full journey</Typography>
                </Grid>
                <Grid item xs={1}>
                    <Grid item xs={0.5}>
                        <img className="w-3" src="images/star2.png" alt="" />
                    </Grid>
                    <Grid item xs={2}>
                        <img className="w-5" src="images/star3.png" alt="" />
                    </Grid>
                </Grid>
            </Grid>
            <ListDesign/>
        </Box>
     );
}
 
export default Second_Frame;