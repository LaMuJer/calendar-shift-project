import React, { useState } from "react";
import "../App.css";
import { Box, Button, Stack, Typography } from "@mui/material";
import { lists } from "../utils/constant";
import CalendarModel from "../components/CalendarModel";

const Shift = () => {
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
        <CalendarModel />
        <Stack
          direction={"row"}
          sx={{
            width: "100vw",
            height: "20vh",
            bgcolor: "yellow",
            mt: "30px",
          }}
        >
          {lists.map(({ shift, duration, icon }, index) => {
            return (
              <div key={index}>
                <Typography variant="subtitle2" color="success">
                  {shift}
                </Typography>
                <Typography variant="subtitle2" color="success">
                  {duration}
                </Typography>
                <Typography variant="subtitle2" color="success">
                  {React.createElement(icon)}
                </Typography>
              </div>
            );
          })}
        </Stack>
      </Box>
    </Stack>
  );
};

export default Shift;
