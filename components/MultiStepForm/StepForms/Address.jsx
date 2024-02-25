"use client";
import NavButtons from "@/components/FormInputs/NavButtons";
import SelectInput from "@/components/FormInputs/SelectInput";
import TextInput from "@/components/FormInputs/TextInput";
import {
  setCurrentStep,
  updateFormData,
} from "@/redux/slices/onboardingStudentsSlice";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";

export default function AddressForm() {
  const currentStep = useSelector((store) => store.onboarding.currentStep);
  const formData = useSelector((store) => store.onboarding.formData);
  const [countries, setCountries] = useState([]);
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);

  const {
    register,
    reset,
    watch,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: {
      ...formData,
    },
  });

  const dispatch = useDispatch();

  // Fetch Countries data from API
  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await fetch(
          "https://api.countrystatecity.in/v1/countries",
          {
            headers: {
              "X-CSCAPI-KEY": "YOUR_API_KEY", // Replace with your actual API key
            },
          }
        );
        const data = await response.json();
        setCountries(data);
      } catch (error) {
        console.error("Error fetching countries:", error);
      }
    };

    fetchCountries();
  }, []);

  // Fetch States and Cities based on selected country
  const handleCountryChange = async (selectedCountry) => {
    try {
      const response = await fetch(
        `https://api.countrystatecity.in/v1/countries/${selectedCountry}/states`,
        {
          headers: {
            "X-CSCAPI-KEY": "YOUR_API_KEY", // Replace with your actual API key
          },
        }
      );
      const data = await response.json();
      setStates(data);

      // Clear city when country changes
      setCities([]);
      setValue("city", ""); // Clear the city field in the form
    } catch (error) {
      console.error("Error fetching states:", error);
    }
  };

  // Fetch Cities based on selected state
  const handleStateChange = async (selectedState) => {
    const selectedCountry = watch("country"); // Get the selected country
    try {
      const response = await fetch(
        `https://api.countrystatecity.in/v1/countries/${selectedCountry}/states/${selectedState}/cities`,
        {
          headers: {
            "X-CSCAPI-KEY": "YOUR_API_KEY", // Replace with your actual API key
          },
        }
      );
      const data = await response.json();
      setCities(data);
    } catch (error) {
      console.error("Error fetching cities:", error);
    }
  };

  async function processData(data) {
    dispatch(updateFormData(data));
    dispatch(setCurrentStep(currentStep + 1));
  }

  return (
    <form className="px-12 py-4" onSubmit={handleSubmit(processData)}>
      <div className="mb-8">
        <h5 className="text-xl md:text-3xl font-bold text-gray-900 dark:text-white">
          Address Information
        </h5>
      </div>
      <div className="grid gap-2 sm:grid-cols-2">
        <TextInput
          label="Address Line 1"
          name="addressLine1"
          register={register}
          errors={errors}
        />
        <TextInput
          label="Address Line 2 (Optional)"
          name="addressLine2"
          register={register}
          errors={errors}
        />
        <SelectInput
          label="Country"
          name="country"
          options={
            Array.isArray(countries)
              ? countries.map((country) => ({
                  id: country.iso2,
                  title: country.name,
                }))
              : []
          }
          onChange={(selectedCountry) => {
            setValue("country", selectedCountry);
            handleCountryChange(selectedCountry);
          }}
          register={register}
        />

        <SelectInput
          label="State/Province"
          name="state"
          options={
            Array.isArray(states)
              ? states.map((state) => ({
                  id: state.isoCode,
                  title: state.name,
                }))
              : []
          }
          onChange={(selectedState) => {
            setValue("state", selectedState);
            handleStateChange(selectedState);
          }}
          register={register}
        />

        <SelectInput
          label="City"
          name="city"
          options={
            Array.isArray(cities)
              ? cities.map((city) => ({ id: city.id, title: city.name }))
              : []
          }
          register={register}
        />
      </div>

      <NavButtons />
    </form>
  );
}
