import { create } from "zustand";

export const registerStore = create((set) => ({
  userEmail: null,
  tempUserId: null,
  setUserEmail: (userEmail: string) => set(() => ({ userEmail: userEmail }))
}))