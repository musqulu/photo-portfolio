export default function About() {
  return (
    <div className="min-h-screen bg-white md:ml-64 overflow-y-auto pt-16 md:pt-0">
      <div className="max-w-4xl p-8 md:p-16">
        <h1 className="text-2xl font-bold mb-8">About</h1>
        
        <div className="space-y-4 text-sm leading-relaxed text-gray-800 mb-16">
          <p>
            Konrad Galan (b. 1990, Poland) is a photographer and designer based in Terka, 
            a small village in the Carpathian Mountains. His work explores the intersection 
            of place, identity, and the human need for connection. Drawing from both documentary 
            and conceptual traditions, he focuses on vanishing worlds, psychological landscapes, 
            and quiet gestures of resilience.
          </p>
          
          <p>
            Sputnik Photos mentorship program graduate where he worked on 
            homeoffice a project about burnout and productivity culture. His projects often blend 
            personal experience with social observation, searching for meaning within small communities, 
            solitude, and the natural world.
          </p>
          
          <p>
            He is currently pursuing a Master&apos;s degree in Photography at the Łódź Film School, 
            where he continues to develop long-term projects. His ongoing series Terka documents 
            the self sufficient lifestyle and fading traditions of people living close to nature 
            in southeastern Poland. Working primarily with analog processes, Konrad values its 
            rhythm and physicality in the digital age.
          </p>
        </div>

        {/* Education */}
        <section className="mb-16">
          <h2 className="text-lg font-semibold mb-6">Education</h2>
          
          <div className="space-y-6 text-sm">
            <div>
              <div className="mb-1">
                <span className="font-medium">Łódź Film School (PWSFTviT)</span>
              </div>
              <div className="text-gray-600">Master&apos;s Degree in Photography 2025–ongoing</div>
            </div>

            <div> 
              <div className="mb-1">
                <span className="font-medium">Sputnik Photos Mentorship Program (2024–2025)</span>
              </div>
              <div className="text-gray-600 mb-2">Mentor: Jan Brykczyński</div>
              <div className="text-gray-700">
                Author project Homeoffice - a personal protest against the culture of constant 
                productivity in remote environments. Exploration of burnout and digital presence.
              </div>
            </div>

            <div>
              <div className="mb-1">
                <span className="font-medium">University of Gdańsk, Faculty of Oceanography and Geography</span>
              </div>
              <div className="text-gray-600">BSc in Marine Biology and Oceanography, Gdańsk/Gdynia, 2009–2013</div>
            </div>

            <div>
              <div className="mb-1">
                <span className="font-medium">University of Gdańsk, Faculty of Informatics and Econometrics</span>
              </div>
              <div className="text-gray-600">MSc in Internet Applications in Business 2013–2015</div>
            </div>

            <div>
              <div className="mb-2">
                <span className="font-medium">Erasmus Exchange</span>
              </div>
              <div className="text-gray-700 space-y-1">
                <div>University of Gothenburg, Sweden – Marine Biology and Oceanography</div>
                <div>University of Trento, Italy – Human-Computer Interaction</div>
              </div>
            </div>
          </div>
        </section>

        {/* Professional Experience */}
        <section className="mb-16">
          <h2 className="text-lg font-semibold mb-6">Professional Experience</h2>
          
          <div className="space-y-6 text-sm">
            <div>
              <div className="mb-1">
                <span className="font-medium">05/2022 – Present</span>
              </div>
              <div className="text-gray-700 mb-1">Housecall Pro – Remote</div>
              <div className="text-gray-600 mb-2">Senior Product Designer</div>
              <div className="text-gray-700">
                Leading design and research within international teams. Focus on usability, 
                accessibility, and product experience across complex workflows.
              </div>
            </div>

            <div>
              <div className="mb-1">
                <span className="font-medium">04/2019 – 05/2022</span>
              </div>
              <div className="text-gray-700 mb-1">Neurosphere, Berlin (Startup for relaxation and meditation tools)</div>
              <div className="text-gray-600 mb-2">Senior Product Designer & Developer</div>
              <div className="text-gray-700">
                Designed and built applications centered on mindfulness and well-being, 
                integrating research and UX principles.
              </div>
            </div>

            <div>
              <div className="mb-1">
                <span className="font-medium">01/2018 – 03/2019</span>
              </div>
              <div className="text-gray-700 mb-1">Self-employed – Remote / Vancouver, Canada</div>
              <div className="text-gray-600 mb-2">Product Designer & Web Developer</div>
              <div className="text-gray-700">
                Designed and developed web applications and digital products for clients 
                and personal initiatives.
              </div>
            </div>

            <div>
              <div className="mb-1">
                <span className="font-medium">03/2016 – 12/2017</span>
              </div>
              <div className="text-gray-700 mb-1">Ultimo, Gdańsk</div>
              <div className="text-gray-600 mb-2">Product Designer</div>
              <div className="text-gray-700">
                Responsible for designing user interfaces and improving user experience in applications.
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

