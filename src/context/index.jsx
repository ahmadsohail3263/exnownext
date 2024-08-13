import { useContext } from "react";
import { AuthContext } from "./Providers/AuthProvider";
import { UserContext } from "./providers/userProvider";

// Export all the Contexts

export function useAuth() {
  return useContext(AuthContext);
}

export function useUser() {
  return useContext(UserContext);
}
