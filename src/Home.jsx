import Button from "@mui/material/Button";
import { Typography } from "@mui/material";
import "./Home.css";
import { useNavigate } from "react-router-dom";
export function Home() {
  const navigate = useNavigate();
  return (
    <div className="homePage">
      <Typography variant="h1" sx={{ color: "GrayText" }}>
        welcome to the CRUD App😍
      </Typography>
      <Typography variant="p">Have fun</Typography>
      <Button variant="contained" onClick={() => navigate("/Addusers")}>
        press me
      </Button>
    </div>
  );
}
