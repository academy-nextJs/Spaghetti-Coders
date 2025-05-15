'use server'

import { signOut } from "@/auth";

export async function singOutAct() {
  await signOut();
}