import axios from "axios";
import { useEffect, useState } from "react";
import "./SelectedInput.css";

export default function LaptopBrand(props) {
  const {onChange, value, ...SelectedInput} = props;
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function getCharacters() {
      const res = await fetch("https://pcfy.redberryinternship.ge/api/brands");
      const body = await res.json();

      setData(body.data.map(({ name, id }) => ({ Label: name, Value: name, Id: id })));
      // setData([...body]);
      setIsLoading(false);
    }
    getCharacters();
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="laptop-container">
      <select className="laptop-input"  {...SelectedInput}  onChange={onChange}>
        <option key="ლეპტოპის ბრენდი" id={16}>
        ლეპტოპის ბრენდი
        </option>
        {data.map(({ Label, Value, Id}) => {
          return (
            <option key={Value} value={Value} id={Id}  >
              {Label}
            </option>
          );
        })}
      </select>
    </div>
  );
}
