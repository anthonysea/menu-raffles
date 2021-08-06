import React from "react";

import { useController } from "react-hook-form";

const ProvinceInputField = ({ bcOnly, name, control }) => {
  const {
    field: { onChange, value },
    fieldState: { error },
  } = useController({
    name,
    control,
    rules: {
      required: "Province is required.",
      validate: (value) => {
        // console.log("province: ", value);
        if (bcOnly) {
          return value === "BC" ? true : "Raffle is open to BC residents only.";
        }
      },
    },
    defaultValue: bcOnly ? "BC" : "",
  });

  const provinces = [
    "AB",
    "BC",
    "MB",
    "SK",
    "ON",
    "YT",
    "NL",
    "PE",
    "NS",
    "NB",
    "QC",
    "NT",
    "NU",
  ];

  return (
    <div className="flex flex-col md:w-1/3 md:mr-4">
      <label>Province</label>
      <select className="my-1 p-1" value={value} onChange={onChange}>
        {provinces.map((prov, ind) => (
          <option key={ind} value={prov}>
            {prov}
          </option>
        ))}
      </select>
      <span className="my-1 text-red-500 text-sm">{error?.message}</span>
    </div>
  );
};

export default ProvinceInputField;
