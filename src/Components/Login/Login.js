import React from "react";
import getData from "../../Utilities/getData";
import { useForm } from "react-hook-form";

const Login = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    getData("users", data);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>Username</label>
      <input
        type="text"
        id="username"
        name="username"
        placeholder="Username"
        ref={register}
      ></input>
      <label>Email</label>
      <input
        type="email"
        id="email"
        name="email"
        placeholder="Email"
        ref={register}
      ></input>
      <label>Password</label>
      <input
        type="text"
        id="password"
        name="password"
        placeholder="Password"
        ref={register}
      ></input>

      <button type="submit">Submit</button>
    </form>
  );
};

export default Login;
