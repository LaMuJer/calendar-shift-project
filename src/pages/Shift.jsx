import React, { useState } from "react";
import "../App.css";
import { Box, Button, Stack, Typography } from "@mui/material";
import CalendarModel from "../components/CalendarModel";
import Descriptions from "../components/Descriptions";
import { useParams } from "react-router-dom";

const Shift = () => {
  const { id } = useParams();

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
        <Button variant="outlined" color="info" style={{ marginTop: "30px" }}>
          <p style={{ fontSize: "10px" }}>Edit</p>
        </Button>
        <CalendarModel shift={id} />
        <Descriptions />
      </Box>
    </Stack>
  );
};

export default Shift;
