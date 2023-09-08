import { Box, Container, Typography } from "@mui/material";

const Jumbotron = () => {
    return ( 
        <Box>
            <Container className="py-20 px-60 mx-auto text-center lg:py-20">
                <Typography variant="h1" component="div" className="mb-4 text-6xl font-bold tracking-tight leading-none text-white">The easiest way to start a DAO</Typography>
                <Typography variant="h6" component="div" className="mb-8 text-lg font-normal text-white lg:text-xl sm:px-16 lg:px-20 font-montserrat">An all-in-one platform to start, manage and grow a decentralized autonomous organization</Typography>
                <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
                    <a href="#" className="inline-flex justify-center items-center py-3 px-5 text-base font-extrabold text-center text-black rounded-lg bg-yellow-500 hover:bg-yellow-700 focus:ring-4 font-montserrat">
                        Get started
                    </a>
                </div>
            </Container>
        </Box>
     );
}
 
export default Jumbotron;