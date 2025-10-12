import LoadingScreen from '@/components/layout/LoadingScreen'
import { Skeleton } from '@/components/ui/skeleton'
import React from 'react'

export default function Loading() {

    return (
        <main className='flex items-center justify-center'>
            <div className="flex items-center space-x-4">
                <div className="flex gap-10 opacity-9">
                    <Skeleton className="w-72 h-80" />
                    <Skeleton className="w-72 h-80" />
                    <Skeleton className="w-72 h-80" />
                    <Skeleton className="w-72 h-80" />
                </div>
            </div>
        </main>
    )
}
