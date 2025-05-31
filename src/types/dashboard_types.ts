export interface UserProfile {
  createdAt: string;
  email: string;
  emailVerified: boolean;
  firstName: string;
  fullName: string;
  id: string;
  lastName: string;
  membershipDate: string | null;
  phoneNumber: string;
  profilePicture: string | null;
  role: string;
  updatedAt: string;
  verificationCode: string;
  verificationCodeExpires: string;
};