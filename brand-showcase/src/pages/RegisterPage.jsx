import RegisterForm from "../components/RegisterForm";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const RegisterPage = () => {
  const [input, setInput] = useState({
    username: "",
    phoneNumber: "",
    email: "",
    password: "",
    address: "",
  });
  const navigate = useNavigate();

  const handleInput = (event, key) => {
    const nevVal = { ...input };
    nevVal[key] = event.target.value;
    setInput(nevVal);
  };
  const handleRegister = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:3000/register", input)
      .then(({ data }) => {
        console.log("success add data");
        navigate("/login");
      })
      .catch((err) => {
        console.log(err);
        toast.error(err.response.data.message, {
          position: "top-right",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      });
  };

  return (
    <>
      <RegisterForm input={input} handleInput={handleInput} handleRegister={handleRegister} />
    </>
  );
};

export default RegisterPage;
