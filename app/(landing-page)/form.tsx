import StepForm from "@/components/MultiStepForm/StepForm";
import Steps from "@/components/MultiStepForm/Steps";
import React from "react";

export default function Form() {
  const steps = [
    {
      number: 1,
      title: "Personal Info",
    },
    {
      number: 2,
      title: "Education",
    },
    {
      number: 3,
      title: "Confirmation",
    },
  ];
  return (
    <div className=" p-4 my-10">
      <div className="text-center my-4 text-4xl font-bold">
        Fill this form to check your eligibility
      </div>
      <div className="mx-auto w-full max-w-3xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-4 md:p-6 dark:bg-gray-800 dark:border-gray-700 gap-4">
        {/* Steps */}
        <Steps steps={steps} />
        {/* Form */}
        <div className="rounded-lg col-span-full md:col-span-8">
          <StepForm />
        </div>
      </div>
    </div>
  );
}
