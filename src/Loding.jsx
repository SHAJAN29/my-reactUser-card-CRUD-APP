import { Box, Typography } from "@mui/material";
import "./Loding.css";
export function Loding() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        translate: "0 20em",
      }}
      className="loder"
    >
      <div class="lds-spinner">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>

      <Typography variant="h1">Loding...</Typography>
    </Box>
  );
}
