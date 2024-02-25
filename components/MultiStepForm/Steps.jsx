import React from "react";
import Step from "./Step";

export default function Steps({ steps }) {
  return (
    <div className="rounded-lg col-span-full bg-blue-600 py-4 flex flex-row justify-center gap-6 flex-wrap">
      {steps.map((step, i) => {
        return <Step key={i} step={step} />;
      })}
    </div>
  );
}
