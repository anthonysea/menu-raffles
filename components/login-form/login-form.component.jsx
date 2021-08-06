import React from "react";

import { useForm } from "react-hook-form";

import { auth } from "../../utils/firebase/firebase";

import Input from "./input/input.component";

const LoginForm = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
		defaultValues: {
			email: "",
			password: "",
		}
  });

  const onSubmit = async (data) => {
    console.log("login form data: ", data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input
        name="email"
        labelName="Email"
        inputType="text"
        control={control}
      />
      <Input
        name="password"
        labelName="Password"
        inputType="password"
        control={control}
      />
      <div className="py-2 my-2">
        <input
          className="w-full border border-gray-500 hover:bg-black hover:text-white transition-colors duration-500 linear cursor-pointer md:w-1/5 p-2"
          type="submit"
          value="Login"
        />
      </div>
    </form>
  );
};

export default LoginForm;
