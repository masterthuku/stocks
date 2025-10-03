"use client";

import FooterLink from "@/components/forms/FooterLink";
import InpuField from "@/components/forms/InpuField";
import { Button } from "@/components/ui/button";
import { signInWithEmail } from "@/lib/actions/auth.actions";
import { useRouter } from "next/navigation";
import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

type SignInFormData = {
  email: string;
  password: string;
};

const SignIn = () => {
  const router = useRouter();
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
      const result = await signInWithEmail(data);
      if(result.success) router.push("/");
      toast.success(result.message);
    } catch (error) {
      console.log(error);
      toast.error("Sign In failed. Please try again.", {description: error instanceof Error ? error.message : "Failed to sign in"});
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