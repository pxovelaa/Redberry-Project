import React, { useState } from "react";
import vector from "../resources/images/Vector.svg";
import "./CreateUser.css";
import { Link } from "react-router-dom";
import TextInput from "../components/TextInput";
import SubmitButton from "../components/SubmitButton";
import DragImage from "../components/DropImage";
import LaptopBrand from "../components/LaptopBrand";
import Cpu from "../components/Cpu";

// titoelu inputistvis vidzaxebt useStates

// vqmnit tanamshromlis infos pages

const CreateLaptopInfo = (props) => {
  const [values, setValues] = useState({
    token: "4e61384a5bcb364b6e01634651bef039",
    laptop_name: "",
    laptop_image: "",
    laptop_brand_id: "",
    laptop_cpu: "",
    laptop_cpu_cores: "",
    laptop_cpu_threads: "",
    laptop_ram: "",
    laptop_hard_drive_type: "",
    laptop_state: "",
    laptop_price: "",
  });

  const input1 = [
    {
      id: 7,
      type: "text",
      label: "ლეპტოპის სახელი",
      name: "laptop_name",
      placeholder: "HP",
      className: "name",
      comment: "ლათინური ასოები, ციფრები, !@#$%^&*()_+= ",
      required: true,
    },
  ];


  const selectLaptopBrand = [
    {
      id: 8,
      name: "laptop_brand_id",
      required: true,
    },
  ];


  const selectCpu = [
    {
      id: 9,
      name: "laptop_cpu",
      required:true,
    },
  ];

  console.log(values.token);

  const input2 = [
    {
      id: 5,
      type: "number",
      label: "CPU-ს ბირთვი",
      name: "laptop_cpu_cores",
      placeholder: "14",
      className: "contact-field cpu-width",
      comment: "მხოლოდ ციფრები",
      required: true,
    },

    {
      id: 6,
      type: "number",
      label: "CPU-ს ნაკადი",
      name: "phone_number",
      placeholder: "+995 598 00 07 01",
      className: "laptop_cpu_threads",
      comment: "მხოლოდ ციფრები",
      required: true,
    },
  ];

  const createUserHandler = (event) => {
    event.preventDefault();
    
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
    
  };

  const onDrag = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  }


  

  const onSelect = (e) => {
    setValues({ ...values, [e.target.name]: e.target.selectedOptions[0].id });
  };

  console.log(values);

  

  return (
    <div>
      <div>
        <Link to="/create-user">
          <img className="vector" src={vector} alt="vector" />
        </Link>
        <div className="user_info container">
          <h3 >თანამშრომლის ინფო</h3>
          <h3 className="active_page">ლეპტოპის მახასიათებლები</h3>
        </div>
        <form onSubmit={createUserHandler}>
          <div>
            <DragImage 
              value={values.laptop_image}
              onChange={onDrag}
              />
          </div>
          <div className="container inputs-container underline">
            {input1.map((input) => (
              <TextInput
                key={input.id}
                {...input}
                value={values[input.name]}
                onChange={onChange}
              />
            ))}
            {selectLaptopBrand.map((input) => (
            <LaptopBrand
              key={input.id}
              {...input}
              value={values[input.name]}
              onChange={onSelect}
            />
          ))}

          </div >
              

          <div className="container contact-info cpu-info">
          {selectCpu.map((input) => (
            <Cpu
              key={input.id}
              {...input}
              value={values[input.name]}
              onChange={onSelect}
            />
          ))}

            {input2.map((input) => (
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

export default CreateLaptopInfo;
