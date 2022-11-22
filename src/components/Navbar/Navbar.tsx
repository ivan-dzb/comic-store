import React from "react";
import MenuIcon from "@mui/icons-material/Menu";

import {
  AppBar,
  Avatar,
  Box,
  Button,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Menu,
  MenuItem,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";
import SearchBar from "components/SearchBar/SearchBar";
import { NavLink } from "react-router-dom";
import logo from "assets/images/logo2.png";

const drawerWidth = 240;
const navItems = [
  { "all-comics": "Todos los comics" },
  { "by-character": "Por personaje" },
  { "contact": "Contacto" },
];
const settings = ["Perfil", "Pedidos", "Logout"];

export default function Navbar(props: any) {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const { window } = props;

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        Marvelous Comics
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <NavLink
            to={Object.keys(item)[0]}
            style={{ textDecoration: "none", color: "white" }}
            key={Object.keys(item)[0]}
          >
            <ListItem key={Object.keys(item)[0]} disablePadding>
              <ListItemButton sx={{ textAlign: "center" }}>
                <ListItemText primary={Object.values(item)[0]} />
              </ListItemButton>
            </ListItem>
          </NavLink>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <>
      <AppBar component="nav">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { lg: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ paddingRight: "3rem", display: { xs: "none", lg: "block" } }}
          >
            <NavLink to="/" style={{ textDecoration: "none", color: "white" }}>
              <img src={logo} alt="logo" style={{ height: "3rem" }} />
            </NavLink>
          </Typography>
          <Box sx={{ display: { xs: "none", lg: "block" }, flexGrow: 1 }}>
            {navItems.map((item) => (
              <NavLink
                to={Object.keys(item)[0]}
                style={{ textDecoration: "none", color: "white" }}
                key={Object.keys(item)[0]}
              >
                <Button color="inherit" key={Object.keys(item)[0]}>
                  {Object.values(item)[0]}
                </Button>
              </NavLink>
            ))}
          </Box>
          <SearchBar />

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", lg: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </>
  );
}
