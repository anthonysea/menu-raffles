import React from "react";
import { useForm } from "react-hook-form";

import ProvinceInputField from "./province-input-field/province-input-field.component";
import InputField from "./input-field/input-field.component";
import SizeButtonGroup from "./size-field/size-field.component";

import { addEntryToRaffle } from "../../utils/serializer.utils";

const EntryForm = ({ raffle }) => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
    defaultValues: {
      province: "BC",
    },
  });
  
  const onSubmit = async (data) => {
    console.log("form data: ", data);
    console.log("form errors: ", errors);

    const res = await addEntryToRaffle(raffle.id, data);
    if (!res) {
      console.log("Duplicate entry, entry not recorded");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
      <h1 className="text-xl font-semibold underline">Entry Form</h1>
      <InputField
        cssStyles="py-2 my-2 md:w-1/2"
        label="Name"
        name="name"
        errorMsg={errors.name?.message}
        {...register("name", {
          required: "Name is required.",
        })}
      />
      <div className="py-2 my-2 md:flex md:flex-row">
        <InputField
          cssStyles="md:w-1/2 md:mr-4"
          label="Address"
          name="address"
          errorMsg={errors.address?.message}
          {...register("address", {
            required: "Address is required.",
          })}
        />
        <InputField
          cssStyles="md:w-1/3"
          label="Apartment, suite, etc. (optional)"
          name="addressExt"
          errorMsg={errors.addressExt?.message}
          {...register("addressExt")}
        />
      </div>
      <div className="py-2 my-2 md:flex md:flex-row md:justify-start">
        <InputField
          cssStyles="md:w-1/3 md:mr-4"
          label="City"
          name="city"
          errorMsg={errors.city?.message}
          {...register("city", {
            required: "City is required.",
          })}
        />
        <ProvinceInputField
          bcOnly={raffle.bcOnly}
          control={control}
          name="province"
        />
        <InputField
          cssStyles="md:w-1/3"
          label="Postal Code"
          name="postalCode"
          errorMsg={errors.postalCode?.message}
          {...register("postalCode", {
            required: "Postal Code is required.",
            pattern: {
              value:
                /[ABCEGHJ-NPRSTVXY]\d[ABCEGHJ-NPRSTV-Z][ -]?\d[ABCEGHJ-NPRSTV-Z]\d$/,
              message: "Input is not a valid postal code.",
            },
          })}
        />
      </div>
      <InputField
        inputType="text"
        cssStyles="py-2 my-2 md:w-1/2"
        label="Email"
        name="email"
        errorMsg={errors.email?.message}
        {...register("email", {
          required: "Email is required.",
          pattern: {
            value:
              /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            message: "Input is not a valid email.",
          },
        })}
      />
      <InputField
        inputType="tel"
        cssStyles="py-2 my-2 md:w-1/2"
        label="Phone Number"
        name="phoneNumber"
        errorMsg={errors.phoneNumber?.message}
        {...register("phoneNumber", {
          required: "Phone Number is required.",
          minLength: 6,
          maxLength: 12,
        })}
      />

      <SizeButtonGroup control={control} name="size" sizes={raffle.sizeRun} />

      <div className="py-2 my-2">
        <input
          className="w-full border border-gray-500 hover:bg-black hover:text-white transition-colors duration-500 linear cursor-pointer md:w-1/5 p-2"
          type="submit"
          value="Submit"
        />
      </div>
    </form>
  );
};

export default EntryForm;
