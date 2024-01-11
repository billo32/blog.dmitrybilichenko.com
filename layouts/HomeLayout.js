import siteMetadata from '@/data/siteMetadata'
import SocialIcon from '@/components/social-icons'
import Image from '@/components/Image'
import { PageSEO } from '@/components/SEO'
import { useEffect, useState } from 'react'

import Place from '@/components/dbs/place'
import useTranslation from 'next-translate/useTranslation'

export default function HomeLayout({ children, frontMatter, availableLocales }) {
  const { name, avatar, occupation, company, email, twitter, linkedin, github } = frontMatter
  const { t } = useTranslation()

  const [audio, setAudio] = useState(null)
  useEffect(() => {
    setAudio(new Audio('/static/sounds/owl_great_horned.mp3'))
  }, [])

  return (
    <>
      <PageSEO title={`${siteMetadata.author}`} description={siteMetadata.description} />

      <div className="container mx-auto flex h-screen flex-col justify-between px-10 py-24">
        <div className="relative h-14 w-14 cursor-pointer md:h-28 md:w-28">
          <Image
            quality={100}
            title="Dmitry Bilichenko"
            src={'/static/images/bd-logo-white.png'}
            alt="Dmitry Bilichenko"
            loading="eager"
            layout="fill"
            onClick={() => {
              audio.play()
            }}
          />
        </div>

        <div className="max-w-3xl">
          <div className="font-sans text-[22px] leading-8 tracking-wide">{children}</div>
        </div>
      </div>
      <div className="container mx-auto flex h-fit flex-col justify-start px-10 py-24">
        <div className="grid max-w-3xl grid-flow-row sm:grid-cols-1 sm:gap-0 md:grid-cols-2 md:gap-40">
          <div className="col-span-1">
            <div className="font-sans text-[22px] font-medium leading-8 tracking-wide sm:mb-2 sm:mt-8 md:mb-6 md:mt-12">
              Work
            </div>
            <ul>
              <Place
                title="MTS-Link - Webinar"
                subtitle="Chaper leader / Team leader"
                linkTitle="mts-link.ru"
                link="https://mts-link.ru"
              ></Place>
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
            <div className="mb-6 mt-12 font-sans text-[22px] font-medium leading-8 tracking-wide">
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
            <div className="mb-6 mt-12 font-sans text-[22px] font-medium leading-8 tracking-wide">
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
                  layout="fill"
                  className="mt-16 h-10 w-40"
                  src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png"
                  alt="Buy Me A Coffee"
                />
              </a>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}
