import { Box } from "@mui/material";
import data from "../utils/date";

const Home = () => {

  const date = new Date();

  console.log(
    date.toLocaleDateString(),
    date.toLocaleDateString("en", { weekday: "long" })
  );

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        mt: "30px",
      }}
    >
      <table className="shiftSheet ">
        <thead className="sticky" >
          <tr>
            <th>Date</th>
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
                  new Date(i.date).toLocaleDateString() ? "highlight" : ""
              }
            >
              <td style={{ display: 'flex', justifyContent: 'start' }}>
                <p style={{ width: '100px' }}>
                  {new Date(i.date).toLocaleDateString("en-GB", {
                    day: 'numeric',
                    month: 'short',
                    year: 'numeric'
                  }).replace(/ /g , '-')}
                </p>
                <p>{new Date(i.date).toLocaleDateString("us", { weekday: "long" })}</p>
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
