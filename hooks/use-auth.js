import React, { useState, useEffect, createContext, useContext } from "react";
import { auth } from "../utils/firebase/firebase";



const authContext = createContext();

export const ProvideAuth = ({ children }) => {
  const auth = useProvideAuth();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
};

export const useAuth = () => {
  return useContext(authContext);
};

const useProvideAuth = () => {
  const [user, setUser] = useState(null);

  const signup = (email, password) => {
    return auth.createUserWithEmailAndPassword(email, password).then((res) => {
      setUser(res.user);
      return res.user;
    });
  };

  const signin = async (email, password) => {
		// const res = auth.signInWithEmailAndPassword(email, password);
		// if (res.user) {
		// 	setUser(res.user);
		// 	return res.user;
		// }
		
    // return auth.signInWithEmailAndPassword(email, password).then((res) => {
		// 	if (res.user) {
		// 		setUser(res.user);
		// 		return res.user;
		// 	}
    // });
		try {
			const res = await auth.signInWithEmailAndPassword(email, password);
			if (res.user) {
				setUser(res.user);
				return res.user;
			}
		} catch (err) {
			throw err;
		}
  };

  const signout = () => {
    auth.signOut().then(() => {
      setUser(false);
    });
  };

  const sendPasswordResetEmail = (email) => {
    return auth.sendPasswordResetEmail(email).then(() => {
      return true;
    });
  };

  const confirmPasswordReset = (code, password) => {
    return auth.confirmPasswordReset(code, password).then(() => {
      return true;
    });
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(false);
      }
    });

    return () => unsubscribe();
  }, []);

  return {
    user,
    signin,
    signout,
    signup,
		sendPasswordResetEmail,
		confirmPasswordReset,
  };
};
