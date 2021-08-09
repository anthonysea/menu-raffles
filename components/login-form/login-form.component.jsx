import React from "react";
import { useForm } from "react-hook-form";

import { useAuth } from "../../hooks/use-auth";

import Input from "./input/input.component";

const LoginForm = () => {
  const auth = useAuth();
  
  const {
    handleSubmit,
    control,
    formState: { errors },
    setError,
    clearErrors,
  } = useForm({
    mode: "onBlur",
		defaultValues: {
      email: "",
			password: "",
		}
  });

  const onSubmit = async (data) => {
    clearErrors("server");
    console.log("login form data: ", data);
    console.log("form errors: ", errors);

    try {
      await auth.signin(data.email, data.password);
    } catch (error) {
      console.log(error);
      setError("server", {
        type: "manual",
        message: "Invalid username or password.",
      });
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input
        name="email"
        labelName="Email"
        inputType="text"
        control={control}
        inputRules={{
          required: "Email is required."
        }}
      />
      <Input
        name="password"
        labelName="Password"
        inputType="password"
        control={control}
        inputRules={{
          required: "Password is required."
        }}
      />
      <div className="flex flex-col py-2 my-2">
        <p className="my-1 text-red-500 text-sm">{ errors.server?.message }</p>
        <input
          onClick={() => clearErrors("server")}
          className="w-full border border-gray-500 hover:bg-black hover:text-white transition-colors duration-500 linear cursor-pointer md:w-1/5 p-2"
          type="submit"
          value="Login"
        />
      </div>
    </form>
  );
};

export default LoginForm;
