"use client"
import { useState } from "react";
import Input from "@/src/components/Input";
import Button from "@/src/components/Button";
import Link from "next/link";
import { useAuth } from "@/src/context/index";


const LoginForm = () => {
  const { Login } = useAuth();
  const [form, setForm] = useState({
    username: "",
    password: "",
  });

  


  const handleChange = (e) => {
     
    const { name, value } = e.target;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
      console.log(form)
      await Login(form);
 
  };

  return (
    <div className="flex flex-grow justify-center items-center">
      <div className="w-full">
        <div className="max-w-[700px] md:mx-auto bg-white p-12 rounded-lg mx-3">
          <div className="pb-8">
            <h1 className="text-[30px] sm:text-[35px] font-semibold leading-[52.5px] tracking-tight text-black">Login</h1>
            <p className="mt-2">
              Enter your email below to login to your account
            </p>
          </div>
          <form onSubmit={handleSubmit}>
            <Input
              type="email"
              name="username"
              title="Email"
              onChange={handleChange}
            />
            <Input
              type="password"
              name="password"
              title="Password"
              onChange={handleChange}
            />
            <Button type="submit" label="Login " />
          </form>

          <p className="mt-2">Do not have an account? <Link href="/signup" className="text-[#2C7B63] font-bold underline">Sign up</Link></p>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
