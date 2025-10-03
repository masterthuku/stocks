"use client";

import FooterLink from "@/components/forms/FooterLink";
import InpuField from "@/components/forms/InpuField";
import { Button } from "@/components/ui/button";
import React from "react";
import { useForm } from "react-hook-form";

type SignInFormData = {
  email: string;
  password: string;
};

const SignIn = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignInFormData>({
    defaultValues: {
      email: "",
      password: "",
    },
    mode: "onBlur",
  });

  const onSubmit = async (data: SignInFormData) => {
    try {
      console.log(data);
      // Add sign-in logic here
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <h1 className="form-title">Sign In to Your Account</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
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
          placeholder="Enter your password"
          type="password"
          register={register}
          error={errors.password}
          validation={{ required: "Password is required", minLength: 8 }}
        />
        <Button
          type="submit"
          disabled={isSubmitting}
          className="yellow-btn w-full mt-5"
        >
          {isSubmitting ? "Signing In..." : "Sign In"}
        </Button>
        <FooterLink text="Don't have an account?" linkText="Sign Up" href="/sign-up" />
      </form>
    </>
  );
};

export default SignIn;