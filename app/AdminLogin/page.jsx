"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminLogin() {
  const router = useRouter();
  const [loginID, setLoginID] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    const adminUsername = loginID;
    const adminPassword = password;

    e.preventDefault();

    const url = `http://localhost:8080/api/v1/admin/admin-login?userName=${encodeURIComponent(
      adminUsername
    )}&password=${encodeURIComponent(adminPassword)}`;
    try {
      const request = await fetch(url, {
        method: "POST",
        credentials:"include"
      });

      if (request.ok) {
        const result = await request.json();
        if (result == true) {
            router.push("/AdminDashBoard")
        } else {
          setError("Error: Please provide valid admin credentials.");
        }
      } else {
        alert("Error in login. Please contact admin.");
      }
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div>
      <div className=" flex flex-col items-center justify-center bg-purple-950 min-h-screen">
        <img
          src="/logo.JPG"
          alt="img"
          className="ml-[-1150px] mt-[-100px] rounded-2xl w-[200px] opacity-80"
        />

        <div className="text-white text-4xl mb-[15px] mt-[-50]">
          Mega City Cab - Admin Login
        </div>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col items-center justify-center border border-white h-[300px] w-[600px] rounded-2xl">
            <div className="text-white text-xl mb-10">
              Please provide Admin credentials here
            </div>
            <div>
              <label className="text-white ml-3">Login ID: </label>
              <input
                type="text"
                value={loginID}
                onChange={(e) => setLoginID(e.target.value)}
                className="rounded-md h-7 w-[300px] px-2"
                placeholder="Please enter Login ID"
              />
            </div>
            <br />
            <div>
              <label className="text-white">Password: </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="rounded-md h-7 w-[300px] px-2"
                placeholder="Please enter Password"
              />
            </div>

            <div>
              <button
                type="submit"
                className="text-white border h-[30px] w-[220px] mt-3 rounded-md hover:bg-slate-400 hover:text-black">
                Login
              </button>
            </div>

            <div>
              <label className="text-red-500 hover:text-white">{error}</label>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
