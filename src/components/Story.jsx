import portrait from "../assets/me2.jpg"
import { useReveal } from "../hooks/useReveal.js"

function Story() {
  const ref = useReveal()
  const philosophyRef = useReveal()

  return (
    <section id="story">
      <span className="section-num">02 / 05</span>
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
            Curious over comfortable. I research, ask for help without ego, and
            show up for my team — the one making sure no one gets left behind.
          </p>
          <p>
            Family, faith, fitness, and motherhood taught me discipline long before
            agile did. Growth lives in discomfort, so I keep choosing hard things —
            and I'm just getting started.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Story
