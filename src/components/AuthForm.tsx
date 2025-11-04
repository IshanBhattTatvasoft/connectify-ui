// components/AuthForm.tsx
"use client";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { motion } from "framer-motion";
import GoogleButton from "./GoogleButton";
import SocialDivider from "./SocialDivider";

type FormData = {
  email: string;
  password: string;
  name?: string;
  confirmPassword?: string;
};

type AuthFormProps = {
  type: "login" | "signup";
  onSubmit: (data: FormData) => void;
  schema: yup.ObjectSchema<any>;
};

export default function AuthForm({ type, onSubmit, schema }: AuthFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="w-full max-w-md mx-auto p-8 bg-white rounded-2xl shadow-xl"
    >
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900">
          {type === "login" ? "Welcome to Connectify!" : "Create Account"}
        </h1>
        <p className="text-gray-600 mt-2">
          {type === "login"
            ? "Log in to continue"
            : "Sign up to get started with Connectify"}
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        {type === "signup" && (
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Full Name
            </label>
            <input
              {...register("name")}
              type="text"
              className={`
      w-full px-4 py-3 border rounded-lg
      bg-white dark:bg-slate-800
      border-gray-300 dark:border-gray-600
      text-foreground placeholder-gray-500
      focus:ring-2 focus:ring-primary focus:border-transparent
      transition
    `}
              placeholder="John Doe"
            />
            {errors.name && (
              <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
            )}
          </div>
        )}

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Email Address
          </label>
          <input
            {...register("email")}
            type="email"
            className={`
      w-full px-4 py-3 border rounded-lg
      bg-white dark:bg-slate-800
      border-gray-300 dark:border-gray-600
      text-foreground placeholder-gray-500
      focus:ring-2 focus:ring-primary focus:border-transparent
      transition
    `}
            placeholder="you@example.com"
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Password
          </label>
          <input
            {...register("password")}
            type="password"
            className={`
      w-full px-4 py-3 border rounded-lg
      bg-white dark:bg-slate-800
      border-gray-300 dark:border-gray-600
      text-foreground placeholder-gray-500
      focus:ring-2 focus:ring-primary focus:border-transparent
      transition
    `}
            placeholder="••••••••"
          />
          {errors.password && (
            <p className="mt-1 text-sm text-red-600">
              {errors.password.message}
            </p>
          )}
        </div>

        {type === "signup" && (
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Confirm Password
            </label>
            <input
              {...register("confirmPassword")}
              type="password"
              className={`
      w-full px-4 py-3 border rounded-lg
      bg-white dark:bg-slate-800
      border-gray-300 dark:border-gray-600
      text-foreground placeholder-gray-500
      focus:ring-2 focus:ring-primary focus:border-transparent
      transition
    `}
              placeholder="••••••••"
            />
            {errors.confirmPassword && (
              <p className="mt-1 text-sm text-red-600">
                {errors.confirmPassword.message}
              </p>
            )}
          </div>
        )}

        <button
          type="submit"
          disabled={isSubmitting}
          className={`
      w-full py-3 px-4 bg-primary hover:bg-primary-dark
      text-white font-semibold rounded-lg
      transition transform hover:scale-[1.02]
      disabled:opacity-70 disabled:cursor-not-allowed
    `}
        >
          {isSubmitting
            ? "Loading..."
            : type === "login"
              ? "Sign In"
              : "Create Account"}
        </button>
      </form>

      <SocialDivider />

      <GoogleButton
        label={type === "login" ? "Sign in with Google" : "Sign up with Google"}
      />

      <p className="text-center mt-6 text-sm text-gray-600">
        {type === "login" ? (
          <>
            Don't have an account?{" "}
            <a
              href="/signup"
              className="text-primary font-medium hover:underline"
            >
              Sign up
            </a>
          </>
        ) : (
          <>
            Already have an account?{" "}
            <a
              href="/login"
              className="text-primary font-medium hover:underline"
            >
              Sign in
            </a>
          </>
        )}
      </p>
    </motion.div>
  );
}
