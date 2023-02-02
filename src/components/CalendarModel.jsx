import { useState } from "react";
import Calendar from "react-calendar";

// date
import date from "../utils/date";
import ColorHighlight from "./ColorHighlight";

const CalendarModel = ({ shift }) => {
  const [value, setValue] = useState(new Date());
  const [count, setCount] = useState(null);

  // const showOneDayOnly = (value) => {
  //   console.log(value);
  // };

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
    setValue(date)
  };

  const handleManageData = (param) => {
    for (const x of date) {
      if (
        new Date(x.date).toLocaleDateString() ==
        new Date(param.date).toLocaleDateString()
      ) {
        if (x.assign[shift] == "Off") {
          return (
            <ColorHighlight bgColor={'#ffddd2'} />
          );
        } else if (x.assign[shift] == "Morning") {
          return (
            <ColorHighlight bgColor={'#2ec4b6'} />
          )
        } else if (x.assign[shift] == "Night") {
          return (
            <ColorHighlight bgColor={'#ff4d6d'} />
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
      // onClickDay={showOneDayOnly}
      />
      <div style={{ marginTop: '60px' }}>
        <p >
          From <span className="selectedDateShow">Feb-20-2022</span>
          To
          <span className="selectedDateShow">Feb-20-2022</span>
          Total<span className="selectedDateShow">{count ? count : "0"} days</span>
        </p>
      </div>
    </>
  );
};
export default CalendarModel;
