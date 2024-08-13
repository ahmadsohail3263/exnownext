"use client";
import { createContext, useCallback, useEffect, useState } from "react";
import {
  create,
  update,
  remove,
  fetch,
  handleSuccess,
  handleError,
} from "../../util/index";
import { APIs } from "../../util/APIs";
import { useAuth } from "../index";

import { useRouter } from "next/navigation";

export const UserContext = createContext();
// Base API
const Users_API = APIs.Users;

export function UserProvider({ children }) {
  const router = useRouter();

  const createUser = async (userForm) => {
    try {
      const API = Users_API;

      await create(API, userForm);
      handleSuccess("Created Successfully");
      router.push("/login");
    } catch (error) {
      handleError(error.message);
      console.log(error);
    }
  };

  return (
    <UserContext.Provider
      value={{
        createUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
