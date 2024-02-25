"use client";
import React from "react";
import { useSelector } from "react-redux";

export default function Step({ step }) {
  const { number, title } = step;
  const currentStep = useSelector((store) => store.onboarding.currentStep);
  return (
    <div className="flex flex-col items-center gap-3 w-40">
      <div
        className={`h-10 w-10 p-4 text-slate-50 border border-slate-50 rounded-full flex items-center justify-center font-bold flex-shrink-0 ${
          number === currentStep ? "bg-blue-100 border-0" : ""
        }`}
      >
        {number}
      </div>
      <div className="flex-col flex  justify-center">
        <h3 className="uppercase text-sm text-white font-bold">{title}</h3>
      </div>
    </div>
  );
}
