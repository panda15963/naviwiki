import React, { useState } from "react";
import { FaLockOpen } from "react-icons/fa";
import { supabase } from "../lib/supabase";
import classNames from "classnames";
import { useFormFields, MessageProps, useMessage } from "../lib/utils";
import Link from "next/link";
type SignInFieldProps = {
  full_name: string;
  email: string;
  password: string;
};

type SupabaseSigninPayload = SignInFieldProps; // type alias

const FORM_VALUES: SignInFieldProps = {
  full_name: "",
  email: "",
  password: "",
};

const MESSAGE_VALUES: MessageProps = {
  type: "default",
  payload: "",
};

const Login: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [values, handleChange, resetFormFields] = useFormFields<SignInFieldProps>(FORM_VALUES);
  const [message, handleMessage] = useMessage<MessageProps>(MESSAGE_VALUES);
  
  // sign-in a user with provided details
  const signIn = async (payload: SupabaseSigninPayload) => {
    try {
      setLoading(true);
      const { data:profiles, error } = await supabase.from("profiles").select("*").match({ email: payload.email, password: payload.password });
      if (error) {
        console.log(error);
        handleMessage({ payload: error.message, type: "error" });
      } else {
        handleMessage({
          payload: "Hi, " + profiles.map((profile) => profile.full_name) + "!! you log in successfully!",  
          type: "success",
        });
      }
    } catch (error) {
      console.log(error);
      handleMessage({
        payload: (error as Error).message,
        type: "error",
      });
    } finally {
      setLoading(false);
    }
  };

  // Form submit handler to call the above function
  const handleSumbit = async (event: React.FormEvent) => {
    event.preventDefault();
    await signIn(values);
    resetFormFields();
    setTimeout(() => {
      window.location.href = "/components/home";
    }, 1000);    
  };
  return (
    <div className="container px-5 py-10 mx-auto w-2/3">
      <div className="w-full text-center mb-4 flex  flex-col place-items-center">
        <FaLockOpen className="w-6 h-6" />
        <h1 className="text-2xl md:text-4xl text-gray-700 font-semibold">
          Log In
        </h1>
      </div>
      {message.payload && (
        <div
          className={classNames(
            "shadow-md rounded px-3 py-2 text-shadow transition-all mt-2 text-center",
            message.type === "error"
              ? "bg-red-500 text-white"
              : message.type === "success"
              ? "bg-green-300 text-gray-800"
              : "bg-gray-100 text-gray-800"
          )}
        >
          {message?.payload}
        </div>
      )}
      <form
        onSubmit={handleSumbit}
        className="bg-yellow-50 shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            className="bg-yellow-50 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            name="email"
            type="email"
            placeholder="Your Email"
            required
            value={values.email}
            onChange={handleChange}
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            className="bg-yellow-50 shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            name="password"
            type="password"
            placeholder="Your password"
            required
            value={values.password}
            onChange={handleChange}
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Log In
          </button>
          <Link
            href={"/components/signup"}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Not a member yet?
          </Link>
        </div>
      </form>
      {loading && (
        <div className="shadow-md rounded px-3 py-2 text-shadow transition-all mt-2 text-center">
          Loading...
        </div>
      )}
    </div>
  );
};
export default Login;
