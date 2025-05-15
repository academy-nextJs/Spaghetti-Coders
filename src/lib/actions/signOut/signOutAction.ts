'use server'

import { signOut } from "@/auth";

export async function signOutAct() {
  await signOut();
}