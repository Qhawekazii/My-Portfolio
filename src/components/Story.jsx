import portrait from "../assets/me2.jpg"
import { useReveal } from "../hooks/useReveal.js"
import { Palette, Code2, Lightbulb } from "lucide-react"

const ROLES = [
  { label: "Product Engineer", Icon: Lightbulb },
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
          <span>A dentist sees a cavity and fills it.</span> I see the gaps
          in the digital world —
          <span> and I fill them.</span>
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
            I'm Emily Qhawekazi Maramani. I'm UX/UI-focused because an idea only
            works if all kinds of people can use it — on any phone, in any
            language, with any level of confidence on a screen. I design it,
            build it, and don't stop until it ships, which is why I'm moving
            into product engineering.
          </p>
          <p>
            Off-screen, I'm a mother first — a crash course in noticing what's
            about to go wrong before it does, and staying calm when it does
            anyway. Family, faith and fitness keep me grounded; curiosity keeps
            me building.
          </p>
        </div>

        <div className="story-photo-col">
          <div className="story-photo" data-cursor="hover">
            <img src={portrait} alt="Portrait of Emily Qhawekazi Maramani" />
          </div>
          <span className="story-photo-caption">Emily — Product Engineer · UI/UX · Full-Stack</span>
        </div>
      </div>
    </section>
  )
}

export default Story
