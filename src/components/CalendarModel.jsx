import { useEffect, useState } from "react";
import Calendar from "react-calendar";

// date
import date from "../utils/date";
import ColorHighlight from "./ColorHighlight";

const CalendarModel = ({ shift, dater }) => {
  const [value, setValue] = useState(new Date());
  const [count, setCount] = useState(null);
  const [start, setStart] = useState(null);
  const [end, setEnd] = useState(null);
  const [active, setActive] = useState(new Date());

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
    const startDay = new Date(date[0])
    const endDay = new Date(date[1]);
    setStart(startDay.toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" }));
    setEnd(endDay.toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" }));
    setCount(countDays(startDay, endDay));
    setValue(date);
  };

  const handleManageData = (param) => {
    for (const x of date) {
      if (
        new Date(x.date).toLocaleDateString() ==
        new Date(param.date).toLocaleDateString()
      ) {
        if (x.assign[shift] == "Off") {
          return <ColorHighlight active={'react-calendar__month-view__days__day'} bgColor={"#ffee32"} shift={x.assign[shift]}  />;
        } else if (x.assign[shift] == "Morning") {
          return <ColorHighlight active={'react-calendar__month-view__days__day'} bgColor={"#6fffe9"} shift={x.assign[shift]} />;
        } else if (x.assign[shift] == "Night") {
          return <ColorHighlight active={'react-calendar__month-view__days__day'} bgColor={"#e71d36"} shift={x.assign[shift]} />;
        }
      }
    }
  };

  useEffect(() => {
    if (dater) {
      setActive(new Date(dater))
      // console.log(new Date(dater));
    }
  }, [dater]);

  return (
    <>
      <Calendar
        onChange={handleChange}
        value={active}
        tileContent={handleManageData}
        selectRange={true}
        // activeStartDate={active}
        showNeighboringMonth
      // onClickDay={showOneDayOnly}
      />
      <div style={{ marginTop: "100px" }}>
        <p style={{ color: '#ffffff90' }}>
          From{" "}
          <span className="selectedDateShow">{start ? start : "_____"}</span>
          To
          <span className="selectedDateShow">{end ? end : "_____"}</span>
          Total
          <span className="selectedDateShow">{count ? count : "0"} days</span>
        </p>
      </div>
    </>
  );
};
export default CalendarModel;
