import React, { useRef, useState } from "react";
import Header from "./Header";
import { validateData } from "../utils/validate";
import { auth } from "../utils/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Login = () => {
  //states
  const [loginTitle, setloginTitle] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  //refs
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  // Handle signin and signup lables
  const toggletoSignUpForm = () => {
    setloginTitle(!loginTitle);
  };

  //Handle Submit button click
  const handleSubmitButtonClick = () => {
    //validate form data
    const res = validateData(email.current.value, password.current.value);
    setErrorMessage(res);
    if (res) return; //return early if there was an error, else proceed to creating an user.

    if (!loginTitle) {
      //sign up Logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;

          updateProfile(user, {
            displayName: name.current.value,
          })
            .then(() => {
              const { uid, email, displayName } = auth.currentUser;

              dispatch(
                addUser({ uid: uid, email: email, displayName: displayName })
              );
              navigate("/browse");
            })
            .catch((error) => {
              setErrorMessage(error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    } else {
      //sign in
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);
          navigate("/browse");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }
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
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className="absolute p-12 w-3/12 bg-black m-36 mx-auto right-0 left-0 rounded-md bg-opacity-80"
      >
        <h1 className="font-bold text-3xl py-4 text-white">
          {loginTitle ? "Sign In" : "Sign up"}
        </h1>
        {!loginTitle && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="p-4 my-4 w-full"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className="p-4 my-4 w-full"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-4 my-4 w-full"
        />
        <p className="text-red-500 text-lg">{errorMessage}</p>
        <button
          className="p-4 my-4 bg-red-700 w-full text-white"
          onClick={handleSubmitButtonClick}
        >
          {loginTitle ? "Sign In" : "Sign up"}
        </button>
        <p
          className="text-white text-l cursor-pointer underline"
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
