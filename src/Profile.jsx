import {
  Box,
  Button,
  Card,
  CardContent,
  IconButton,
  Typography,
} from "@mui/material";
import "./Profile.css";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { Navigate, useNavigate } from "react-router-dom";
import { API } from "./Api";

export function Profile({ profileData }) {
  const { profileName, nickName, martialStatus, email, password, id } =
    profileData;
  const navigate = useNavigate();

  console.log(id);

  const deleteStudent = async (id) => {
    await fetch(`${API}/users/${id}`, {
      method: "DELETE",
    });
    location.reload(navigate("/users"));
  };

  const deleteMovie = async (id) => {
    console.log(id);
    await fetch(`${API}/users/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        // Add any other headers needed for authentication, etc.
      },
    });

    location.reload(navigate("/users"));
  };

  const editUsers = (id) => {};

  // .filter((ele,index)=>ele.index!=index)

  return (
    <div className="userCards">
      {/* -----------------------------Profile============================== */}

      <Card
        sx={{
          display: "flex",
          justifyContent: "space-around",
          marginTop: "5em",
          borderRadius: "20px",
          boxShadow: " 3px -1px 35px -16px rgba(0,0,0,0.75)",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "coloum",
            alignItems: "center",
          }}
        >
          <Box sx={{ display: "flex", flexDirection: "row" }}>
            <CardContent
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Typography
                color="dark"
                component="div"
                sx={{
                  fontWeight: "500",
                  textTransform: "uppercase",
                  fontSize: "16px",
                  padding: "20px 0",
                }}
                variant="h5"
              >
                Profile
              </Typography>
              <Typography
                variant="subtitle1"
                sx={{
                  fontSize: "14px",
                  fontWeight: "bold",
                  textAlign: "center",
                  textTransform: "uppercase",
                }}
                color="text.secondary"
                component="div"
              >
                {profileName}
                <span className="nickName">({nickName})</span>
              </Typography>
            </CardContent>

            {/* -----------------------------martialStatus============================== */}

            <CardContent
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Typography
                component="div"
                sx={{
                  color: "#1b74e4",
                  fontWeight: "500",
                  textTransform: "uppercase",
                  fontSize: "16px",
                  padding: "20px 0",
                }}
                variant="h5"
              >
                Status
              </Typography>
              <Typography
                variant="subtitle1"
                sx={{
                  fontSize: "14px",
                  fontWeight: "bold",
                  textTransform: "uppercase",
                }}
                color="text.secondary"
                component="div"
              >
                {martialStatus}
                {martialStatus == "single" ? "😍" : "❤️"}
              </Typography>
            </CardContent>

            {/* -----------------------------email============================== */}

            <CardContent
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Typography
                component="div"
                sx={{
                  color: "#1b74e4",
                  fontWeight: "500",
                  textTransform: "uppercase",
                  fontSize: "16px",
                  padding: "20px 0",
                }}
                variant="h5"
              >
                email
              </Typography>
              <Typography
                variant="subtitle1"
                sx={{
                  fontSize: "14px",
                  fontWeight: "bold",
                  textTransform: "uppercase",
                }}
                color="text.secondary"
                component="div"
              >
                {email}
              </Typography>
            </CardContent>

            {/* -----------------------------Password============================== */}

            <CardContent
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Typography
                component="div"
                sx={{
                  color: "#1b74e4",
                  fontWeight: "500",
                  textTransform: "uppercase",
                  fontSize: "16px",
                  padding: "20px 0",
                }}
                variant="h5"
              >
                Password
              </Typography>
              <Typography
                variant="subtitle1"
                sx={{
                  fontSize: "14px",
                  fontWeight: "bold",
                  textTransform: "uppercase",
                }}
                color="text.secondary"
                component="div"
              >
                {password}
              </Typography>
            </CardContent>

            {/* ------------------------delete and edit icons----------------------------------------- */}

            <CardContent
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <IconButton
                onClick={() => navigate(`/editUsers/${id}`)}
                color="success"
                sx={{ margin: "9px 0 0 0px" }}
              >
                <EditIcon />
              </IconButton>
              <IconButton
                onClick={() => deleteMovie(id)}
                sx={{ marginTop: "2px" }}
                color="error"
              >
                <DeleteIcon />
              </IconButton>
            </CardContent>
          </Box>
        </Box>
      </Card>
    </div>
  );
}
