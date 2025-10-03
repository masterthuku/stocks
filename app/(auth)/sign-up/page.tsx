"use client";

import { CountrySelectField } from "@/components/forms/CountrySelectField";
import FooterLink from "@/components/forms/FooterLink";
import InpuField from "@/components/forms/InpuField";
import SelectField from "@/components/forms/SelectField";
import { Button } from "@/components/ui/button";
import { signUpWithEmail } from "@/lib/actions/auth.actions";
import {
  INVESTMENT_GOALS,
  PREFERRED_INDUSTRIES,
  RISK_TOLERANCE_OPTIONS,
} from "@/lib/constants";
import { useRouter } from "next/navigation";
import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

const SignUp = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
  } = useForm<SignUpFormData>({
    defaultValues: {
      fullName: "",
      email: "",
      password: "",
      country: "KE",
      investmentGoals: "Growth",
      riskTolerance: "Medium",
      preferredIndustry: "Technology",
    },
    mode: "onBlur",
  });
  const onSubmit = async (data: SignUpFormData) => {
    try {
      const result = await signUpWithEmail(data);
      if (result.success) router.push("/");
      toast.success(result.message);
    } catch (error) {
      console.log(error);
      toast.error("Sign Up failed. Please try again.", {
        description:
          error instanceof Error
            ? error.message
            : "Failed to create an account",
      });
    }
  };
  return (
    <>
      <h1 className="form-title">Sign Up and Personalize</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        {/* inputs */}
        <InpuField
          name="fullName"
          label="Full Name"
          placeholder="John Doe"
          register={register}
          error={errors.fullName}
          validation={{ required: "Full name is required", minLength: 3 }}
        />
        <InpuField
          name="email"
          label="Email"
          placeholder="r6Ktj@example.com"
          register={register}
          error={errors.email}
          validation={{
            required: "Valid Email is required",
            pattern: /\S+@\S+\.\S+/,
            message: "Valid Email is required",
          }}
        />
        <InpuField
          name="password"
          label="Password"
          placeholder="Enter a strong password"
          type="password"
          register={register}
          error={errors.password}
          validation={{ required: "Password is required", minLength: 8 }}
        />

        {/* country */}
        <CountrySelectField
          name="country"
          label="Country"
          control={control}
          error={errors.country}
          required
        />

        <SelectField
          name="investmentGoals"
          label="Investment Goals"
          placeholder="Select Investment Goals"
          control={control}
          error={errors.investmentGoals}
          required
          options={INVESTMENT_GOALS}
        />

        <SelectField
          name="riskTolerance"
          label="Risk Tolerance"
          placeholder="Select your risk level"
          control={control}
          error={errors.riskTolerance}
          required
          options={RISK_TOLERANCE_OPTIONS}
        />

        <SelectField
          name="preferredIndustry"
          label="Preferred Industry"
          placeholder="Select your preferred industry"
          control={control}
          error={errors.preferredIndustry}
          required
          options={PREFERRED_INDUSTRIES}
        />

        <Button
          type="submit"
          disabled={isSubmitting}
          className="yellow-btn w-full mt-5"
        >
          {isSubmitting
            ? "Creating Account...."
            : "Start your investment journey"}
        </Button>
        <FooterLink
          text="Already have an account?"
          linkText="Sign In"
          href="/sign-in"
        />
      </form>
    </>
  );
};

export default SignUp;
