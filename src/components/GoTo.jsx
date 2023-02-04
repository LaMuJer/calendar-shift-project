import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useEffect, useState } from "react";
import { months } from "../utils/constant";
import Button from "@mui/material/Button";

const GoTo = ({ handleChange }) => {
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [countDate, setCountDate] = useState();

  const handleClick = () => {
    handleChange(day, month, year);
  };

  const dateFun = (mn, yr) => {
    return new Date(yr, mn, 0).getDate();
  };

  const handleDay = (event) => {
    setDay(event.target.value);
  };

  const handleMonth = (event) => {
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
  for (let i = 2022; i < 2026; i++) {
    yearCounts.push(i);
  }

  function genArray(n) {
    return Array.from({ length: n }, (_, i) => i + 1);
  }

  useEffect(() => {
    const data = dateFun(month, year);

    if (month && year) {
      setCountDate(genArray(data));
    }
  }, [month, year]);

  console.log(countDate);

  return (
    <div className="gotoContainer"        >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {/* Day */}

        <Box sx={{ minWidth: 120, mr: '10px' }}>
          <FormControl fullWidth >
            <InputLabel id="day" style={{ color: '#ffffffaa', top: '-30%' }}>Day</InputLabel>
            <Select
              labelId="day"
              multiline
              id="daySelectId"
              value={day}
              label="Day"
              onChange={handleDay}
              sx={{
                backgroundColor: 'rgba(17, 25, 40, 0.75)',
                backdropFilter: 'blur(16px) saturate(180%)',
                WebkitBackdropFilter: 'blur(16px) saturate(180%)',
                borderRadius: '30px', height: '30px', color: '#fff'
              }}
            >
              {month && year ? (
                countDate?.map((c, index) => (
                  <MenuItem key={index} value={c} style={{ backgroundColor: '#000', color: '#fff' }}>
                    {c}
                  </MenuItem>
                ))
              ) : (
                <MenuItem value={"Select Year"} disabled style={{ backgroundColor: '#000', color: '#fff' }}>Select Month and Year</MenuItem>
              )}
            </Select>
          </FormControl>
        </Box>

        {/* Month */}

        <Box sx={{ minWidth: 120, mr: '10px'  }}>
          <FormControl fullWidth >
            <InputLabel id="month" style={{ color: '#ffffffaa', top: '-40%' }}>Month</InputLabel>
            <Select
              labelId="month"
              id="monthSelectId"
              value={month}
              label="Month"
              onChange={handleMonth}
              sx={{
                backgroundColor: 'rgba(17, 25, 40, 0.75)',
                backdropFilter: 'blur(16px) saturate(180%)',
                WebkitBackdropFilter: 'blur(16px) saturate(180%)',
                borderRadius: '30px', height: '30px', color: '#fff'
              }}
            >
              {months.map((c, index) => (
                <MenuItem key={c.id} value={c.id} style={{ backgroundColor: '#000', color: '#fff' }}>
                  {c.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>

        {/* year */}

        <Box sx={{ minWidth: 120, mr: '30px'  }}>
          <FormControl fullWidth>
            <InputLabel id="year" style={{ color: '#ffffffaa', top: '-40%' }}>Year</InputLabel>
            <Select
              labelId="year"
              id="yearSelectId"
              value={year}
              label="Year"
              onChange={handleYear}
              sx={{
                backgroundColor: 'rgba(17, 25, 40, 0.75)',
                backdropFilter: 'blur(16px) saturate(180%)',
                WebkitBackdropFilter: 'blur(16px) saturate(180%)',
                borderRadius: '30px', height: '30px', color: '#fff'
              }}
            >
              {yearCounts.map((c, index) => (
                <MenuItem key={index} value={c} style={{ backgroundColor: '#000000', color: '#fff' }}>
                  {c}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>
        <div>
          <Button variant="contained" style={{
            backgroundColor: '#20a4f3', textTransform: 'capitalize',
            padding: '5px 2px'
          }} onClick={handleClick}>
            Go To
          </Button>
        </div>
      </div>
    </div>
  );
};

export default GoTo;
