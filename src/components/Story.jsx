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
          in the digital world — the awkward flow, the missing state, the tool a team
          pays for that still doesn't do the job —
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
            language, with any level of confidence on a screen.
          </p>
          <p>
            I ideate, design and then actually put it into action: I build the
            interface and the code behind it, and I don't stop until it ships.
            That's why I'm moving into product engineering — owning a product
            from the gap I spotted to the feature people use.
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
          <span className="story-photo-caption">Emily — Product Engineer · UI/UX · Full-Stack</span>
        </div>
      </div>
    </section>
  )
}

export default Story
