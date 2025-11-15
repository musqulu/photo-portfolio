'use client'

import ImageViewer from '@/components/ImageViewer'
import { useSearchParams } from 'next/navigation'
import { Suspense } from 'react'

function HomeContent() {
  const searchParams = useSearchParams()
  const project = searchParams.get('project') || 'homeoffice'
  
  return <ImageViewer projectId={project} />
}

export default function Home() {
  return (
    <Suspense fallback={<div className="h-screen bg-white" />}>
      <HomeContent />
    </Suspense>
  )
}

