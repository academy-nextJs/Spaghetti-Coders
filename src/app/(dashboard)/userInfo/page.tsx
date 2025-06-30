import { auth } from '@/auth';
import ProfilePicForm from '@/src/components/dashboard/dashboardDetails/ProfilePicForm';
import UserInfoForm from '@/src/components/dashboard/dashboardDetails/UserInfoForm';
import api from '@/src/services/interceptors/server';
import { Divider } from '@heroui/react';
import React, { cache } from 'react';
const getUser = cache(async (userId: string | undefined) => {
  const res = await api.get(`/users/${userId}`);
  return res.data;
});
export default async function UserInfoPage() {
  const userId = (await auth())?.user.id;
  const user = await getUser(userId);
  return (
    <div className="p-6">
      <div className="flex">
        <div className="w-2/5">
          <p className="font-bold text-2xl">عکس نمایه شما</p>
          <p>میتوانید عکس نمایه خود را تغییر دهید</p>
        </div>
        <ProfilePicForm picture={user.user.profilePicture}/>
      </div>
      <Divider className="my-4" />
      <div className=" lg:flex">
        <div className="w-2/5">
          <p className="font-bold text-2xl">اطلاعات فردی</p>
          <p> میتوانید اطلاعات فردی خود را تغییر دهید</p>
        </div>
        <UserInfoForm user={user.user}/>
      </div>
    </div>
  );
}
