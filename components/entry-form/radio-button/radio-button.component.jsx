import React from 'react';
import styles from "./radio-button.module.css";

const RadioButton = React.forwardRef((props, ref) => {
  const { value } = props;

  return (
    <div className={`p-2 ${styles.radioBtnContainer}`}>
      <input
        ref={ref}
        className={`${styles.radioBtn}`}
        type="radio"
        name="size"
        id={value}
        value={`${value}`}
      />
      <label htmlFor={value} className="px-2">
        {value}
      </label>
    </div>
  );
});


// const RadioButton = ({ value }) => {
//   return (
//     <div className={`p-2 ${styles.radioBtnContainer}`}>
//       <input
//         className={`${styles.radioBtn}`}
//         type="radio"
//         name="sizeInput"
//         id={value}
//         value={value}
//       />
//       <label htmlFor={value} className="px-2">
//         {value}
//       </label>
//     </div>
//   );
// };

export default RadioButton;
