import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useState } from "react";
import { months } from "../utils/constant";
import Button from '@mui/material/Button'

const GoTo = () => {
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");

  const handleDay = (event) => {
    setDay(event.target.value);
  };

  const handleMonth = (event) => {
    console.log(months)
    setMonth(event.target.value);
  };

  const handleYear = (event) => {
    setYear(event.target.value);
  };

  let dayCounts = [];
  for (let i = 1; i < 32; i++) {
    dayCounts.push(i);
  }

  let yearCounts = [];
  for (let i = 2022; i < 2025; i++) {
    yearCounts.push(i);
  }

  const handleClick = () => {
    console.log('clicked')
  }

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }}>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <Box sx={{ minWidth: 120 }}>
          <FormControl fullWidth>
            <InputLabel id="day">Day</InputLabel>
            <Select
              labelId="day"
              id="daySelectId"
              value={day}
              label="Day"
              onChange={handleDay}
            >
              {dayCounts.map((c, index) => (
                <MenuItem key={index} value={c}>
                  {c}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>

        <Box sx={{ minWidth: 120 }}>
          <FormControl fullWidth>
            <InputLabel id="month">Month</InputLabel>
            <Select
              labelId="month"
              id="monthSelectId"
              value={month}
              label="Month"
              onChange={handleMonth}
            >
              {months.map((c, index) => (
                <MenuItem key={index} value={c}>
                  {c}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>

        <Box sx={{ minWidth: 120 }}>
          <FormControl fullWidth>
            <InputLabel id="year">Year</InputLabel>
            <Select
              labelId="year"
              id="yearSelectId"
              value={year}
              label="Year"
              onChange={handleYear}
            >
              {yearCounts.map((c, index) => (
                <MenuItem key={index} value={c}>
                  {c}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>
        <div>
          <Button variant="contained" color="info" onClick={handleClick}>
            Go To
          </Button>
        </div>
      </div>
    </div>
  );
};

export default GoTo;
