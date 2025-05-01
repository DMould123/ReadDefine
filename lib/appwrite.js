import { Client, Account, Avatars } from "react-native-appwrite";

export const client = new Client();

// Initialize Appwrite client with project ID and endpoint
client.setProject("6800da79002c7a09a059").setPlatform("dev.dm.read-define");

export const account = new Account(client);
export const avatars = new Avatars(client);
