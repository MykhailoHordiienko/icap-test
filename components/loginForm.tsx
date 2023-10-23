'use client';
import React from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm, SubmitHandler } from 'react-hook-form';
import { logInSchema } from '@/schemas/authSchema';

type Props = {};

const LoginForm = (props: Props) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm<TypeLogin>({
    resolver: yupResolver(logInSchema),
    mode: 'all',
  });
  console.log(errors);

  const onSubmit: SubmitHandler<TypeLogin> = data => {
    console.log(data);
    reset();
  };
  return (
    <form
      className="flex flex-col gap-4 sm:mx-auto sm:w-full sm:max-w-sm"
      onSubmit={handleSubmit(onSubmit)}>
      <label
        htmlFor="userName"
        className="block text-lg font-medium leading-6 opacity-80 text-slate-800">
        User Name
      </label>

      <div className="relative">
        <input
          {...register('userName')}
          id="userName"
          placeholder="Enter your name"
          className={`block w-full rounded-md border p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 ${
            errors.userName ? 'border-rose-400' : null
          }`}
        />
        {errors.userName && (
          <p className="absolute -left-48 top-1 p-1 text-red-100 animate-pulse border border-dotted rounded-lg border-rose-400">
            {errors.userName.message}
          </p>
        )}
      </div>

      <label
        htmlFor="password"
        className="block text-lg font-medium leading-6 opacity-80 text-slate-800">
        Password
      </label>

      <div className="relative">
        <input
          {...register('password')}
          id="password"
          type="password"
          placeholder="Enter your password"
          className={`block w-full rounded-md border p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 ${
            errors.password ? 'border-rose-400' : null
          }`}
        />
        {errors.password && (
          <p className="absolute -left-48 top-1 p-1 text-red-100 animate-pulse border border-dotted rounded-lg border-rose-400">
            {errors.password.message}
          </p>
        )}
      </div>

      <button
        type="submit"
        disabled={!isValid}
        className="flex w-full justify-center rounded-md bg-indigo-900 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:bg-slate-400 disabled:opacity-40">
        {isValid ? 'Sign in' : 'Please fill form'}
      </button>
    </form>
  );
};

export default LoginForm;
