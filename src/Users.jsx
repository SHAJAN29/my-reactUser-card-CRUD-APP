import { Box, IconButton, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { API } from "./Api";
import { Loding } from "./Loding.jsx";
import { Profile } from "./Profile";
import "./Users.css";
export function Users() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`${API}/users`);
      const gettingData = await response.json();
      setData(gettingData);
    };
    fetchData();
  }, []);

  const { id } = data;
  console.log(id);

  return data ? <UserDetails data={data} /> : <Loding />;
}

function UserDetails({ data }) {
  return (
    <div className="userPage">
      <Typography variant="h1" sx={{ color: "GrayText" }}>
        Profile card😊
      </Typography>
      <Box sx={{ marginTop: "3em" }}>
        {data.map((num, index) => (
          <Profile id={index} key={index} profileData={num} />
        ))}
      </Box>
    </div>
  );
}
