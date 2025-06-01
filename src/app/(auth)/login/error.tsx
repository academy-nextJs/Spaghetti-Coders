'use client'

import { ClientButton } from "@/src/components/common/Buttons/common-btn"
import { TransitionLink } from "@/src/components/common/Links/TransitionLink"

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

        <ClientButton>
          <TransitionLink href='/' className="size-full flex items-center">
              بازگشت به خانه
          </TransitionLink>
        </ClientButton>
      </div>
    </div>
  )
}