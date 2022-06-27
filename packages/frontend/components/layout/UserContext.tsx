import { createContext } from "react";

type userProfile = any;

type UserContextType = {
  currentUser?: userProfile;
};

export const UserContext = createContext<UserContextType>({
  currentUser: undefined,
});
