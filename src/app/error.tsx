'use client'

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
      <button
        onClick={() => reset()}
      >
        تلاش دوباره
      </button>
    </div>
  )
}