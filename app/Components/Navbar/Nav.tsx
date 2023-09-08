import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Menu from '@mui/icons-material/Menu';
import { Badge, MenuItem, Container } from '@mui/material';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';

const Nav = () => {
    return ( 
    <Container>
      <AppBar position="static" style={{ background: '#10151A' }}>
        <Toolbar  className='flex justify-between'>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            className='grow-0'
          >
            <img src="/images/Logo.png" alt="" />
          </IconButton>
          <div className=' flex grow px-20'>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} className='px-2 mx-2 font-montserrat font-bold'>
              Product
            </Typography>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} className='px-2 mx-2 font-montserrat font-bold'>
              Use cases
            </Typography>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} className='px-2 mx-2 font-montserrat font-bold'>
              Learn
            </Typography>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} className='px-2 mx-2 font-montserrat font-bold'>
              About
            </Typography>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} className='px-2 mx-2 font-montserrat font-bold'>
              Jobs
            </Typography>
          </div>
          <div className='grow-0'>
            <Button variant='contained' className='bg-buttonColor hover:bg-black text-white font-light font-montserrat'>Login</Button>
          </div>
          
        </Toolbar>
      </AppBar>
    </Container>
     );
}
 
export default Nav;