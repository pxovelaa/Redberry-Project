import axios from "axios";
import { useEffect, useState } from "react";
import "./SelectedInput.css";

export default function SelectedPosition(props) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);


  useEffect(() => {
    async function getCharacters() {
      const res = await fetch(
        "https://pcfy.redberryinternship.ge/api/positions"
      );
      const body = await res.json();

      setData(
        body.data.map(({ name, team_id }) => ({
          label: name,
          value: name,
          id: team_id,
        }))
      );
      // setData([...body]);  
      setIsLoading(false);
    }
    getCharacters();
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="container">
      <select className="selected-input" onChange={props.changePositionHandler}>
        <option key="პოზიცია">პოზიცია</option>
        {data
          .filter((position) => +position.id === +props.teamId)
          .map(({ label, value, id }) => {
            return (
              <option key={value} value={value} id={id}>
                {label}
              </option>
            );
          })}
      </select>
    </div>
  );
}
