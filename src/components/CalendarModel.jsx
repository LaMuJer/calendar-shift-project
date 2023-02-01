import { useState, createElement } from "react";
import Calendar from "react-calendar";

// date
import date from "../utils/date";

const CalendarModel = ({ shift }) => {
  const [value, setValue] = useState(new Date());
  const [count, setCount] = useState(null);

  const showOneDayOnly = (value) => {
    console.log(value);
  };

  function countDays(date1, date2) {
    // Convert both dates to milliseconds
    var date1Ms = date1.getTime();
    var date2Ms = date2.getTime();

    // Calculate the difference in milliseconds
    var differenceMs = date2Ms - date1Ms;

    // Convert back to days and return
    return Math.round(differenceMs / (1000 * 60 * 60 * 24));
  }

  const handleChange = (date) => {
    console.log(date);
    const startDay = new Date(date[0]);
    const endDay = new Date(date[1]);

    setCount(countDays(startDay, endDay));
  };

  const handleManageData = (param) => {
    for (const x of date) {
      if (
        new Date(x.date).toLocaleDateString() ==
        new Date(param.date).toLocaleDateString()
      ) {
        if (x.assign[shift] == "Off") {
          return (
            <span
              style={{
                width: "71.5px",
                height: "83px",
                position: "absolute",
                backgroundColor: "#e63946",
                display: "inline-block",
                top: 0,
                left: 0,
                opacity: 0.2,
              }}
            ></span>
          );
        } else if (x.assign[shift] == "Morning") {
          return (
            <span
              style={{
                width: "71.5px",
                height: "83px",
                position: "absolute",
                backgroundColor: "#fb8500",
                display: "inline-block",
                top: 0,
                left: 0,
                opacity: 0.2,
              }}
            ></span>
          );
        } else if (x.assign[shift] == "Night") {
          return (
            <span
              style={{
                width: "71.5px",
                height: "83px",
                position: "absolute",
                backgroundColor: "#023047",
                display: "inline-block",
                top: 0,
                left: 0,
                opacity: 0.2,
              }}
            ></span>
          );
        }
      }
    }
  };

  return (
    <>
      <Calendar
        onChange={handleChange}
        value={value}
        tileContent={handleManageData}
        selectRange={true}
        showNeighboringMonth={false}
        onClickDay={showOneDayOnly}
      />
      <p>Date : {count ? count:"select date"}</p>
    </>
  );
};
export default CalendarModel;
