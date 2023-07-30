import siteMetadata from '@/data/siteMetadata'
import { useEffect, useState } from 'react'
import { PageSEO } from '@/components/SEO'
import Place from '@/components/dbs/place'

export default function Home() {
  const [audio, setAudio] = useState(null)
  useEffect(() => {
    setAudio(new Audio('/static/sounds/owl_great_horned.mp3'))
    // only run once on the first render on the client
  }, [])

  // const audio = new Audio('static/sounds/owl_great_horned.mp3')

  return (
    <>
      <PageSEO title={`${siteMetadata.author}`} description={siteMetadata.description} />

      <div className="container mx-auto flex h-screen flex-col justify-between px-10 py-24">
        <img
          src={'/static/images/bd-logo-white.png'}
          onClick={() => {
            audio.play()
          }}
          className="head-logo"
          alt="logo"
        />

        <div className="max-w-3xl">
          <p className="font-sans text-[22px] leading-8 tracking-wide">
            I am an experienced Software Development Team Leader / IT Project Manager with a rich
            experience in the development and implementation of software projects. Over the years, I
            have managed projects of various complexities, from simple websites to complex worldwide
            business process automation systems.
          </p>
        </div>
      </div>
      <div className="container mx-auto flex h-fit flex-col justify-start px-10 py-24">
        <div className="grid max-w-3xl grid-flow-row sm:grid-cols-1 sm:gap-0 md:grid-cols-2 md:gap-40">
          <div className="col-span-1">
            <div className="font-sans text-[22px] font-medium leading-8 tracking-wide sm:mt-8 sm:mb-2 md:mb-6 md:mt-12">
              Work
            </div>
            <ul>
              <Place
                title="Kaspersky - KESCloud"
                subtitle="Group Manager / Team leader"
                linkTitle="kaspersky.com"
                link="https://kaspersky.com"
              ></Place>
              <Place
                title="Kaspersky - ThreatDeception"
                subtitle="Architect + FullStack + UX"
                linkTitle="kaspersky.com"
                link="https://kaspersky.com"
              ></Place>
              <Place
                title="ESKY"
                subtitle="Head of development department"
                linkTitle="esky.ru"
                link="http://esky.ru"
              ></Place>
              <Place
                title="RocketStudio"
                subtitle="Web developer"
                linkTitle="rocketstudio.ru"
                link="https://rocketstudio.ru"
              ></Place>
              <Place
                title="Virton"
                subtitle="Software developer"
                linkTitle="virton.ru"
                link="http://virton.ru"
              ></Place>
            </ul>
          </div>
          <div className="col-span-1">
            <div className="mt-12 mb-6 font-sans text-[22px] font-medium leading-8 tracking-wide">
              Awards / Conferences
            </div>
            <ul>
              <Place title="Intel IOT" linkTitle="intel.com" link="https://intel.com"></Place>
              <Place
                title="Facebook hackathon"
                linkTitle="facebook.com"
                link="https://facebook.com"
              ></Place>
            </ul>
            <div className="mt-12 mb-6 font-sans text-[22px] font-medium leading-8 tracking-wide">
              Links
            </div>
            <ul>
              <Place title="Blog" linkTitle="blog.dmitrybilichenko.com" link="/blog"></Place>
              <Place
                title="LinkedIn"
                linkTitle="linkedin.com/dmitry-bilichenko"
                link="https://www.linkedin.com/in/dmitry-bilichenko-64ab3a51/"
              ></Place>
              <a
                href="https://www.buymeacoffee.com/dimalovecoffee"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png"
                  alt="Buy Me A Coffee"
                  style={{
                    height: '40px !important',
                    width: '150px !important',
                    marginTop: '60px',
                  }}
                />
              </a>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}
