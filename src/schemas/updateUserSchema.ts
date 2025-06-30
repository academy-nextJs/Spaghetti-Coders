import { z } from 'zod';

export const userInfoSchema = z.object({
  fullName: z.string().min(3, 'نام کاربری حداقل باید ۳ حرف باشد'),
  firstName: z.string().min(2, 'نام حداقل باید ۲ حرف باشد'),
  lastName: z.string().min(2, 'نام خانوادگی حداقل باید ۲ حرف باشد'),
  email: z.string().email('ایمیل نامعتبر است'),
  phoneNumber: z
    .string()
    .regex(/^09\d{9}$/, 'شماره موبایل باید با ۰۹ شروع شود و ۱۱ رقم باشد'),
    password: z
    .string()
    .min(6, 'رمزعبور باید حداقل ۶ کاراکتر باشد')
    .regex(/[a-z]/, 'رمزعبور باید شامل حروف کوچک باشد')
    .regex(/[A-Z]/, 'رمزعبور باید شامل حروف بزرگ باشد')
    .regex(/[0-9]/, 'رمزعبور باید شامل عدد باشد')
    .optional()
    .or(z.literal('')),
});

export type UserInfoSchema = z.infer<typeof userInfoSchema>;
