import { create } from "zustand";
import { pocketbase } from "../configs/pocketbase";
export const useAuthStore = create((set) => ({
  register: async ({ name, email, password, confirmPassword }) => {
    try {
      const record = await pocketbase.collection("users").create({
        email,
        password,
        passwordConfirm: confirmPassword,
        name,
      });
      console.log(record);
      await pocketbase.collection("users").authWithPassword(email, password);
      await pocketbase.collection("users").requestVerificationEmail(email);
    } catch (error) {
      throw new Error("There was an error registering your account");
    }
  },
  login: async ({ email, password }) => {
    try {
      const authData = await pocketbase
        .collection("users")
        .authWithPassword(email, password);
      console.log(authData);
    } catch (error) {
      console.log(error);
      throw new Error("Incorrect Email or password");
    }
  },
}));
