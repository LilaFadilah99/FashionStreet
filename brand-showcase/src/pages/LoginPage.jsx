import { Link, useNavigate } from "react-router-dom";
import LoginForm from "../components/LoginForm";
import { useDispatch, useSelector } from "react-redux";
import { handle_login } from "../store/actions/user";
import { useState } from "react";

const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  const handleInput = (event, key) => {
    const nevVal = { ...input };
    nevVal[key] = event.target.value;
    setInput(nevVal);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(handle_login(input)).then((data) => {
      let { role } = data.payload;
      if (role === "admin") {
        navigate("/admin");
      } else {
        navigate("/");
      }
    });
  };

  return (
    <>
      <LoginForm input={input} handleInput={handleInput} handleSubmit={handleSubmit} />
    </>
  );
};

export default LoginPage;
