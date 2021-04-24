import React from 'react';
import Helmet from 'react-helmet';
import { Inertia } from '@inertiajs/inertia';
import { useForm } from '@inertiajs/inertia-react';
import Logo from '@/Shared/Logo';
import LoadingButton from '@/Shared/LoadingButton';
import TextInput from '@/Shared/TextInput';

export default () => {
  const { data, setData, errors, post, processing } = useForm({
    email: 'johndoe@example.com',
    password: 'secret',
    remember: true
  });
  postgres://anekqycdsddrjc:43224b1f101d93a7b3186b50fc8a0f41c3b0c25ea1a4b3a0aafbd69eae138592@ec2-108-128-104-50.eu-west-1.compute.amazonaws.com:5432/daq7kdrfakis69

  function handleSubmit(e) {
    e.preventDefault();
    post(route('login.attempt'));
  }

  return (
    <div className="flex items-center justify-center min-h-screen p-6 bg-indigo-900">
      <Helmet title="Login" />
      <div className="w-full max-w-md">
        <Logo
          className="block w-full max-w-xs mx-auto text-white fill-current"
          height={50}
        />
        <form
          onChange={()=>{
            setData(e.target.name, e.target.value ?? e.target.value)
          }}
          onSubmit={handleSubmit}
          className="mt-8 overflow-hidden bg-white rounded-lg shadow-xl"
        >
          <div className="px-10 py-12">
            <h1 className="text-3xl font-bold text-center">Welcome Back!</h1>
            <div className="w-24 mx-auto mt-6 border-b-2" />
            <TextInput
              className="mt-10"
              label="Email"
              name="email"
              type="email"
              errors={errors.email}
              defaultValue={data.email}
            />
            <TextInput
              className="mt-6"
              label="Password"
              name="password"
              type="password"
              errors={errors.password}
              defaultValue={data.password}
            />
            <label
              className="flex items-center mt-6 select-none"
              htmlFor="remember"
            >
              <input
                name="remember"
                id="remember"
                className="mr-1"
                type="checkbox"
                defaultChecked={data.remember}
              />
              <span className="text-sm">Remember Me</span>
            </label>
          </div>
          <div className="flex items-center justify-between px-10 py-4 bg-gray-100 border-t border-gray-200">
            <a className="hover:underline" tabIndex="-1" href="#reset-password">
              Forgot password?
            </a>
            <LoadingButton
              type="submit"
              loading={processing}
              className="btn-indigo"
            >
              Login
            </LoadingButton>
          </div>
        </form>
      </div>
    </div>
  );
};
