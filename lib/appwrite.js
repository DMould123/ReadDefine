import { Client, Account, Avatars } from "react-native-appwrite";

const client = new Client()
  .setProject("6800da79002c7a09a059")
  .setPlatform("dev.dm.read-define");

export const account = new Account(client);
export const avatars = new Avatars(client);
