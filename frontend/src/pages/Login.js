import React, { useContext, useState } from "react";
import { FaEye } from "react-icons/fa";
import loginIcons from "../assest/LoginIcons.png";

import { FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import SummaryApi from "../common";
import { toast } from "react-toastify";
import Context from "../context";
import LoginImage from "../assest/LoginSignUp/SignUp.png";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const { fetchUserDetails, fetchUserAddToCart } = useContext(Context);

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setData((preve) => {
      return {
        ...preve,
        [name]: value,
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const dataResponse = await fetch(SummaryApi.signIn.url, {
      method: SummaryApi.signIn.method,
      credentials: "include",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const dataApi = await dataResponse.json();
    console.log("dataApi", dataApi);

    if (dataApi.success) {
      toast.success(dataApi.message);
      navigate("/");
      fetchUserDetails();
      fetchUserAddToCart();
    }

    if (dataApi.error) {
      toast.error(dataApi.message);
    }
  };

  console.log("data login", data);

  return (
    <section id="login">
      <div className="md:flex-row flex-col flex w-full h-full p-2">
        <div className="hidden md:w-half h-full   border-r-4">
          <img src={LoginImage} width={650} height={400} alt="" />
        </div>

        <div className="bg-slate-100  rounded-lg shadow-xl p-5 w-full h-full max-w-md m-auto">
          <div className="w-full h-full  p-4  ">
            <h1 className="text-4xl text-center font-serif font-bold uppercase tracking-tight text-emerald-400 ">
              Sign In
            </h1>
          </div>
          <div className="w-20 h-20 mx-auto">
            <img className="rounded-full" src={loginIcons} alt="login icons" />
          </div>

          <form className="pt-6 flex text-lg flex-col gap-2" onSubmit={handleSubmit}>
            <div className="grid">
              <label>Email : </label>
              <div className="bg-slate-100 p-2">
                <input
                  type="email"
                  placeholder="Enter email"
                  name="email"
                  value={data.email}
                  onChange={handleOnChange}
                  className="w-full h-full  p-2 rounded-md hover:rounded-lg hover:outline-emerald-500 outline-none bg-transparent"
                />
              </div>
            </div>

            <div>
              <label>Password : </label>
              <div className="bg-slate-100 p-2 flex">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter password"
                  value={data.password}
                  name="password"
                  onChange={handleOnChange}
                  className="w-full h-full  p-2 rounded-md hover:rounded-lg hover:outline-emerald-500 outline-none bg-transparent"
                />
                <div
                  className="ml-2 cursor-pointer text-xl"
                  onClick={() => setShowPassword((preve) => !preve)}
                >
                  <span>{showPassword ? <FaEyeSlash /> : <FaEye />}</span>
                </div>
              </div>
              <Link
                to={"/forgot-password"}
                className="block w-fit ml-auto hover:underline hover:text-red-600"
              >
                Forgot password ?
              </Link>
            </div>

            <button className="bg-emerald-300 hover:bg-emerald-400 text-white px-6 py-2 w-full max-w-[150px] rounded-full hover:scale-110 transition-all mx-auto block mt-6">
              SignIn
            </button>
          </form>

          <p className="my-5">
            Don't have account ?{" "}
            <Link
              to={"/sign-up"}
              className=" text-sky-600 hover:text-sky-800 hover:underline"
            >
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Login;
