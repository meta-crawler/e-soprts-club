import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import {NavLink, Outlet } from 'react-router-dom';
import useAuth from '../../../Hook/UseAuth';
import "./DashBord.css";

const drawerWidth = 240;

function DashBord(props) {
         const {user, logOut} = useAuth();
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div className="dashbord-drawer">
      <Toolbar />
    {/*  { user.email && <div>
         <h5 className="fw-bold m-4 header-text text-center">{user.displayName}</h5>
         <p className="fw-bold  header-text text-center">{user.email}</p>
              </div>}  */}
      <Divider />
      {user && <Box>
        <NavLink className="text-decoration-none header-text fs-5 ms-3 fw-bold d-flex justify-content-center align-items-center mt-5" to="/"> <i className="fas fa-home me-2"></i>  Home</NavLink>
      <NavLink className="text-decoration-none header-text fs-5 ms-3 fw-bold d-flex justify-content-center align-items-center mt-3" to={`/dashbord/myOrder`}> <i className="fas fa-clipboard-list me-2"></i>My Orders</NavLink>
      <NavLink className="text-decoration-none header-text fs-5 ms-3 fw-bold d-flex justify-content-center align-items-center mt-3" to={`/dashbord/review`}> <i className="far fa-star-half me-2"></i>Review</NavLink>
      <NavLink className="text-decoration-none header-text fs-5 ms-3 fw-bold d-flex justify-content-center align-items-center mt-3" to={`/dashbord/pay`}> <i className="fas fa-hand-holding-usd me-2"></i>Pay</NavLink>
      <NavLink onClick={logOut} to={`/dashbord`} className="text-decoration-none header-text fs-5 ms-3 fw-bold d-flex justify-content-center align-items-center mt-3"> <i className="fas fa-sign-in-alt me-2"></i>LogOut</NavLink>
        </Box>}
      

      
      
      
     
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
      className="bg-light"
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
          </IconButton>
          <MenuIcon />
          <Typography variant="h6" className="text-dark fw-bold" noWrap component="div">
            Welcome to Dashbord
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box  component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />

         <Outlet />
         
      </Box>
    </Box>
  );
}

DashBord.propTypes = {
  window: PropTypes.func,
};

export default DashBord;
