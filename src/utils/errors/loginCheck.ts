import { auth } from "@/auth"

export async function loginCheck() {
  const session = await auth()
  if (session?.user) throw new Error("شما لاگین هستید. لطفا ابتدا از حساب کاربری خود خارج شوید.")
}