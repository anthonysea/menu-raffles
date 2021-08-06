import React, { useState } from "react";
import { useController } from "react-hook-form";

import cn from "classnames";

import styles from "./size-field.module.css";

const SizeButtonGroup = ({ sizes, name, control }) => {
  const {
    field: { onChange, value },
    fieldState: { error },
  } = useController({
    name,
    control,
    rules: {
      required: "Size is required.",
    },
  });

  const SizeButton = ({ onClick, size }) => {
    const classNames = cn(styles.sizeBtn, {
      [styles.selected]: value === size.toString(),
    });
    return (
      <label className={styles.sizeBtnLabel}>
        <button
          onClick={onClick}
          className={classNames}
          type="button"
          value={size}
        >
          {size}
        </button>
      </label>
    );
  };

  // Make layout mobile responsive
  return (
    <div className="flex flex-col">
      <label>Size</label>
      <div className="flex flex-row mt-1">
        {sizes.map((size, ind) => {
          return <SizeButton size={size} key={ind} onClick={onChange} />;
        })}
      </div>
      <span className="my-1 text-red-500 text-sm">{error?.message}</span>
    </div>
  );
};

export default SizeButtonGroup;
