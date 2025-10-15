import { LoaderCircle } from 'lucide-react'
import React from 'react'

export default function Maintenance() {
  return (
    <div className='flex flex-col justify-center items-center text-white'>
        <div>

        <LoaderCircle className='h-70 w-70 animate-spin'/>
        </div>
        <h1 className='text-4xl'>Under maintenance</h1>
    </div>
  )
}
