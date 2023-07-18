// the main form view with changing content depending on the step

"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useDataCollector } from "../hooks/useDataCollector";
import Navbar from "./Navbar";
import Header from "./Header";
import Footer from "./Footer";
import ThankYou from "./ThankYou";
import InfoForm from "./InfoForm";
import PlanOptions from "./PlanOptions";
import AddonOptions from "./AddonOptions";
import Summary from "./Summary";

enum STEPS {
  PERSONAL = 1,
  PLAN = 2,
  ADDON = 3,
  FINISH = 4,
  CONFIRM = 5,
}

const Modal = () => {
  const [step, setStep] = useState(STEPS.PERSONAL);

  const dataStore = useDataCollector();

  const UserValidator = z.object({
    name: z
      .string()
      .min(1, {
        message: "This field is required",
      })
      .max(30, {
        message: "Name field cannot be more than 30 characters long.",
      }),
    email: z
      .string()
      .min(1, {
        message: "This field is required",
      })
      .regex(
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
        {
          message: "Please enter a valid email address.",
        }
      ),
    phone: z.string().min(1, {
      message: "This field is required",
    }),
  });

  type User = z.infer<typeof UserValidator>;

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<User>({
    resolver: zodResolver(UserValidator),
    defaultValues: {
      name: dataStore.info?.name,
      email: dataStore.info?.email,
      phone: dataStore.info?.phone,
    },
  });

  const onBack = () => {
    setStep((value) => value - 1);
  };

  const onNext = () => {
    setStep((value) => value + 1);
  };

  const handleActionSubmit = () => {
    if (step !== STEPS.CONFIRM) {
      onNext();
    } else {
      //submit data and display Thank You
      console.log(dataStore.info, dataStore.plan, dataStore.addons);
    }
  };

  const handleSecondarySubmit = () => {
    if (step !== STEPS.PERSONAL) {
      onBack();
    }
  };

  const changePlan = () => {
    setStep(STEPS.PLAN);
  };

  let bodyContent = (
    <div className="desktop:col-span-2">
      <div className="relative bg-magnolia desktop:bg-white h-screen desktop:h-[500px]">
        <div className="absolute top-[-72px] desktop:top-0 mx-4 p-6 bg-white w-11/12 rounded-xl desktop:p-10">
          <Header
            title="Personal Info"
            subtitle="Please provide your name, email address, and phone number"
          />
          <div className="pb-2">
            <InfoForm register={register} errors={errors} watch={watch} />
          </div>
        </div>
      </div>
      <div className="fixed desktop:relative bottom-0 h-[4.5rem] desktop:px-16 w-full bg-white">
        <Footer
          primaryActionLabel="Next Step"
          secondaryActionLabel=""
          handleActionSubmit={handleSubmit(handleActionSubmit)}
          handleSecondarySubmit={handleSecondarySubmit}
        />
      </div>
    </div>
  );

  if (step === STEPS.PLAN) {
    bodyContent = (
      <div className="desktop:col-span-2 ">
        <div className="relative bg-magnolia desktop:bg-white h-screen desktop:h-[500px]">
          <div className="absolute top-[-72px] desktop:top-0 mx-4 p-6 bg-white w-11/12 rounded-xl desktop:p-10">
            <Header
              title="Select your plan"
              subtitle="You have the option of monthly or yearly billing."
            />
            <div className="">
              <PlanOptions />
            </div>
          </div>
        </div>
        <div className="fixed desktop:relative bottom-0 h-[4.5rem] desktop:px-16 w-full  bg-white ">
          <Footer
            primaryActionLabel="Next Step"
            secondaryActionLabel="Go Back"
            handleActionSubmit={handleActionSubmit}
            handleSecondarySubmit={handleSecondarySubmit}
          />
        </div>
      </div>
    );
  }

  if (step === STEPS.ADDON) {
    bodyContent = (
      <div className="desktop:col-span-2 ">
        <div className="relative bg-magnolia desktop:bg-white h-screen desktop:h-[500px]">
          <div className="absolute top-[-72px] desktop:top-0 mx-4 p-6 bg-white w-11/12 rounded-xl desktop:p-10">
            <Header
              title="Pick add-ons"
              subtitle="Add-ons help enhance your gaming experience."
            />
            <div className="">
              <AddonOptions />
            </div>
          </div>
        </div>
        <div className="fixed desktop:relative bottom-0 h-[4.5rem] desktop:px-16 w-full  bg-white ">
          <Footer
            primaryActionLabel="Next Step"
            secondaryActionLabel="Go Back"
            handleActionSubmit={handleActionSubmit}
            handleSecondarySubmit={handleSecondarySubmit}
          />
        </div>
      </div>
    );
  }

  if (step === STEPS.FINISH) {
    bodyContent = (
      <div className="desktop:col-span-2">
        <div className="relative bg-magnolia desktop:bg-white h-screen desktop:h-[500px]">
          <div className="absolute top-[-72px] desktop:top-0 mx-4 p-6 bg-white w-11/12 rounded-xl desktop:p-10">
            <Header
              title="Finishing up"
              subtitle="Double-check everything looks OK before confirming."
            />
            <div>
              <Summary ChangePlan={changePlan} />
            </div>
          </div>
        </div>
        <div className="fixed desktop:relative bottom-0 h-[4.5rem] desktop:px-16 w-full  bg-white ">
          <Footer
            primaryActionLabel="Confirm"
            secondaryActionLabel="Go Back"
            handleActionSubmit={handleActionSubmit}
            handleSecondarySubmit={handleSecondarySubmit}
          />
        </div>
      </div>
    );
  }

  if (step === STEPS.CONFIRM) {
    bodyContent = (
      <div className="desktop:col-span-2">
        <div
          onLoad={handleActionSubmit}
          className="relative bg-magnolia desktop:bg-white h-screen desktop:h-[500px]"
        >
          <div className="absolute top-[-72px] desktop:top-[12%] mx-4 p-6 bg-white w-11/12 rounded-xl desktop:px-10">
            <div className="">
              <ThankYou />
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col desktop:grid desktop:grid-cols-3 desktop:h-[600px]">
      <Navbar selectedPage={step < STEPS.CONFIRM ? step : step - 1} />
      {bodyContent}
    </div>
  );
};

export default Modal;
