import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect } from "react";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO } from "../utils/constant";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();

  //each time the component is rendered, it is checking the auth of the user. this will be called everytime there is a change in auth state.
  //i.e. after signin, signou, signout. So all navigate is done here.
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      //if user signins
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName })); //update the store
        navigate("/browse");
      }
      //if user signouts
      else {
        dispatch(removeUser()); //update the store
        navigate("/");
      }
    });

    //Will be called when the component unmounts
    return () => unsubscribe();
  }, []);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  };

  return (
    <div className="w-screen absolute px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
      <img className="w-40" src={LOGO} alt="Logo" />
      {user && (
        <div className="flex p-2">
          {/* <img
          className="w-12 h-12"
          src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
          alt="usericon"
        /> */}
          <button className="font-bold text-red-200" onClick={handleSignOut}>
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
