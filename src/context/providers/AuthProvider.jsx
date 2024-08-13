"use client";
import { jwtDecode } from "jwt-decode";
import { createContext, useState, useEffect, useCallback } from "react";
import { create, handleError } from "../../util/index";
import { APIs } from "@/src/util/APIs";
import { useRouter } from "next/navigation";

export const AuthContext = createContext();

const LOGIN_API = APIs.Login;
export function AuthProvider({ children }) {
  const router = useRouter();
  // States
  const isBrowser = typeof window !== "undefined";

  const [token, setToken] = useState(
    isBrowser ? sessionStorage.getItem("token") : null
  );
  const [userDetail, setUserDetail] = useState({});

  /*---------------------Functions Related to Auth---------------------------*/

  const Login = async (userForm) => {
    create(LOGIN_API, null, userForm)
      .then((res) => {
        setTokenAndDecodeUser(res.access_token);
      })
      .catch((err) => {
        handleError(err.message);
      });
  };

  const setTokenAndDecodeUser = useCallback((newToken) => {
    setToken(newToken);
    DecodeToken(newToken);
    sessionStorage.setItem("token", newToken);
  }, []);

  const DecodeToken = (token) => {
    const decode = jwtDecode(token);
    const ID = decode["sub"];
    const role = decode["role"];
    setUserDetail({ ID, role });
  };

  const clearToken = () => {
    setToken(null);
    setUserDetail(null);
    sessionStorage.removeItem("token");
  };

  // If user refresh the page then get his token and set the token and user state
  useEffect(() => {
    const storedToken = sessionStorage.getItem("token");
    try {
      if (storedToken) {
        setTokenAndDecodeUser(storedToken);
      } else {
        clearToken();
      }
    } catch (err) {
      clearToken();
    }
  }, [token, setTokenAndDecodeUser]);

  // Inside your AuthProvider component
  useEffect(() => {
    if (userDetail) {
      if (userDetail.role === "admin") {
        router.push("");
      } else {
        router.push("/");
      }
    }
  }, [userDetail]); // Listen for changes in userDetail

  return (
    <AuthContext.Provider value={{ token, clearToken, userDetail, Login }}>
      {children}
    </AuthContext.Provider>
  );
}
