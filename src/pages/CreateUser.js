import React, { useState } from "react";
import vector from "../resources/images/Vector.svg";
import "./CreateUser.css";
import { Link } from "react-router-dom";
import TextInput from "../components/TextInput";
import SubmitButton from "../components/SubmitButton";
import SelectedInput from "../components/SelectedInput";
import SelectedPosition from "../components/SelectedPosition";

// titoelu inputistvis vidzaxebt useStates

// vqmnit tanamshromlis infos pages

const CreateUser = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredSurname, setEnteredSurname] = useState("");
  const [enteredGmail, setEnteredGmail] = useState("");
  const [enteredPhoneNumber, setEnteredPhoneNumber] = useState("");
  const [selectedTeam, setSelectedTeam] = useState("");
  const [selectedPosition, setSelectedPosition] = useState("");


  const createUserHandler = (event) => {
    event.preventDefault();

    // inputs validations
    function checkInputTextValidation(value) {
      let georgianAlphabetsNum = 0;
      for (let i = 0; i < value.length; i++) {
        if (value.charCodeAt(i) >= 4304 && value.charCodeAt(i) <= 4336) {
          georgianAlphabetsNum += 1;
        }
      }
      return georgianAlphabetsNum;
    }

    const checkedInputName = checkInputTextValidation(enteredName);
    const checkedInputSurname = checkInputTextValidation(enteredSurname);

    if (checkedInputName >= 2 && checkedInputSurname >= 2 && enteredGmail.endsWith("@redberry.ge") && +enteredPhoneNumber.startsWith('+995') && +selectedTeam > 0 && selectedPosition > 0)  {
      return ;
    } else {
      alert("please check inputs");
    }
  };

  const nameChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };
  const surnameChangeHandler = (event) => {
    setEnteredSurname(event.target.value);
  };
  const gmailChangeHandler = (event) => {
    setEnteredGmail(event.target.value);
  };
  const phoneNumberChangeHandler = (event) => {
    setEnteredPhoneNumber(event.target.value);
  };
  const teamChangeHandler = (event) => {
    setSelectedTeam(event.target.selectedOptions[0].id);
  }
  const positionChangeHandler = (event) => {
    setSelectedPosition(event.target.selectedOptions[0].id);
  }

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
            <TextInput
              name="სახელი"
              placeholder="გრიშა"
              classname="name"
              comment="მინიმუმ 2 სიმბოლო, ქართული ასოები"
              changeHandler={nameChangeHandler}
            />
            <TextInput
              name="გვარი"
              placeholder="ბაგრატიონი"
              classname="name"
              comment="მინიმუმ 2 სიმბოლო, ქართული ასოები"
              changeHandler={surnameChangeHandler}
            />
          </div>
          <SelectedInput 
            changeTeamHandler={teamChangeHandler}
          />
          <SelectedPosition 
            changePositionHandler={positionChangeHandler}
            teamId={selectedTeam}
          />
          <div className="container contact-info">
            <TextInput
              name="მეილი"
              placeholder="grish666@redberry.ge"
              className="contact-field"
              comment="უნდა მთავრდებოდეს @redberry.ge-ით"
              changeHandler={gmailChangeHandler}
            />
            <TextInput
              name="ტელეფონის ნომერი"
              placeholder="+995 598 00 07 01"
              className="contact-field"
              comment="უნდა აკმაყოფილებდეს ქართული მობ-ნომრის ფორმატს"
              changeHandler={phoneNumberChangeHandler}
            />
          </div>
          <SubmitButton classname="submit-button container" BtnName="შემდეგი" />
        </form>
      </div>
    </div>
  );
};

export default CreateUser;
