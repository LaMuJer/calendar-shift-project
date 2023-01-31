import { useState, createElement } from "react";
import Calendar from "react-calendar";

// icons
import LightModeRoundedIcon from "@mui/icons-material/LightModeRounded";
import NightlightRoundedIcon from "@mui/icons-material/NightlightRounded";
import NotInterestedRoundedIcon from "@mui/icons-material/NotInterestedRounded";

// date
import date from "../utils/date";

const CalendarModel = ({ shift }) => {
  const [value, setValue] = useState(new Date());

  const showOneDayOnly = (value) => {
    console.log(value);
  };

  const rangeValue = [];

  const drillU = ({ activeStartDate, view }) =>
    alert("Drilled up to: ", activeStartDate, view);

  console.log(date);

  const handleManageData = (param) => {
    for (const x of date) {
      if (
        new Date(x.date).toLocaleDateString() ==
        new Date(param.date).toLocaleDateString()
      ) {
        if (x.assign[shift] == "Off") {
          return createElement(NotInterestedRoundedIcon);
        } else if (x.assign[shift] == "Morning") {
          return createElement(LightModeRoundedIcon);
        } else if (x.assign[shift] == "Night") {
          return createElement(NightlightRoundedIcon);
        }
      }
    }
  };

  return (
    <>
      <Calendar
        onChange={setValue}
        value={value}
        tileContent={handleManageData}
        selectRange={true}
        showNeighboringMonth={false}
        onClickDay={showOneDayOnly}
      />
    </>
  );
};
export default CalendarModel;
