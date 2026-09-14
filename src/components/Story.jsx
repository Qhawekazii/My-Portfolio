import portrait from "../assets/me2.jpg"
import { useReveal } from "../hooks/useReveal.js"
import { Palette, Code2 } from "lucide-react"

const ROLES = [
  { label: "UI/UX Designer", Icon: Palette },
  { label: "Full-Stack Developer", Icon: Code2 },
]

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
          <div className="story-roles">
            {ROLES.map(({ label, Icon }) => (
              <span className="role-pill" key={label}>
                <Icon size={15} strokeWidth={2} />
                {label}
              </span>
            ))}
          </div>

          <p>
            I'm Emily Qhawekazi Maramani — I design the interface and build
            the code behind it, which means I notice the bug nobody flagged,
            the edge case nobody tested, and the layout that just feels off,
            then fix all of it myself.
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

        <div className="story-photo-col">
          <div className="story-photo" data-cursor="hover">
            <img src={portrait} alt="Portrait of Emily Qhawekazi Maramani" />
          </div>
          <span className="story-photo-caption">Emily — UI/UX Designer & Developer</span>
        </div>
      </div>
    </section>
  )
}

export default Story
