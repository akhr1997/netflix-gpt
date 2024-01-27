import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [loginTitle, setloginTitle] = useState(true);

  const toggletoSignUpForm = () => {
    setloginTitle(!loginTitle);
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://i.redd.it/how-can-someone-make-this-background-with-html-and-css-i-v0-zjgs096khv591.jpg?s=44a32b2f6835cde7290c4610dc01d5fa0c082ad9"
          alt="Background image"
        />
      </div>
      <form className="absolute p-12 w-3/12 bg-black m-36 mx-auto right-0 left-0 rounded-md bg-opacity-80">
        <h1 className="font-bold text-3xl py-4 text-white">
          {loginTitle ? "Sign In" : "Sign up"}
        </h1>
        {!loginTitle && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-4 my-4 w-full"
          />
        )}
        <input
          type="text"
          placeholder="Email Address"
          className="p-4 my-4 w-full"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-4 my-4 w-full"
        />
        <button className="p-4 my-4 bg-red-700 w-full text-white">
          {loginTitle ? "Sign In" : "Sign up"}
        </button>
        <p
          className="text-white text-l cursor-pointer"
          onClick={toggletoSignUpForm}
        >
          {loginTitle
            ? "New to Netflix? Sign up here!"
            : "Already an user, Sign In here"}
        </p>
      </form>
    </div>
  );
};

export default Login;
