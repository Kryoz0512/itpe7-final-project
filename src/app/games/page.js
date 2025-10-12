import React from 'react'
import Games from '@/components/layout/Games'

export default async function page() {
  await new Promise((resolve) => setTimeout(resolve, 3000))
  return (
    <div>
      <Games />
    </div>
  )
}
