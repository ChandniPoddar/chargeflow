"use client";

import { createContext, useContext, useState } from "react";

type User = {
  firstName: string;
  lastName: string;
  email: string;
};

type UserContextType = {
  user: User;
  updateUser: (data: Partial<User>) => void;
};

const UserContext = createContext<UserContextType | null>(null);

export function UserProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User>({
    firstName: "Vikram",
    lastName: "Singh",
    email: "rajesh.kumar@example.com",
  });

  const updateUser = (data: Partial<User>) => {
    setUser((prev) => ({ ...prev, ...data }));
  };

  return (
    <UserContext.Provider value={{ user, updateUser }}>
      {children}
    </UserContext.Provider>
  );
}

export const useUser = () => {
  const ctx = useContext(UserContext);
  if (!ctx) throw new Error("useUser must be used inside UserProvider");
  return ctx;
};
