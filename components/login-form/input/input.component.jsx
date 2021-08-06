
import React from "react";

import { useController } from "react-hook-form";

const Input = ({ name, control, labelName, inputType}) => {
	const {
		field: { onChange, value },
		formState: { error },		
	} = useController({
		name,
		control,
	})
  return (
    <div className={`flex flex-col `}>
      <label htmlFor={name}>{labelName}</label>
      <input
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
