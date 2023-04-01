import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import { useFormik } from "formik";
import { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { API } from "./Api";
import * as yup from "yup";

export function Addusers({ data, setData }) {
  const [name, setName] = useState("");
  const [nickName, setNickName] = useState("");
  const [status, setStatus] = useState("");
  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  console.log(data);

  const navigate = useNavigate();

  const formValidationSchema = yup.object({
    ProfileName: yup.string().required("A cool name is required😊"),

    nickName: yup.string().required("A cool NickName is required😊"),
    status: yup.string().required("should be either single or married😅"),
    age: yup.number().required().min(16, "age should be a greater then 16😅"),
    email: yup.string().required().email("should be a valid email"),
  });

  const formik = useFormik({
    initialValues: {
      ProfileName: "",
      nickName: "",
      status: "",
      age: "",
      email: "",
    },
    validationSchema: formValidationSchema,

    onSubmit: (userData) => {
      console.log(userData), createUser(userData);
    },
  });

  const { handleChange, handleSubmit, handleBlur, values, touched, errors } =
    formik;

  const createUser = async (userData) => {
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
    <form onSubmit={handleSubmit}>
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
        <Box
          sx={{ display: "flex", flexDirection: "column", marginTop: "20px" }}
        >
          <TextField
            onChange={handleChange}
            sx={{ marginTop: "20px", width: "500px" }}
            id="outlined-basic"
            label="ProfileName"
            variant="outlined"
            name="ProfileName"
            error={touched.ProfileName && errors.ProfileName}
            helperText={
              touched.ProfileName && errors.ProfileName
                ? errors.ProfileName
                : null
            }
          />
          <TextField
            onChange={handleChange}
            sx={{ marginTop: "20px", width: "500px" }}
            id="outlined-basic"
            label="NickName"
            variant="outlined"
            name="nickName"
            error={touched.nickName && errors.nickName}
            helperText={
              touched.nickName && errors.nickName ? errors.nickName : null
            }
          />
          <TextField
            onChange={handleChange}
            sx={{ marginTop: "20px", width: "500px" }}
            id="outlined-basic"
            label="Status"
            variant="outlined"
            name="status"
            error={touched.status && errors.status}
            helperText={touched.status && errors.status ? errors.status : null}
          />
          <TextField
            onChange={handleChange}
            sx={{ marginTop: "20px", width: "500px" }}
            id="outlined-basic"
            label="age"
            variant="outlined"
            name="age"
            error={touched.age && errors.age}
            helperText={touched.age && errors.age ? errors.age : null}
          />
          <TextField
            onChange={handleChange}
            sx={{ marginTop: "20px", width: "500px" }}
            id="outlined-basic"
            label="email"
            type="email"
            variant="outlined"
            name="email"
            error={touched.email && errors.email}
            helperText={touched.email && errors.email ? errors.email : null}
          />

          <Button type="submit" sx={{ marginTop: "20px" }} variant="contained">
            ADDUSER
          </Button>
        </Box>
      </Stack>
    </form>
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
