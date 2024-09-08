"use client";
import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Nabvar from '@/app/components/Navbar';
import Image from "next/image";
import img from '../../../public/Auth-img.jpg';

export default function SignUp() {
  const router = useRouter();
  const [user, setUser] = useState({ name: '', email: '', password: '' });
  const [nameErr, setNameErr] = useState(false);
  const [emailErr, setEmailErr] = useState(false);
  const [passErr, setPassErr] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Reset errors before validation
    setNameErr(false);
    setEmailErr(false);
    setPassErr(false);

    // Validate Name
    if (user.name.length < 2) {
      setNameErr(true);
      return;
    }

    // Validate Email
    if (user.email.length <= 5) {
      setEmailErr(true);
      return;
    }

    // Validate Password
    if (user.password.length <= 6) {
      setPassErr(true);
      return;
    }

    // If all validations pass, proceed
    router.push('/verify');
  };

  return (
    <>
      <Nabvar />
      <form onSubmit={handleSubmit} className="flex items-center justify-evenly mt-24 sm:p-1 p-3 sm:border sm:border-black sm:rounded-lg sm:m-12">
        <div className="sm:hidden">
          <Image alt="img" src={img} height={900} width={500} className="rounded-md" />
        </div>

        <div className="flex flex-col gap-3">
          <h1 className="text-3xl font-bold text-center">Sign Up</h1>

          <label className="font-serif text-xl" htmlFor="name">Name</label>
          <input
            className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black"
            type="text"
            value={user.name}
            onChange={(e) => setUser({ ...user, name: e.target.value })}
            placeholder="Full name"
          />
          {nameErr && (<p className="text-red-600">Name must be at least 2 characters</p>)}

          <label className="font-serif text-xl" htmlFor="email">Email</label>
          <input
            className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black"
            type="text"
            value={user.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
            placeholder="Email"
          />
          {emailErr && (<p className="text-red-600">Email should be correct</p>)}

          <label className="font-serif text-xl" htmlFor="password">Password</label>
          <input
            className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black"
            type="password"
            value={user.password}
            onChange={(e) => setUser({ ...user, password: e.target.value })}
            placeholder="Password"
          />
          {passErr && (<p className="text-red-600">Password must be more than 6 characters</p>)}

          <div className="p-5">
            <h2 className="text-2xl font-semibold mb-4">Are you a creator?</h2>
            <div className="flex justify-center space-x-4">
              <button
                type="button"
                onClick={() => handleOptionClick('yes')}
                className={`px-4 py-2 rounded-lg border ${selectedOption === 'yes' ? 'bg-blue-500 text-white' : 'bg-white text-gray-700 border-gray-300'}`}
              >
                Yes
              </button>

              <button
                type="button"
                onClick={() => handleOptionClick('no')}
                className={`px-4 py-2 rounded-lg border ${selectedOption === 'no' ? 'bg-blue-500 text-white' : 'bg-white text-gray-700 border-gray-300'}`}
              >
                No
              </button>
            </div>
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-transparent flex gap-2 w-28 text-center hover:bg-green-600 text-green-700 font-semibold hover:text-white p-2 pl-7 border border-black-500 hover:border-transparent rounded"
            >
              Sign Up
            </button>
          </div>

          <Link className="text-center" href="/Log-in">Already have an account? Log in</Link>
        </div>
      </form>
    </>
  );
}
