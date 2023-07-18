"use client";

import { plans } from "@/app/data/plans";
import { useDataCollector, Addons } from "../hooks/useDataCollector";
import { useState } from "react";
import Image from "next/image";
import checkmarkIcon from "@/public/icon-checkmark.svg";

const AddonOptions = () => {
  const data = useDataCollector();
  const [isYearly, setIsYearly] = useState(data.yearly);
  const [currentAddons, setCurrentAddons] = useState(data.addons);

  const planOptions = plans[0].addOns;

  const handleClick = (addons: Addons) => {
    if (currentAddons.includes(addons)) {
      const newArray = currentAddons.filter((item) => item != addons);
      setCurrentAddons(newArray);
      data.updateAddons(newArray);
    } else {
      setCurrentAddons([...currentAddons, addons]);
      data.updateAddons([...data.addons, addons]);
    }
  };

  return (
    <div>
      <button
        className={`flex justify-between items-center mt-6 h-16 w-full p-4 border border-lightGray hover:border-purplishBlue rounded-lg  ${
          currentAddons.includes(Addons.online)
            ? " border-purplishBlue bg-magnolia"
            : "border-coolGray bg-white"
        }`}
        onClick={() => handleClick(Addons.online)}
      >
        <div className="flex items-center gap-4">
          <div
            className={`flex justify-center items-center border border-lightGray rounded-md h-6 w-6 ${
              currentAddons.includes(Addons.online)
                ? " border-marineBlue bg-purplishBlue"
                : " border-coolGray  bg-white"
            }`}
          >
            <Image
              src={checkmarkIcon}
              alt="Checkmark Icon"
              height={15}
              width={15}
            />
          </div>

          <div className="flex flex-col items-start mr-2">
            <h1 className="text-marineBlue font-medium">Online Service</h1>
            <p className="text-coolGray text-xs text-left">
              Access to multiplayer games
            </p>
          </div>
        </div>
        <div>
          <p className="text-purplishBlue text-sm ">
            +$
            {isYearly ? planOptions.yearly.online : planOptions.monthly.online}
            <span>{isYearly ? "/yr" : "/mo"}</span>
          </p>
        </div>
      </button>
      <button
        className={`flex justify-between items-center mt-3 h-16 w-full p-4 border border-lightGray hover:border-purplishBlue rounded-lg  ${
          currentAddons.includes(Addons.storage)
            ? " border-purplishBlue bg-magnolia"
            : "border-coolGray bg-white"
        }`}
        onClick={() => handleClick(Addons.storage)}
      >
        <div className="flex items-center gap-4">
          <div
            className={`flex justify-center items-center border border-lightGray rounded-md h-6 w-6 ${
              currentAddons.includes(Addons.storage)
                ? " border-marineBlue bg-purplishBlue"
                : "border-coolGray bg-white"
            }`}
          >
            <Image
              src={checkmarkIcon}
              alt="Checkmark Icon"
              height={15}
              width={15}
            />
          </div>

          <div className="flex flex-col items-start">
            <h1 className="text-marineBlue font-medium">Larger Storage</h1>
            <p className="text-coolGray text-xs text-left">
              Extra 1TB of cloud save
            </p>
          </div>
        </div>
        <div>
          <p className="text-purplishBlue text-sm ">
            +$
            {isYearly
              ? planOptions.yearly.storage
              : planOptions.monthly.storage}
            <span>{isYearly ? "/yr" : "/mo"}</span>
          </p>
        </div>
      </button>
      <button
        className={`flex justify-between items-center mt-3 h-16 w-full p-4 border border-lightGray hover:border-purplishBlue rounded-lg  ${
          currentAddons.includes(Addons.profile)
            ? " border-purplishBlue bg-magnolia"
            : "border-coolGray bg-white"
        }`}
        onClick={() => handleClick(Addons.profile)}
      >
        <div className="flex items-center gap-4">
          <div
            className={`flex justify-center items-center border border-lightGray rounded-md h-6 w-6 ${
              currentAddons.includes(Addons.profile)
                ? " border-marineBlue bg-purplishBlue"
                : "border-coolGray bg-white"
            }`}
          >
            <Image
              src={checkmarkIcon}
              alt="Checkmark Icon"
              height={15}
              width={15}
            />
          </div>

          <div className="flex flex-col items-start mr-2">
            <h1 className="text-marineBlue font-medium">
              Customizable profile
            </h1>
            <p className="text-coolGray text-xs text-left">
              Custom theme on your profile
            </p>
          </div>
        </div>
        <div>
          <p className="text-purplishBlue text-sm ">
            +$
            {isYearly
              ? planOptions.yearly.profile
              : planOptions.monthly.profile}
            <span>{isYearly ? "/yr" : "/mo"}</span>
          </p>
        </div>
      </button>
    </div>
  );
};

export default AddonOptions;
