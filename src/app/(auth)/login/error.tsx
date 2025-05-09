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
      <p>{error.message}</p>
      <div className="flex justify-between">
        <button className="cursor-pointer" onClick={() => reset()}>
          لااااگگ ااااووووتتت
        </button>
        <Link href='/'>بازگشت به خانه</Link>
      </div>
    </div>
  )
}