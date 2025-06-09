'use server';

import { auth } from '@/auth';
import { update } from '@/auth';
import api from '../services/interceptors/server';

export async function updateAccessToken() {  //Currently, this action successfully updates the session, meaning if you log the session on the server side ( auth() ) or on the client side ( useSession() ) after executing this action, the log will* inclute the token which is fetched inside this action, *= BUT thats not true for the first console.log, meaning it always returned the old token on the first log and the updated token on the second log and beyond, which is still an issue that remains to be fixed TODO: MUST BE FIXED
  const session = await auth()
  if(!session) return undefined

  const { refreshToken } = session;
  const { data } = await api.post('/auth/refresh', { token: refreshToken });
  // console.log('New AccessToken', data.accessToken)
  const { accessToken } = data;

  const currentTimestamp = new Date().getTime();
  // console.log('currentTimestamp', currentTimestamp)
  const expires = new Date(currentTimestamp + 15 * 60 * 1000); //15 minutes from now
  // console.log('expires', expires)

  // console.log('Original Session', session)
  // const newSession =
  await update({ accessToken, expires });
  // console.log('newSession', newSession)
}
