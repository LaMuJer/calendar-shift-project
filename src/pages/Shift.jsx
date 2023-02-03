import "../App.css";
import { Box, Button, Stack } from "@mui/material";
import CalendarModel from "../components/CalendarModel";
import { useParams } from "react-router-dom";
import GoTo from "../components/GoTo";

const Shift = () => {
  const { id } = useParams();

  console.log(id);

  return (
    <Stack
      sx={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "start",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "start",
          alignItems: "center",
        }}
      >
        <GoTo />
        <CalendarModel shift={id} />
      </Box>
    </Stack>
  );
};

export default Shift;
