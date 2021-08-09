import React from "react";

import { useController } from "react-hook-form";

const Input = ({ name, control, labelName, inputType, inputRules}) => {
	const {
		field: { onChange, value },
		fieldState: { error },		
	} = useController({
		name,
		control,
		rules: inputRules,
	})
  return (
    <div className={`flex flex-col `}>
      <label htmlFor={name}>{labelName}</label>
      <input
				className="border border-gray-500 p-1 pl-2 w-full md:w-2/5"
				value={value}
				onChange={onChange}
        name={name}
        type={inputType}
      />
      <span className="my-1 text-red-500 text-sm">{ error?.message }</span>
    </div>
  );
};

export default Input;
