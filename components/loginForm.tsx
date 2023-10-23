'use client';
import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

type Props = {};

const LoginForm = (props: Props) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<TypeLogin>();
  return (
    <form className="flex flex-col gap-4 sm:mx-auto sm:w-full sm:max-w-sm">
      <label
        htmlFor="userName"
        className="block text-sm font-medium leading-6 text-gray-900">
        User Name
      </label>

      <input
        id="userName"
        name="userName"
        type="userName"
        placeholder="Enter your name"
        required
        className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
      />

      <label
        htmlFor="password"
        className="block text-sm font-medium leading-6 text-gray-900">
        Password
      </label>

      <input
        id="password"
        name="password"
        type="password"
        placeholder="Enter your password"
        required
        className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
      />

      <button
        type="submit"
        className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
        Sign in
      </button>
    </form>
  );
};

export default LoginForm;
