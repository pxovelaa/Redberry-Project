import React, { useEffect, useState } from "react";
import vector from "../resources/images/Vector.svg";
import "./CreateUser.css";
import { Link, useNavigate } from "react-router-dom";
import TextInput from "../components/TextInput";
import SubmitButton from "../components/SubmitButton";
import SelectedInput from "../components/SelectedInput";
import SelectedPosition from "../components/SelectedPosition";
// titoelu inputistvis vidzaxebt useStates

// vqmnit tanamshromlis infos pages

const CreateUser = (props) => {
  let navigate = useNavigate();

  const [values, setValues] = useState({
    name: "",
    surname: "",
    team_id: "",
    position_id: "",
    phone_number: "",
    email: "",
  });

  const inputs = [
    {
      id: 1,
      type: "text",
      label: "სახელი",
      name: "name",
      placeholder: "გრიშა",
      className: "name",
      comment: "მინიმუმ 2 სიმბოლო, ქართული ასოები",
      pattern: "^[ა-ჰ]{2,}$",
      required: true,
    },
    {
      id: 2,
      type: "text",
      label: "გვარი",
      name: "surname",
      placeholder: "ბაგრატიონი",
      className: "name",
      comment: "მინიმუმ 2 სიმბოლო, ქართული ასოები",
      required: true,
    },
  ];

  const selectTeamInput = [
    {
      id: 3,
      name: "team_id",
      required: true,
    },
  ];

  let currentTeamId = values.team_id;

  const selectPositionInput = [
    {
      id: 4,
      name: "position_id",
      posId: { currentTeamId },
      required: true,
    },
  ];

  const inputs2 = [
    {
      id: 5,
      type: "email",
      label: "მეილი",
      name: "email",
      placeholder: "grish666@redberry.ge",
      className: "contact-field",
      comment: "უნდა მთავრდებოდეს @redberry.ge-ით",
      pattern: "^[a-z0-9](.?[a-z0-9]){5,}@r(oogle)?edberry.ge$",
      required: true,
    },

    {
      id: 6,
      type: "text",
      label: "ტელეფონის ნომერი ",
      name: "phone_number",
      placeholder: "+995 598 00 07 01",
      className: "contact-field",
      comment: "უნდა აკმაყოფილებდეს ქართული მობ-ნომრის ფორმატს",
      pattern: "^(+/995[0-9]{9})$",
      required: true,
    },
  ];

  let validValues = 0;

  const createUserHandler = (event) => {
    event.preventDefault();
    for (const [key, value] of Object.entries(values)) {
      if (value.length > 0) {
        validValues += 1;
      }
    }
    if (validValues === 6) {
      navigate("/create-laptop");
    } else {
      alert("please check all inputs");
    }
  };

  console.log(values.name);

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
    // const stateInfo = JSON.stringify(values);
    // if (stateInfo) {
    //   localStorage.setItem("CreateUser", stateInfo);
    // }

    const newValues = {...values, [e.target.name]: e.target.value}
    localStorage.setItem('CreateUser', JSON.stringify(newValues));
    setValues(newValues);
  };

  const onSelect = (e) => {
    setValues({ ...values, [e.target.name]: e.target.selectedOptions[0].id });
    const newValues = {...values, [e.target.name]:  e.target.selectedOptions[0].id};
    localStorage.setItem('CreateUser', JSON.stringify(newValues));
    setValues(newValues);
  };


  useEffect(() => {
    const formData = localStorage.getItem("CreateUser");
    if (formData) {
      setValues(JSON.parse(formData));
    }
  }, []);


  return (
    <div>
      <div>
        <Link to="/">
          <img className="vector" src={vector} alt="vector" />
        </Link>
        <div className="user_info container">
          <h3 className="active_page">თანამშრომლის ინფო</h3>
          <h3>ლეპტოპის მახასიათებლები</h3>
        </div>
        <form onSubmit={createUserHandler}>
          <div className="container inputs-container">
            {inputs.map((input) => (
              <TextInput
                key={input.id}
                {...input}
                value={values[input.name]}
                onChange={onChange}
              />
            ))}
          </div>
          {selectTeamInput.map((input) => (
            <SelectedInput
              key={input.id}
              {...input}
              value={values[input.name]}
              onChange={onSelect}
            />
          ))}

          {selectPositionInput.map((input) => (
            <SelectedPosition
              key={input.id}
              {...input}
              value={values[input.name]}
              onChange={onSelect}
            />
          ))}

          <div className="container contact-info">
            {inputs2.map((input) => (
              <TextInput
                key={input.id}
                {...input}
                value={values[input.name]}
                onChange={onChange}
              />
            ))}
          </div>
          <SubmitButton classname="submit-button container" BtnName="შემდეგი" />
        </form>
      </div>
    </div>
  );
};

export default CreateUser;
