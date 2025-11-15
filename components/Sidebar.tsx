'use client'

import Link from 'next/link'
import { useState } from 'react'
import Image from 'next/image'

// Project preview images (first image from each project)
const projectPreviews: { [key: string]: string } = {
  'homeoffice': '/images/homeoffice/Homeoffice-01.jpg',
  'terka': '/images/terka/Terka-01.jpg',
  'poles': '/images/poles/PHSQUATWAW111194-3-13.jpg',
  'norwegian-summer': '/images/norwegian_summer/NorwegianSummer-1.jpeg',
  'homeoffice-zine': '/images/homeoffice/Homeoffice-01.jpg',
}

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false)
  const [hoveredProject, setHoveredProject] = useState<string | null>(null)
  const [previewPosition, setPreviewPosition] = useState({ top: 0, left: 0 })

  const handleMouseEnter = (projectId: string, event: React.MouseEvent) => {
    setPreviewPosition({ 
      top: event.clientY + 10,
      left: event.clientX + 10
    })
    setHoveredProject(projectId)
  }

  const handleMouseMove = (event: React.MouseEvent) => {
    if (hoveredProject) {
      setPreviewPosition({ 
        top: event.clientY + 10,
        left: event.clientX + 10
      })
    }
  }
  
  const workProjects = [
    { name: 'Homeoffice', id: 'homeoffice' },
    { name: 'Terka', id: 'terka' },
    { name: 'Poles', id: 'poles' },
    { name: 'Norwegian summer', id: 'norwegian-summer' },
  ]

  const bookProjects = [
    { name: 'Homeoffice - zine', id: 'homeoffice-zine' },
  ]

  return (
    <>
      {/* Mobile Header - Always Visible */}
      <div className="md:hidden fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200 px-4 py-4 flex items-center justify-between">
        <Link href="/" onClick={() => setIsOpen(false)}>
          <h1 className="text-lg font-bold text-black tracking-tight">
            Konrad Galan
          </h1>
        </Link>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 hover:bg-gray-50 rounded-md transition-colors"
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isOpen ? (
              <path d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Backdrop Overlay */}
      {isOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black/50 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

      <aside className={`
        w-full md:w-64 bg-white md:border-r border-gray-200 px-4 pt-24 pb-8 md:p-8 md:pt-8 fixed h-screen overflow-y-auto z-40 md:z-30
        ${isOpen ? 'block opacity-100 pointer-events-auto' : 'hidden md:block opacity-0 md:opacity-100 pointer-events-none md:pointer-events-auto'}
      `}>
        {/* Logo/Name - Desktop Only */}
        <Link href="/" className="mb-12 hidden md:block" onClick={() => setIsOpen(false)}>
          <h1 className="text-xl font-bold text-black tracking-tight">
            Konrad Galan
          </h1>
        </Link>

      {/* Work Section */}
      <nav className="space-y-8 md:overflow-visible">
        <div>
          <h2 className="text-sm font-semibold text-black mb-3 uppercase tracking-wide">
            WORK
          </h2>
          <ul className="space-y-2">
            {workProjects.map((project) => (
              <li key={project.id} className="relative">
                <Link
                  href={`/?project=${project.id}`}
                  className="text-sm text-gray-700 hover:text-red-500 transition-colors block"
                  onClick={() => setIsOpen(false)}
                  onMouseEnter={(e) => handleMouseEnter(project.id, e)}
                  onMouseMove={handleMouseMove}
                  onMouseLeave={() => setHoveredProject(null)}
                >
                  {project.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-semibold text-black mb-3 uppercase tracking-wide">
            BOOKS
          </h2>
          <ul className="space-y-2">
            {bookProjects.map((project) => (
              <li key={project.id} className="relative">
                <Link
                  href={`/?project=${project.id}`}
                  className="text-sm text-gray-700 hover:text-red-500 transition-colors block"
                  onClick={() => setIsOpen(false)}
                  onMouseEnter={(e) => handleMouseEnter(project.id, e)}
                  onMouseMove={handleMouseMove}
                  onMouseLeave={() => setHoveredProject(null)}
                >
                  {project.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Footer Links */}
        <div className="mt-12 space-y-2">
          <Link
            href="/about"
            className="block text-sm text-gray-700 hover:text-red-500 transition-colors"
            onClick={() => setIsOpen(false)}
          >
            About
          </Link>
          <Link
            href="/contact"
            className="block text-sm text-gray-700 hover:text-red-500 transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>
        </div>

        {/* Instagram Icon */}
        <div className="mt-6">
          <a
            href="https://instagram.com/konradgalan"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-gray-700 hover:text-red-500 transition-colors"
            onClick={() => setIsOpen(false)}
            aria-label="Instagram"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
          </a>
        </div>
      </nav>
      </aside>

      {/* Preview Image - Follows cursor */}
      {hoveredProject && projectPreviews[hoveredProject] && (
        <div 
          className="hidden md:block fixed z-[100] pointer-events-none"
          style={{ 
            top: `${previewPosition.top}px`,
            left: `${previewPosition.left}px`
          }}
        >
          <div className="relative w-20 h-28 rounded overflow-hidden shadow-xl border border-gray-200 bg-white">
            <Image
              src={projectPreviews[hoveredProject]}
              alt={hoveredProject}
              fill
              className="object-cover"
            />
          </div>
        </div>
      )}
    </>
  )
}

