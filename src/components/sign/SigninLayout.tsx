import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Link } from "react-router-dom";

const SigninLayout = () => {
  return (
    <div aria-label="login" className="pt-36 min-h-screen bg-black text-white">
      <div className="w-[89vw] max-w-sm mx-auto">
        <h1 className="text-white text-2xl md:text-3xl font-bold">Sign In</h1>
        <SigninForm />
        <p className="mt-10 text-content text-sm md:text-base font-medium">
          New to Netflix?{" "}
          <Link to="/signup" className="text-white">
            Sign up now
          </Link>
          .
        </p>
      </div>
    </div>
  );
};

const schemaEmail = {
  value:
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
  message: "Please enter a valid email.",
};

type Inputs = {
  email: string;
  password: string;
};

const SigninForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({ mode: "all" });
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
  };

  return (
    <form
      aria-label="login-form"
      className="mt-8 grid gap-4"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="grid gap-1.5">
        <input
          type="text"
          {...register("email", {
            required: schemaEmail.message,
            pattern: { value: schemaEmail.value, message: schemaEmail.message },
          })}
          placeholder="Email"
          className="px-4 py-2.5 bg-[#454545] rounded-md border-none focus:ring-orange-400 text-sm md:text-base placeholder:text-gray-300/90"
        />
        {errors.email && (
          <span className="text-orange-400 text-xs md:text-sm">
            {errors.email.message}
          </span>
        )}
      </div>
      <div className="grid gap-1.5">
        <input
          type="password"
          {...register("password", { required: true })}
          minLength={4}
          maxLength={60}
          placeholder="Password"
          className="px-4 py-2.5 bg-[#454545] rounded-md border-none focus:ring-orange-400 text-sm md:text-base placeholder:text-gray-300/90"
        />
        {errors.email && (
          <span className="text-orange-400 text-xs md:text-sm">
            Your password must contain between 4 and 60 characters.
          </span>
        )}
      </div>
      <button className="mt-5 py-2.5 rounded-md bg-accent text-sm md:text-base font-semibold">
        Sign in
      </button>
    </form>
  );
};

export default SigninLayout;
