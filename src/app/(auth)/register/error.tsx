'use client'

import Link from "next/link"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <div>
      <h2>مشکلی پیش آمده!</h2>
      <p className="text-xl text-red-400">{error.message}</p>
      <div className="flex justify-between">
        <button onClick={() => reset()}>
          تلاش مجدد
        </button>

        <Link href='/register'>بازگشت به صفحه اول</Link>
      </div>
    </div>
  )
}