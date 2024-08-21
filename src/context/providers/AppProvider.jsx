"use client"
import { AuthProvider } from "./AuthProvider";
import { UserProvider } from "./UserProvider";

export default function AppProviders({ children }) {
  return (
    <>
      <AuthProvider>
        <UserProvider>
          {children}</UserProvider>
      </AuthProvider>
    </>
  );
}
