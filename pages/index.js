import 'bulma/css/bulma.min.css'

import { useEffect, useState } from 'react'
import { Hero, Columns } from 'react-bulma-components'
import WorkPlace from '@/components/dbs/workplace'

export default function Home() {
  const [audio, setAudio] = useState(null)
  useEffect(() => {
    setAudio(new Audio('/static/sounds/owl_great_horned.mp3'))
    // only run once on the first render on the client
  }, [])

  // const audio = new Audio('static/sounds/owl_great_horned.mp3')

  return (
    <div className="App">
      {/* <div className="links">
        <ul>
          <li>Phone</li>
          <li>Email</li>
          <li>Email 2</li>
        </ul>
      </div> */}
      <Hero className="hero is-fullheight">
        <div className="hero-head">
          <img
            src={'/static/images/bd-logo-white.png'}
            onClick={() => {
              audio.play()
            }}
            className="head-logo"
            alt="logo"
          />
        </div>
        <div className="hero-body"></div>
        <div className="hero-foot">
          <Columns className="info">
            <div className="column is-two-thirds-tablet is-three-quarters-mobile is-narrow info-container">
              {/* Lorem ipsum dolor sit amet consectetur adipiscing elit, urna
              consequat felis vehicula class ultricies mollis dictumst, aenean
              non a in donec nulla. Phasellus ante pellentesque erat cum risus
              consequat imperdiet aliquam, integer placerat et turpis mi eros
              nec lobortis taciti, vehicula nisl litora tellus ligula porttitor
              metus. */}
              I am an experienced Software Development Team Leader / IT Project Manager with a rich
              experience in the development and implementation of software projects. Over the years,
              I have managed projects of various complexities, from simple websites to complex
              worldwide business process automation systems.
            </div>
          </Columns>
        </div>
      </Hero>
      <Hero className="hero is-large">
        <div className="hero-head">
          <Columns className="info">
            <div className="column is-two-thirds-tablet is-three-quarters-mobile is-narrow info-container">
              <Columns>
                <div className="column is-7">
                  <h3 className="is-3">Work</h3>
                  <ul>
                    <WorkPlace
                      title="Kaspersky - KESCloud"
                      subtitle="Group Manager / Team leader"
                      linkTitle="kaspersky.com"
                      link="https://kaspersky.com"
                    ></WorkPlace>
                    <WorkPlace
                      title="Kaspersky - ThreatDeception"
                      subtitle="Architect + FullStack + UX"
                      linkTitle="kaspersky.com"
                      link="https://kaspersky.com"
                    ></WorkPlace>
                    <WorkPlace
                      title="ESKY"
                      subtitle="Head of development department"
                      linkTitle="esky.ru"
                      link="http://esky.ru"
                    ></WorkPlace>
                    <WorkPlace
                      title="RocketStudio"
                      subtitle="Web developer"
                      linkTitle="rocketstudio.ru"
                      link="https://rocketstudio.ru"
                    ></WorkPlace>
                    <WorkPlace
                      title="Virton"
                      subtitle="Software developer"
                      linkTitle="virton.ru"
                      link="http://virton.ru"
                    ></WorkPlace>
                  </ul>
                </div>
                <div className="column is-5">
                  <h3 className="is-3">Awards / Conferences</h3>
                  <ul>
                    <WorkPlace
                      title="Intel IOT"
                      linkTitle="intel.com"
                      link="https://intel.com"
                    ></WorkPlace>
                    <WorkPlace
                      title="Facebook hackathon"
                      linkTitle="facebook.com"
                      link="https://facebook.com"
                    ></WorkPlace>
                  </ul>
                  <br />
                  <h3 className="is-3">Links</h3>
                  <ul>
                    <WorkPlace
                      title="Blog"
                      linkTitle="blog.dmitrybilichenko.com"
                      link="/blog"
                    ></WorkPlace>
                    <WorkPlace
                      title="LinkedIn"
                      linkTitle="linkedin.com/dmitry-bilichenko"
                      link="https://www.linkedin.com/in/dmitry-bilichenko-64ab3a51/"
                    ></WorkPlace>
                  </ul>
                </div>
              </Columns>
            </div>
          </Columns>
        </div>
      </Hero>
    </div>
  )
}
