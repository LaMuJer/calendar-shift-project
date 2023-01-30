import { Box } from "@mui/material";
import { MenuOutlined } from "@mui/icons-material";
import { useState } from "react";
import data from "../utils/date";

const Home = () => {
  const [show, setshow] = useState();

  const date = new Date();

  console.log(
    date.toLocaleDateString(),
    date.toLocaleDateString("us", { weekday: "long" })
  );

  // const handleshow = () {

  // }

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        mt: "30px",
      }}
    >
      <table className="shiftSheet">
        <thead>
          <tr>
            <th>Date</th>
            <th>Day</th>
            <th>Shift A</th>
            <th>Shift B</th>
            <th>Shift C</th>
            <th>Shift D</th>
          </tr>
        </thead>
        <tbody>
          {data.map((i, index) => (
            <tr
              key={index}
              className={
                new Date().toLocaleDateString() ===
                  new Date(i.date).toLocaleDateString() && "highlight"
              }
            >
              <td>{new Date(i.date).toLocaleDateString()}</td>
              <td>
                {new Date(i.date).toLocaleDateString("us", { weekday: "long" })}
              </td>
              <td>{i.assign.A}</td>
              <td>{i.assign.B}</td>
              <td>{i.assign.C}</td>
              <td>{i.assign.D}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Box>
  );
};

export default Home;
