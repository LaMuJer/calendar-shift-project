import "../App.css";
import { Box, Button, Stack } from "@mui/material";
import CalendarModel from "../components/CalendarModel";
import { useParams } from "react-router-dom";
import GoTo from "../components/GoTo";
import { useState } from "react";

const Shift = () => {
  const { id } = useParams();

  const [date, setDate] = useState();

  const handleChange = (day, month, year) => {
    setDate(`${month}/${day}/${year}`);
  };

  console.log(date);

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
        <GoTo handleChange={handleChange} />
        <CalendarModel shift={id} dater={date} />
      </Box>
    </Stack>
  );
};

export default Shift;
