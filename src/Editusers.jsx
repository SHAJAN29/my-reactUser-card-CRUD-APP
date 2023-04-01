import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import { useFormik, yupToFormErrors } from "formik";
import { useEffect, useState } from "react";
import { Form, useNavigate, useParams } from "react-router-dom";
import { API } from "./Api";
import * as yup from "yup";
import { Loding } from "./Loding";

export function Editusersd() {
  const [datass, setDatass] = useState();
  const { id } = useParams();

  useEffect(() => {
    const fetchdata = async () => {
      const response = await fetch(`${API}/users/${id}`);
      const data = await response.json();

      setDatass(data);
      console.log(data);
    };
    fetchdata();
  }, [id]);

  // const [name, setName] = useState("");
  // const [nickName, setNickName] = useState("");
  // const [status, setStatus] = useState("");
  // const [email, setEmail] = useState("");

  // const [password, setPassword] = useState("");

  // const { profileName, nickName, status, email, password } = data;

  return datass ? <Subedit id={id} comingData={datass} /> : <Loding />;
}

function Subedit({ comingData, id }) {
  // const formValidationSchema = {
  //   email: yup.string().required(12),
  // };
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      ProfileName: comingData.ProfileName,
      nickName: comingData.nickName,
      status: comingData.status,
      age: comingData.age,
      email: comingData.email,
    },
    // validationSchema: formValidationSchema,
    onSubmit: (updatedUserData) => {
      console.log(updatedUserData);

      updatedUser(updatedUserData);
    },
  });

  const updatedUser = async (updatedUserData) => {
    await fetch(`${API}/users/${id}`, {
      method: "PUT",
      body: JSON.stringify(updatedUserData),
      headers: {
        "content-type": "application/json",
      },
    });

    navigate("/users");
  };

  const { handleChange, values, handleSubmit } = formik;

  console.log(values);
  return (
    <div className="editUsers">
      <Typography sx={{ margin: "50px 0 50px 0" }} variant="h1">
        Editusers
      </Typography>
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
            EDIT USERS
          </Typography>
          <Box
            sx={{ display: "flex", flexDirection: "column", marginTop: "20px" }}
          >
            <TextField
              value={values.ProfileName}
              onChange={handleChange}
              sx={{ marginTop: "20px", width: "500px" }}
              id="outlined-basic"
              label="profileName"
              variant="outlined"
              name="profileName"
            />
            <TextField
              onChange={handleChange}
              value={values.nickName}
              sx={{ marginTop: "20px", width: "500px" }}
              id="outlined-basic"
              label="NickName"
              variant="outlined"
              name="nickName"
            />
            <TextField
              onChange={handleChange}
              value={values.status}
              sx={{ marginTop: "20px", width: "500px" }}
              id="outlined-basic"
              label="Status"
              variant="outlined"
              name="status"
            />
            <TextField
              value={values.age}
              onChange={handleChange}
              sx={{ marginTop: "20px", width: "500px" }}
              id="outlined-basic"
              label="age"
              variant="outlined"
              name="age"
            />
            <TextField
              onChange={handleChange}
              value={values.email}
              sx={{ marginTop: "20px", width: "500px" }}
              id="outlined-basic"
              label="email"
              type="email"
              variant="outlined"
              name="email"
            />

            <Button
              type="submit"
              color={"success"}
              sx={{ marginTop: "20px" }}
              variant="contained"
            >
              ADDUSER
            </Button>
          </Box>
        </Stack>
      </form>
    </div>
  );
}
