import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { API } from "./Api";

export function Addusers({ data, setData }) {
  const [name, setName] = useState("");
  const [nickName, setNickName] = useState("");
  const [status, setStatus] = useState("");
  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  console.log(data);

  const navigate = useNavigate();

  const createUser = async () => {
    const userData = {
      profileName: name,
      nickName: nickName,
      martialStatus: status,
      email: email,
      password: password,
    };

    await fetch(`${API}/users`, {
      method: "POST",
      body: JSON.stringify(userData),
      headers: {
        "content-type": "application/json",
      },
    });

    navigate("/users");
  };

  return (
    <Stack
      spacing={2}
      sx={{
        maxWidth: "auto",
        paddingTop: "5em",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",

        flexDirection: "column",
      }}
    >
      <Typography variant="h1" sx={{ color: "GrayText" }}>
        ADD USERS
      </Typography>
      <Box sx={{ display: "flex", flexDirection: "column", marginTop: "20px" }}>
        <TextField
          onChange={(event) => setName(event.target.value)}
          sx={{ marginTop: "20px", width: "500px" }}
          id="outlined-basic"
          label="ProfileName"
          variant="outlined"
        />
        <TextField
          onChange={(event) => setNickName(event.target.value)}
          sx={{ marginTop: "20px", width: "500px" }}
          id="outlined-basic"
          label="NickName"
          variant="outlined"
        />
        <TextField
          onChange={(event) => setStatus(event.target.value)}
          sx={{ marginTop: "20px", width: "500px" }}
          id="outlined-basic"
          label="Status"
          variant="outlined"
        />
        <TextField
          onChange={(event) => setEmail(event.target.value)}
          sx={{ marginTop: "20px", width: "500px" }}
          id="outlined-basic"
          label="email"
          variant="outlined"
        />
        <TextField
          onChange={(event) => setPassword(event.target.value)}
          sx={{ marginTop: "20px", width: "500px" }}
          id="outlined-basic"
          label="password"
          type="password"
          variant="outlined"
        />

        <Button
          onClick={createUser}
          sx={{ marginTop: "20px" }}
          variant="contained"
        >
          ADDUSER
        </Button>
      </Box>
    </Stack>
  );
}

// const [name, setName] = useState("");
// const [poster, setPoster] = useState("");
// const [rating, setRating] = useState("");
// const [summary, setSummary] = useState("");
// const [trailer, setTrailer] = useState("");
// const navigate = useNavigate();

// const addmovie =async () => {

//   const moviesData = {
//    name: name,
//      poster: poster,
//      rating: rating,
//     summary: summary,
//     trailer: trailer,
//   };
//   console.log(moviesData);

//  await fetch("https://63d75fba5dbd723244249ead.mockapi.io/movies", {
//     method: "POST",
//     body: JSON.stringify(moviesData),
//     headers: {
//       "content-type": "application/json",
//     },
//   }
//   );

//  navigate( "/movies");
// };

// <div className="App">

// < Appbar mode={mode} setMode={setMode}/>

// {/* https://63d75fba5dbd723244249ead.mockapi.io/movies */}

// <Routes >
// <Route  path="/" element={< Home  />} />
// <Route  path="/movies" element={<Movies />} />
// <Route  path="/movies/:id" element={<Movietrailer />} />
// <Route  path="/*" element={<Error/>} />
// <Route  path="/Addmovies" element={<Addmovies />} />
// <Route  path="/editmovies/:id" element={<Editmovies />} />
// </Routes>

// </div>
