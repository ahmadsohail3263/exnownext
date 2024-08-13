import { AuthProvider } from "./AuthProvider";
import { UserProvider } from "./UserProvider";

export default function AppProviders({ children }) {
  return <UserProvider>{children}</UserProvider>;
}
