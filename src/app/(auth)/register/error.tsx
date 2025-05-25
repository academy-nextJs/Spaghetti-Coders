'use client'

import { ClientButton } from "@/src/components/common/Buttons/common-btn"
import Link from "next/link"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <div className="flex flex-col gap-2">
      <h2>مشکلی پیش آمده!</h2>
      <p className="text-xl text-red-400">{error.message}</p>
      <div className="flex justify-between min-w-72">
        <ClientButton className="cursor-pointer" onPress={() => reset()}>
          تلاش مجدد
        </ClientButton>

        <Link href='/register'>
          <ClientButton>
            بازگشت به صفحه اول
          </ClientButton>
        </Link>
      </div>
    </div>
  )
}