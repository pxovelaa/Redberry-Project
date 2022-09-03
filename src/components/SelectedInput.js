import axios from "axios";
import { useEffect, useState } from "react";
import "./SelectedInput.css";

export default function SelectedInput(props) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function getCharacters() {
      const res = await fetch("https://pcfy.redberryinternship.ge/api/teams");
      const body = await res.json();

      setData(body.data.map(({ name, id }) => ({ label: name, value: name, id: id })));
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
      <select className="selected-input" onChange={props.changeTeamHandler}>
        <option key="თიმი" id={0}>
          თიმი
        </option>
        {data.map(({ label, value, id}) => {
          return (
            <option key={value} value={value} id={id} >
              {label}
            </option>
          );
        })}
      </select>
    </div>
  );
}
