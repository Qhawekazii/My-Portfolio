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
        <div className="story-text">
          <p>
            I'm Emily Qhawekazi Maramani. Most days that means finding the bug
            nobody flagged, the edge case nobody tested, the state nobody
            handled — and building the fix before it becomes someone else's
            problem.
          </p>
          <p>
            Off-screen, I'm a mother first — which is its own crash course in
            noticing what's about to go wrong before it does, staying calm when
            it does anyway, and fixing things with whatever's on hand.
          </p>
          <p>
            Family, faith, and fitness keep me grounded; curiosity keeps me
            building. I'm still finding new gaps to notice — and that's the
            part I actually love.
          </p>
        </div>

        <div className="story-photo" data-cursor="hover">
          <img src={portrait} alt="Portrait of Emily Qhawekazi Maramani" />
        </div>
      </div>
    </section>
  )
}

export default Story
