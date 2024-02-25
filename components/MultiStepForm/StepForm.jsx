"use client";

import { useSelector } from "react-redux";
import Address from "./StepForms/Address";
import FormConfirmation from "./StepForms/FormConfirmation";
import PersonalInfoForm from "./StepForms/PersonalInfoForm";

export default function StepForm() {
  const currentStep = useSelector((store) => store.onboarding.currentStep);
  function renderFormByStep(step) {
    if (step === 1) {
      return <PersonalInfoForm />;
    } else if (step === 2) {
      return <Address />;
    } else if (step === 3) {
      return <FormConfirmation />;
    }
  }
  return <>{renderFormByStep(currentStep)}</>;
}
