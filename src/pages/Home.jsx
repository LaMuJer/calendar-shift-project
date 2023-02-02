import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import data from "../utils/date";

const Home = () => {
  const [loadMore, setLoadMore] = useState({
    count: 10,
    con: true,
  });

  const date = data.filter((i) => {
    let tomorrow = new Date(i.date).getTime() + 24 * 60 * 60 * 1000;
    return new Date(tomorrow).getTime() >= new Date().getTime();
  });

  date.splice(loadMore.count, data.length - 1);

  const handleLoadMore = () => {
    setLoadMore((pre) => ({ ...pre, count: pre.count + 10 }));
  };

  useEffect(() => {
    console.log();

    if (
      new Date(date[date.length - 1].date).getTime() ===
      new Date(data[data.length - 1].date).getTime()
    ) {
      setLoadMore((pre) => ({ ...pre, con: false }));
    }
  }, [loadMore.count]);

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        mt: "30px",
        flexDirection: "column",
      }}
    >
      <table className="shiftSheet ">
        <thead className="sticky">
          <tr>
            <th>Date</th>
            <th>Shift A</th>
            <th>Shift B</th>
            <th>Shift C</th>
            <th>Shift D</th>
          </tr>
        </thead>
        <tbody>
          {date.map((i, index) => (
            <tr key={index} className={index === 0 ? "highlight" : ""}>
              <td style={{ display: "flex", justifyContent: "start" }}>
                <p style={{ width: "100px" }}>
                  {new Date(i.date)
                    .toLocaleDateString("en-GB", {
                      day: "numeric",
                      month: "short",
                      year: "numeric",
                    })
                    .replace(/ /g, "-")}
                </p>
                <p>
                  {new Date(i.date).toLocaleDateString("us", {
                    weekday: "long",
                  })}
                </p>
              </td>
              <td>{i.assign.A}</td>
              <td>{i.assign.B}</td>
              <td>{i.assign.C}</td>
              <td>{i.assign.D}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {loadMore.con && <button onClick={handleLoadMore}>Load More</button>}
    </Box>
  );
};

export default Home;
