import { useState, createElement } from "react";
import Calendar from "react-calendar";

// date
import date from "../utils/date";

const CalendarModel = ({ shift }) => {
  const [value, setValue] = useState(new Date());

  const showOneDayOnly = (value) => {
    console.log(value);
  };

  console.log(date);

  const handleManageData = (param) => {
    for (const x of date) {
      if (
        new Date(x.date).toLocaleDateString() ==
        new Date(param.date).toLocaleDateString()
      ) {
        if (x.assign[shift] == "Off") {
          return <span style={{
            width: '71.5px',
            height: '83px',
            position: 'absolute',
            backgroundColor: '#e63946',
            display: 'inline-block',
            top: 0,
            left: 0,
            opacity: .2,
          }
          }></span >
        } else if (x.assign[shift] == "Morning") {
          return <span style={{
            width: '71.5px',
            height: '83px',
            position: 'absolute',
            backgroundColor: '#fb8500',
            display: 'inline-block',
            top: 0,
            left: 0,
            opacity: .2,
          }
          }></span >
        } else if (x.assign[shift] == "Night") {
          return <span style={{
            width: '71.5px',
            height: '83px',
            position: 'absolute',
            backgroundColor: '#023047',
            display: 'inline-block',
            top: 0,
            left: 0,
            opacity: .2,
          }
          }></span >
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
