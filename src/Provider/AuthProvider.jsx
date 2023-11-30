import { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import { CircularProgress, Grid } from "@mui/material";
import axiosPublic from "../utils/AxiosPublic";

export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log("current user", currentUser);
      setUser(currentUser);
      if(currentUser){
        // get token and set client side
        const userInfo = {email: currentUser.email}
        axiosPublic.post('/jwt', userInfo)
          .then(res => {
            localStorage.setItem("access-token", res.data.token)
          })
      }else{
        // remove token
        localStorage.removeItem("access-token")
      }
      setLoading(false);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const createUser = (email, password) => {
    // setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const updateUserProfile = (name, image) => {
    // setLoading(true)
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: image
    });
  };

  const login = (email, password) => {
    // setLoading(true)
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logout = () => {
    // setLoading(true)
    return signOut(auth);
  };

  const authInfo = {
    user,
    loading,
    createUser,
    updateUserProfile,
    login,
    logout
  };

  return (
    <AuthContext.Provider value={authInfo}>
      {loading ? (
        <Grid sx={{display: "grid", placeItems: "center", minHeight: "100vh"}}>
          <CircularProgress />
        </Grid>
      ) : (
        children
      )}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
