'use client'

// import { signOut } from "@/auth"
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
      <div className="flex justify-between min-w-72">
        <button className="cursor-pointer" onClick={() => reset()}>
          تلاش مجدد
        </button>
        {/* <button className="cursor-pointer" onClick={() => signOut()}>
          لااااگگ ااااووووتتت
        </button> */}
        <Link href='/'>بازگشت به خانه</Link>
      </div>
    </div>
  )
}