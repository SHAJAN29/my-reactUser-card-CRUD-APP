import { useEffect, useState } from "react";
import { Routes, Route, Link, Navigate, useNavigate } from "react-router-dom";
import "./App.css";
import Button from "@mui/material/Button";
import {
  Box,
  createTheme,
  Paper,
  ThemeProvider,
  Typography,
} from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { Users } from "./Users";
import { Home } from "./Home";
import { Addusers } from "./Addusers";
import {
  QueryClientProvider,
  QueryClient,
  useQuery,
} from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { dark } from "@mui/material/styles/createPalette";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import { API } from "./Api";
import { Editusersd } from "./Editusers";

function App({}) {
  // ----------------------theme=========================//
  const [mode, setMode] = useState("light");

  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });

  const navigate = useNavigate();
  //   <button onClick={() => setCount((count) => count + 1)}>
  //   count is {count}
  // </button>

  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`${API}/users`);
      const gettingData = await response.json();
      setData(gettingData);
    };
    fetchData();
  }, []);

  const navItems = ["Home", "Users", "Addusers"];

  const [mobileOpen, setMobileOpen] = useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        😍Naruto
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? window.document.body : undefined;
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={true} />
      <ThemeProvider theme={darkTheme}>
        <Paper elevation={8}>
          <div className="App">
            <Appbar2
              handleDrawerToggle={handleDrawerToggle}
              mobileOpen={mobileOpen}
              navigate={navigate}
              container={container}
              drawer={drawer}
              mode={mode}
              setMode={setMode}
            />

            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/editUsers/:id" element={<Editusersd />} />

              <Route
                path="/users"
                element={<Users setData={setData} data={data} />}
              />
              <Route
                path="/Addusers"
                element={<Addusers data={data} setData={setData} />}
              />
            </Routes>
          </div>
        </Paper>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;

function Appbar2({
  handleDrawerToggle,
  mode,
  setMode,
  container,
  mobileOpen,
  navigate,
  drawer,
}) {
  const drawerWidth = 240;

  // const navItemsLinks = ["/", "/users", "/Addusers"];

  return (
    <AppBar
      component="nav"
      sx={{ display: "flex", justifyContent: "space-between" }}
    >
      <Toolbar sx={{ display: "flex" }}>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          sx={{
            mr: 2,
            display: { sm: "none" },
            justifyContent: "space-between ",
          }}
        >
          <MenuIcon />
        </IconButton>
        <Typography
          variant="h6"
          component="div"
          sx={{
            justifyContent: "space-between",
            display: { xs: "none", sm: "flex", md: "flex" },
          }}
        >
          😍Naruto
        </Typography>
        <Box sx={{ display: { xs: "none", sm: "flex" } }}>
          <Button onClick={() => navigate("/")} sx={{ color: "#fff" }}>
            Home
          </Button>

          <Button onClick={() => navigate("/users")} sx={{ color: "#fff" }}>
            Users
          </Button>

          <Button onClick={() => navigate("/Addusers")} sx={{ color: "#fff" }}>
            Addusers
          </Button>

          <Button
            onClick={() => setMode(mode == "light" ? "dark" : "light")}
            sx={{
              marginLeft: "20px",
              overflow: "hidden",
            }}
            variant="contained"
            startIcon={mode == "light" ? <Brightness4Icon /> : <WbSunnyIcon />}
          >
            {mode == "light" ? "Dark" : "light"}{" "}
          </Button>
        </Box>
      </Toolbar>

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
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </AppBar>
  );
}
