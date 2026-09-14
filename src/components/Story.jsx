import portrait from "../assets/me2.jpg"
import { useReveal } from "../hooks/useReveal.js"

function Story() {
  const ref = useReveal()
  const philosophyRef = useReveal()

  return (
    <section id="story">
      <span className="section-num">02 / 06</span>
      <div className="section-head">
        <span className="eyebrow">My Story</span>
        <h2>The person behind the code.</h2>
      </div>

      <div className="philosophy reveal" ref={philosophyRef}>
        <p>
          <span>I notice the gaps</span> most people scroll past —
          the awkward flow, the missing state, the click that should exist but doesn't.
          <span> Then I build the fix.</span>
        </p>
      </div>

      <div className="story reveal" ref={ref}>
        <div className="story-photo" data-cursor="hover">
          <img src={portrait} alt="Portrait of Emily Qhawekazi Maramani" />
        </div>

        <div className="story-text">
          <p>
            I'm Emily Qhawekazi Maramani — a Full Stack Developer with a mother's
            radar for spotting problems early, and a builder's habit of fixing them
            before anyone has to ask.
          </p>
          <p>
            I'm shaped more by curiosity than comfort. When something breaks or
            doesn't make sense, I research it, ask for help without ego, and take
            intentional breaks so I come back sharper — not stuck.
          </p>
          <p>
            On a team, I'm the one making sure no one gets left behind on a task:
            talkative, bubbly, and genuinely energised by solving problems with
            people, not just for them.
          </p>
          <p>
            Outside the editor: family, faith, fitness, and being a mother — the
            parts of my life that taught me discipline and resilience long before a
            sprint retro ever did.
          </p>
          <p>
            Growth happens in discomfort, so I keep choosing hard things on purpose.
            I'm proud of the developer I'm becoming — and this is very much still
            in progress.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Story
