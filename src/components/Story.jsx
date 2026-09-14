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
            Hi, I'm Emily Qhawekazi Maramani, an aspiring Full Stack Developer with a
            passion for building web and mobile applications that are both functional
            and user-focused.
          </p>
          <p>
            My approach to development is shaped by both hands-on experience and
            curiosity. I value creating inclusive environments where collaboration
            thrives, and I take pride in being someone who ensures that no one is left
            behind when working on a task or solving a problem. I am determined,
            solution-oriented, and able to analyse challenges in order to find
            effective outcomes.
          </p>
          <p>
            When working through difficult problems, I rely on research, asking for
            help when needed, and taking intentional breaks to return with a clearer
            and more focused mindset.
          </p>
          <p>
            Outside of coding, I value family, faith, personal growth, continuous
            learning, creativity, and fitness. These values ground me and influence
            how I approach both life and work.
          </p>
          <p>
            I am also a mother, which has strengthened my resilience, discipline, and
            sense of purpose. It has taught me how to balance responsibility while
            still pursuing personal and professional growth.
          </p>
          <p>
            In collaborative environments, I am often described as talkative, bubbly,
            and engaging. I enjoy creating energy in a room and contributing to a
            positive, interactive team dynamic.
          </p>
          <p>
            Ultimately, I am someone who believes that growth happens through
            discomfort, consistency, and curiosity. I am proud of the person and
            mother I am becoming while continuing to grow into a well-rounded
            developer.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Story
