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

export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log("current user", currentUser);
      setUser(currentUser);
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
