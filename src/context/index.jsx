"use client"
import { useContext } from "react";
import { AuthContext } from "./providers/AuthProvider";
import { UserContext } from "./providers/UserProvider";

// Export all the Contexts

export function useAuth() {
  return useContext(AuthContext);
}

export function useUser() {
  return useContext(UserContext);
}
