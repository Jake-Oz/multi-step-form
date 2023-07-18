"use client";

import { FieldErrors, UseFormRegister, UseFormWatch } from "react-hook-form";

import { useEffect } from "react";
import { useDataCollector } from "../hooks/useDataCollector";

interface InfoFormProps {
  register: UseFormRegister<{ name: string; email: string; phone: string }>;
  errors: FieldErrors<{
    name: string;
    email: string;
    phone: string;
  }>;
  watch: UseFormWatch<{ name: string; email: string; phone: string }>;
}

const InfoForm: React.FC<InfoFormProps> = ({ register, errors, watch }) => {
  const dataStore = useDataCollector();

  const name = watch("name");
  const email = watch("email");
  const phone = watch("phone");

  useEffect(() => {
    dataStore.updateInfo({
      name: name,
      email: email,
      phone: phone,
    });
  }, [name, email, phone]);

  return (
    <form className="mt-4">
      <div className="flex justify-between items-center">
        <label className="text-marineBlue text-sm desktop:mt-4">Name</label>
        {errors.name?.message && (
          <p className="text-strawberryRed text-[0.7rem]">
            {errors.name?.message}
          </p>
        )}
      </div>
      <input
        className={`w-full h-9 px-3 desktop:mt-1 text-marineBlue hover:cursor-pointer focus:outline-none focus:border-purplishBlue border rounded border-lightGray ${
          errors.name ? "border-strawberryRed focus:border-strawberryRed" : ""
        }`}
        {...register("name")}
        placeholder="e.g. Stephen King"
      />

      <div className="flex justify-between items-center">
        <label className="mt-3 text-marineBlue text-sm">Email Address</label>
        {errors.email?.message && (
          <p className="text-strawberryRed text-[0.7rem]">
            {errors.email?.message}
          </p>
        )}
      </div>
      <input
        className={`w-full h-9 px-3 desktop:mt-1 text-marineBlue hover:cursor-pointer focus:outline-none focus:border-purplishBlue border rounded border-lightGray ${
          errors.email ? "border-strawberryRed focus:border-strawberryRed" : ""
        }`}
        type="email"
        {...register("email")}
        placeholder="e.g. stephenking@lorem.com"
      />
      <div className="flex justify-between items-center">
        <label className="mt-3 text-marineBlue text-sm">Phone Number</label>
        {errors.phone?.message && (
          <p className="text-strawberryRed text-[0.7rem]">
            {errors.phone?.message}
          </p>
        )}
      </div>
      <input
        className={`w-full h-9 px-3  text-marineBlue hover:cursor-pointer focus:outline-none focus:border-purplishBlue border rounded border-lightGray ${
          errors.phone ? "border-strawberryRed focus:border-strawberryRed" : ""
        }`}
        {...register("phone")}
        placeholder="e.g. +61 2 9876 3333"
      />
    </form>
  );
};

export default InfoForm;
