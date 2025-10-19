import { Construction, LoaderCircle, Rocket } from 'lucide-react'
import React from 'react'

export default function Maintenance() {
  return (
    <div className='flex flex-col justify-center items-center text-white'>
        <div>

        <Construction className='h-70 w-70'/>
        </div>
        <h1 className='text-4xl'>Under maintenance</h1>
    </div>
  )
}
