"use client";

import { plans } from "@/app/data/plans";
import { useDataCollector, Plan, Addons } from "../hooks/useDataCollector";
import Toggle from "react-styled-toggle";
import { useState } from "react";
import Image from "next/image";
import arcadeIcon from "@/public/icon-arcade.svg";
import advancedIcon from "@/public/icon-advanced.svg";
import proIcon from "@/public/icon-pro.svg";

const PlanOptions = () => {
  const data = useDataCollector();
  const [isYearly, setIsYearly] = useState(data.yearly);
  const [currentPlan, setCurrentPlan] = useState(data.plan);

  const planOptions = plans[0].plan;

  const handleToggle = () => {
    data.updateYearly(!isYearly);
    setIsYearly((prev) => !prev);
  };

  const handleClick = (plan: Plan) => {
    data.updatePlan(plan);
    setCurrentPlan(plan);
  };

  return (
    <div>
      <div className="desktop:flex desktop:gap-4">
        <button
          className={`flex flex-col mt-6 desktop:mt-8 max-h-[5.5rem] w-full desktop:max-h-80 p-4 border rounded-lg  ${
            currentPlan === Plan.Arcade
              ? " border-purplishBlue bg-magnolia"
              : "border-coolGray bg-white"
          }`}
          onClick={() => handleClick(Plan.Arcade)}
        >
          <div className="flex gap-4 desktop:flex-col desktop:gap-10">
            <Image src={arcadeIcon} alt="Arcade Icon" />
            <div className="flex flex-col items-start gap-1">
              <h1 className="text-marineBlue font-medium leading-4">Arcade</h1>
              <p className="text-coolGray text-sm">
                $
                {isYearly
                  ? planOptions.yearly.arcade
                  : planOptions.monthly.arcade}
                <span>{isYearly ? "/yr" : "/mo"}</span>
              </p>
            </div>
          </div>
          <p className="mt-1 ml-14 desktop:mx-0 ">
            {isYearly && (
              <p className="text-marineBlue text-xs">2 months free</p>
            )}
          </p>
        </button>
        <button
          className={`flex flex-col mt-3 desktop:mt-8 max-h-[5.5rem] w-full desktop:max-h-80 p-4 border rounded-lg  ${
            currentPlan === Plan.Advanced
              ? " border-purplishBlue bg-magnolia"
              : "border-coolGray bg-white"
          }`}
          onClick={() => handleClick(Plan.Advanced)}
        >
          <div className="flex gap-4 desktop:flex-col desktop:gap-10">
            <Image src={advancedIcon} alt="Advanced Icon" />
            <div className="flex flex-col items-start gap-1">
              <h1 className="text-marineBlue font-medium leading-4">
                Advanced
              </h1>
              <p className="text-coolGray text-sm">
                $
                {isYearly
                  ? planOptions.yearly.advanced
                  : planOptions.monthly.advanced}
                <span>{isYearly ? "/yr" : "/mo"}</span>
              </p>
            </div>
          </div>
          <p className="mt-1 ml-14 desktop:mx-0 ">
            {isYearly && (
              <p className="text-marineBlue text-xs">2 months free</p>
            )}
          </p>
        </button>
        <button
          className={`flex flex-col mt-3 desktop:mt-8 max-h-[5.5rem] w-full desktop:max-h-80 p-4 border rounded-lg  ${
            currentPlan === Plan.Pro
              ? " border-purplishBlue bg-magnolia"
              : "border-coolGray bg-white"
          }`}
          onClick={() => handleClick(Plan.Pro)}
        >
          <div className="flex gap-4 desktop:flex-col desktop:gap-10">
            <Image src={proIcon} alt="Pro Icon" />
            <div className="flex flex-col items-start gap-1">
              <h1 className="text-marineBlue font-medium leading-4">Pro</h1>
              <p className="text-coolGray text-sm">
                ${isYearly ? planOptions.yearly.pro : planOptions.monthly.pro}
                <span>{isYearly ? "/yr" : "/mo"}</span>
              </p>
            </div>
          </div>
          <p className="mt-1 ml-14 desktop:mx-0 ">
            {isYearly && (
              <p className="text-marineBlue text-xs">2 months free</p>
            )}
          </p>
        </button>
      </div>
      <div className="flex justify-center items-center gap-5 mt-6 h-12 rounded-lg bg-alabaster">
        <p
          className={`text-sm ${
            isYearly ? "text-coolGray" : "text-marineBlue"
          }`}
        >
          Monthly
        </p>
        <Toggle
          disabled={false}
          checked={isYearly}
          onChange={handleToggle}
          backgroundColorChecked="hsl(213, 96%, 18%)"
          backgroundColorUnchecked="hsl(213, 96%, 18%)"
          backgroundColorButton="white"
          name="Billing Period"
          value=""
          labelRight=""
          labelLeft=""
          sliderWidth={14}
          sliderHeight={14}
          width={44}
          height={22}
          translate={20}
        />
        <p
          className={`text-sm ${
            isYearly ? "text-marineBlue" : "text-coolGray"
          }`}
        >
          Yearly
        </p>
      </div>
    </div>
  );
};

export default PlanOptions;
