import Button from "@mui/material/Button";
import { Typography } from "@mui/material";
import "./Home.css"
export function Home() {
  return (
    <div className="homePage">

      <Typography variant="h1" sx={{ color: "GrayText" }}>
        welcome to the react shajan😍
      </Typography>
      <Button variant="contained">Text</Button>

    </div>


  );
}
