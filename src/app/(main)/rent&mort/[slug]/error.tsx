'use client' // Error boundaries must be Client Components
 
import { ClientButton } from '@/src/components/common/Buttons/common-btn'
import { useEffect } from 'react'
 
export default function DetailError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])
 
  return (
    <div className='flex flex-col justify-center items-center gap-4'>
      <h2 className='text-danger'>مشکلی پیش آمد</h2>
      <ClientButton
      className='w-fit'
        onPress={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        تلاش مجدد
      </ClientButton>
    </div>
  )
}