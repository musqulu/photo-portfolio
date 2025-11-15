'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

// Project descriptions
const projectDescriptions: { [key: string]: { title: string; description: string; year: string } } = {
  'homeoffice': {
    title: 'Homeoffice',
    description: 'A personal protest against the culture of constant productivity in remote environments. This project explores burnout and digital presence through intimate documentation of workspace isolation. Created during the Sputnik Photos Mentorship Program under Jan Brykczyński, the work examines how digital labor blurs the boundaries between personal and professional life, questioning our relationship with screens and constant availability.',
    year: '2023-2024'
  },
  'terka': {
    title: 'Terka',
    description: 'An ongoing documentation of self-sufficient lifestyle and fading traditions in southeastern Poland. Set in a small Carpathian village, this series captures people living close to nature, maintaining old ways of life in the face of modernization. The work explores themes of place, belonging, and the quiet resilience of rural communities.',
    year: 'Ongoing'
  },
  'poles': {
    title: 'Poles',
    description: 'A photographic exploration of contemporary Polish identity. This series examines what it means to be Polish in the 21st century, navigating between tradition and modernity, rural and urban, past and present. Through portraits and landscapes, the work investigates the complex relationship between personal and national identity.',
    year: '2024'
  },
  'homeoffice-zine': {
    title: 'Homeoffice - zine',
    description: 'Self-published artist book exploring themes of remote work, digital burnout, and productivity culture. The zine combines photography with visual essays to create a personal narrative about the psychological impact of constant connectivity. Limited edition, hand-bound.',
    year: '2024'
  },
  'norwegian-summer': {
    title: 'Norwegian summer',
    description: 'A photographic exploration of Norwegian summer landscapes and light. Documenting the unique quality of Nordic summer where the sun barely sets, creating an otherworldly atmosphere. The series captures the interplay between vast nature, minimal human presence, and the eternal twilight of northern latitudes.',
    year: '2024'
  },
}

// Project categories with different images
const projects: { [key: string]: Array<{ id: number; src: string; title: string; info: string }> } = {
  'homeoffice': [
    { id: 1, src: '/images/homeoffice/Homeoffice-01.jpg', title: 'Homeoffice 01', info: 'Remote workspace, 2023-2024' },
    { id: 2, src: '/images/homeoffice/Homeoffice-02.jpg', title: 'Homeoffice 02', info: 'Digital burnout, 2023-2024' },
    { id: 3, src: '/images/homeoffice/Homeoffice-02-1.jpg', title: 'Homeoffice 03', info: 'Productivity culture, 2023-2024' },
    { id: 4, src: '/images/homeoffice/Homeoffice-03.jpg', title: 'Homeoffice 04', info: 'Screen time, 2023-2024' },
    { id: 5, src: '/images/homeoffice/Homeoffice-03-1.jpg', title: 'Homeoffice 05', info: 'Work isolation, 2023-2024' },
    { id: 6, src: '/images/homeoffice/Homeoffice-04.jpg', title: 'Homeoffice 06', info: 'Digital presence, 2023-2024' },
    { id: 7, src: '/images/homeoffice/Homeoffice-04-1.jpg', title: 'Homeoffice 07', info: 'Remote reality, 2023-2024' },
    { id: 8, src: '/images/homeoffice/Homeoffice-05.jpg', title: 'Homeoffice 08', info: 'Burnout, 2023-2024' },
    { id: 9, src: '/images/homeoffice/Homeoffice-05-1.jpg', title: 'Homeoffice 09', info: 'Digital labor, 2023-2024' },
  ],
  'terka': [
    { id: 10, src: '/images/terka/Terka-01.jpg', title: 'Terka 01', info: 'Carpathian village life, ongoing' },
    { id: 11, src: '/images/terka/Terka-02.jpg', title: 'Terka 02', info: 'Self-sufficient lifestyle, ongoing' },
    { id: 12, src: '/images/terka/Terka-03.jpg', title: 'Terka 03', info: 'Fading traditions, ongoing' },
    { id: 13, src: '/images/terka/Terka-04.jpg', title: 'Terka 04', info: 'Living close to nature, ongoing' },
    { id: 14, src: '/images/terka/Terka-05.jpg', title: 'Terka 05', info: 'Rural resilience, ongoing' },
    { id: 15, src: '/images/terka/Terka-06.jpg', title: 'Terka 06', info: 'Mountain community, ongoing' },
    { id: 16, src: '/images/terka/Terka-08.jpg', title: 'Terka 07', info: 'Traditional life, ongoing' },
    { id: 17, src: '/images/terka/Terka-09.jpg', title: 'Terka 08', info: 'Village stories, ongoing' },
    { id: 18, src: '/images/terka/Terka-10.jpg', title: 'Terka 09', info: 'Natural living, ongoing' },
    { id: 19, src: '/images/terka/Terka-11.jpg', title: 'Terka 10', info: 'Carpathian heritage, ongoing' },
    { id: 20, src: '/images/terka/Terka-12.jpg', title: 'Terka 11', info: 'Quiet resilience, ongoing' },
  ],
  'poles': [
    { id: 21, src: '/images/poles/PHSQUATWAW111194-3-13.jpg', title: 'Poles 01', info: 'Identity study, 2024' },
    { id: 22, src: '/images/poles/PHSQUATWAW111194-4-20.jpg', title: 'Poles 02', info: 'Polish identity, 2024' },
    { id: 23, src: '/images/poles/PHSQUATWAW111194-4-33.jpg', title: 'Poles 03', info: 'Contemporary Poland, 2024' },
    { id: 24, src: '/images/poles/PHSQUATWAW111194-4-35.jpg', title: 'Poles 04', info: 'Urban identity, 2024' },
    { id: 25, src: '/images/poles/PHSQUATWAW111195-2-33.jpg', title: 'Poles 05', info: 'Modern tradition, 2024' },
    { id: 26, src: '/images/poles/Poles-4.jpg', title: 'Poles 06', info: 'Polish landscape, 2024' },
    { id: 27, src: '/images/poles/Poles-5.jpg', title: 'Poles 07', info: 'National identity, 2024' },
    { id: 28, src: '/images/poles/Poles-6.jpg', title: 'Poles 08', info: 'Cultural exploration, 2024' },
  ],
  'homeoffice-zine': [
    { id: 29, src: '/images/homeoffice/Homeoffice-01.jpg', title: 'Homeoffice Zine - Cover', info: 'Self-published, 2024' },
    { id: 30, src: '/images/homeoffice/Homeoffice-02.jpg', title: 'Homeoffice Zine - Spread 01', info: 'Personal protest against productivity culture' },
    { id: 31, src: '/images/homeoffice/Homeoffice-03.jpg', title: 'Homeoffice Zine - Spread 02', info: 'Exploration of burnout' },
  ],
  'norwegian-summer': [
    { id: 32, src: '/images/norwegian_summer/NorwegianSummer-1.jpeg', title: 'Norwegian Summer 01', info: 'Midnight sun, Norway 2024' },
    { id: 33, src: '/images/norwegian_summer/NorwegianSummer-3.jpeg', title: 'Norwegian Summer 02', info: 'Nordic landscape, 2024' },
    { id: 34, src: '/images/norwegian_summer/NorwegianSummer-5.jpeg', title: 'Norwegian Summer 03', info: 'Fjord twilight, 2024' },
    { id: 35, src: '/images/norwegian_summer/NorwegianSummer-6.jpeg', title: 'Norwegian Summer 04', info: 'Mountain light, 2024' },
    { id: 36, src: '/images/norwegian_summer/NorwegianSummer-7.jpeg', title: 'Norwegian Summer 05', info: 'Coastal beauty, 2024' },
    { id: 37, src: '/images/norwegian_summer/NorwegianSummer-8.jpeg', title: 'Norwegian Summer 06', info: 'Northern twilight, 2024' },
    { id: 38, src: '/images/norwegian_summer/NorwegianSummer-9.jpeg', title: 'Norwegian Summer 07', info: 'Endless daylight, 2024' },
    { id: 39, src: '/images/norwegian_summer/NorwegianSummer-10.jpeg', title: 'Norwegian Summer 08', info: 'Arctic summer, 2024' },
    { id: 40, src: '/images/norwegian_summer/NorwegianSummer-11.jpeg', title: 'Norwegian Summer 09', info: 'Nordic nature, 2024' },
    { id: 41, src: '/images/norwegian_summer/NorwegianSummer-12.jpeg', title: 'Norwegian Summer 10', info: 'Midnight glow, 2024' },
    { id: 42, src: '/images/norwegian_summer/NorwegianSummer-13.jpeg', title: 'Norwegian Summer 11', info: 'Summer nights, 2024' },
    { id: 43, src: '/images/norwegian_summer/NorwegianSummer-14.jpeg', title: 'Norwegian Summer 12', info: 'Eternal light, 2024' },
    { id: 44, src: '/images/norwegian_summer/NorwegianSummer-15.jpeg', title: 'Norwegian Summer 13', info: 'Northern beauty, 2024' },
    { id: 45, src: '/images/norwegian_summer/NorwegianSummer-16.jpeg', title: 'Norwegian Summer 14', info: 'Scandinavian summer, 2024' },
    { id: 46, src: '/images/norwegian_summer/NorwegianSummer-17.jpeg', title: 'Norwegian Summer 15', info: 'Nordic light, 2024' },
  ],
}

interface ImageViewerProps {
  projectId?: string
}

export default function ImageViewer({ projectId = 'homeoffice' }: ImageViewerProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [showInfo, setShowInfo] = useState(false)
  const [currentProject, setCurrentProject] = useState(projectId)

  const images = projects[currentProject] || projects['homeoffice']

  // Reset index when project changes
  useEffect(() => {
    setCurrentProject(projectId)
    setCurrentIndex(0)
    setShowInfo(false)
  }, [projectId])

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length)
    setShowInfo(false)
  }

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
    setShowInfo(false)
  }

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') goToNext()
      if (e.key === 'ArrowLeft') goToPrevious()
      if (e.key === 'i' || e.key === 'I') setShowInfo((prev) => !prev)
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [images.length])

  const currentImage = images[currentIndex]

  const projectInfo = projectDescriptions[currentProject] || projectDescriptions['homeoffice']

  return (
    <div className="relative h-screen bg-white flex items-center justify-center ml-0 md:ml-64 overflow-hidden pt-16 md:pt-0">
      {showInfo ? (
        /* Info View - Full Screen */
        <div className="relative w-full h-full flex items-center justify-center p-8 md:p-16">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">{projectInfo.title}</h1>
            <p className="text-gray-600 text-sm mb-6">{projectInfo.year}</p>
            <p className="text-base leading-relaxed text-gray-800">
              {projectInfo.description}
            </p>
          </div>
        </div>
      ) : (
        /* Image View */
        <div className="relative w-full h-full flex items-center justify-center p-12">
          <div className="relative max-w-5xl max-h-full w-full h-full">
            <Image
              src={currentImage.src}
              alt={currentImage.title}
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      )}

      {/* Bottom Controls */}
      <div className="absolute bottom-8 left-8 right-8 flex items-center justify-between text-black">
        <button
          onClick={() => setShowInfo(!showInfo)}
          className="text-sm uppercase tracking-wider hover:text-red-500 transition-colors"
        >
          {showInfo ? 'CLOSE' : 'INFO'}
        </button>

        {!showInfo && (
          <div className="flex items-center gap-8">
            <button
              onClick={goToPrevious}
              className="hover:text-red-500 transition-colors"
              aria-label="Previous image"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M19 12H5M5 12l7 7M5 12l7-7"/>
              </svg>
            </button>
            <span className="text-sm">
              {currentIndex + 1} / {images.length}
            </span>
            <button
              onClick={goToNext}
              className="hover:text-red-500 transition-colors"
              aria-label="Next image"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

