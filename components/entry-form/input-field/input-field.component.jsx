import React from "react";

import styles from "./input-field.module.css";

const InputField = React.forwardRef((props, ref) => {
  const {
    cssStyles,
    inputType = "string",
    label,
    name,
    errorMsg,
    ...otherProps
  } = props;
  return (
    <div className={`flex flex-col ${cssStyles}`}>
      <label htmlFor={name}>{label}</label>
      <input
        ref={ref}
        name={name}
        className={styles.formInput}
        type={inputType}
        {...otherProps}
      />
      <span className="my-1 text-red-500 text-sm">{ errorMsg }</span>
    </div>
  );
});

export default InputField;
