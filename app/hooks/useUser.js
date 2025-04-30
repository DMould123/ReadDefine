import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

export function useUser() {
  const context = useContext(UserContext);

  // Check if the user is logged in and return the user object or null
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }

  return context;
}
