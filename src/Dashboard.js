import React from "react";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import DashboardIcon from '@mui/icons-material/Dashboard';
import Divider from '@mui/material/Divider';
import SettingsIcon from '@mui/icons-material/Settings';
import Brightness1Icon from '@mui/icons-material/Brightness1';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';


function Dashboard()
{
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
      };
   
    return(
    <div >

    <Box sx={{ width: '100%' }}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} >
            <Grid item xs={3} className="maindiv">
              <h1>SB ADMIN</h1><br/>
              <hr/>
              <Button variant="text">Dashboard</Button><br/>
      <hr/>
      <br/>
      <p>INTERFACE</p>

      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        Components
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}>Button</MenuItem>
        <MenuItem onClick={handleClose}>Cards</MenuItem>
      </Menu><br/>

      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
      Utilities  
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}>Color</MenuItem>
        <MenuItem onClick={handleClose}>Border</MenuItem>
        <MenuItem onClick={handleClose}>Animation</MenuItem>
        <MenuItem onClick={handleClose}>Other</MenuItem>
      </Menu>

      <hr/>

      <p>ADDONS</p><br/>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        Pages
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}>Login</MenuItem>
        <MenuItem onClick={handleClose}>Register</MenuItem>
        <MenuItem onClick={handleClose}>ForgetPassword</MenuItem>
        <MenuItem onClick={handleClose}>404 page</MenuItem>
        <MenuItem onClick={handleClose}>Blank Page</MenuItem>
      </Menu><br/>

      <Button variant="text">Chart</Button><br/>
      <Button variant="text">Table</Button>



            </Grid>
            <Grid item xs={9}>
                <Button variant="outlined">Search</Button>
            </Grid>
        </Grid>
    </Box>
             

    </div>

    );
}




export default Dashboard;