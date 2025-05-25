import { auth } from "@/auth";
import { update } from "@/auth";
import api from "../services/interceptors/server";

export async function updateAccessToken(refreshToken: string) {
  const session = await auth()
  // if(!session) return null

  // const { refreshToken } = session
  const { data } = await api.post('/auth/refresh', { token: refreshToken })
  console.log(data.accessToken)

  await update({  ...session, user: { ...session?.user, role: 'Kharrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr'} })
  // console.log('newSession', newSession)
}