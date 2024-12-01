'use client'

import Image from 'next/image';
import { useRouter } from 'next/navigation'

export default function JobsLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode
}) {
  const router = useRouter()

  return (
    <section>
      <div className="flex row justify-between items-center px-10 py-5 bg-[#272727] text-[#EFF1F3]">
        <div className="flex row items-center gap-10">
          <div className=''>
            <Image 
              src="/logo_dark.png"
              alt="Company Logo"
              width={100}
              height={100}
            />
          </div>
          <div className="flex row gap-7">
            <div className='cursor-pointer hover:underline hover:underline-offset-4 hover:decoration-2' onClick={() => router.push('/listing')}>Listings</div>
            <div className='cursor-pointer hover:underline hover:underline-offset-4 hover:decoration-2'>Messages</div>
            <div className='cursor-pointer hover:underline hover:underline-offset-4 hover:decoration-2' onClick={() => router.push('/company')}>Companies</div>
            <div className='cursor-pointer hover:underline hover:underline-offset-4 hover:decoration-2' onClick={() => router.push('/salary')}>Salary</div>
            <div className='cursor-pointer hover:underline hover:underline-offset-4 hover:decoration-2' onClick={() => router.push('/recommendation')}>FAQs</div>
          </div>
        </div>
        <div>
          <div>Location</div>
          <div>Profiles</div>
        </div>
      </div>
      <nav></nav>
      {children}
    </section>
  )
}