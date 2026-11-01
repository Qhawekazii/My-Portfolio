// HOW I WORK
// Every "proof" line points at a real project on this site, so each
// step can be checked against the case studies below.

const processSteps = [
  {
    step: "01",
    title: "Spot the gap",
    principle: "I start with who is losing what, not with a feature list.",
    what:
      "Before I design anything I map where people currently go to get the job done, and what it costs them in money, time or trust. A gap is only worth filling if someone pays for it staying open.",
    proof: [
      { project: "iHub Comms", text: "iHub was paying for several subscriptions that each covered one slice of a cohort, and learners still missed deadlines because information was spread across all of them." },
      { project: "Un De Plus", text: "The site looked finished, but booking forms submitted nowhere. Every lost form was a lost booking." },
    ],
    question: "Who loses what if this stays broken?",
  },
  {
    step: "02",
    title: "Design for everyone",
    principle: "If only confident users can use it, the gap isn't closed.",
    what:
      "I design for the hardest case first: an entry-level phone, limited data, a second language, someone using a keyboard or a screen reader. If it works for them, it works for everyone else.",
    proof: [
      { project: "St Frusquin", text: "Parents browse on mobile data, so I cut the first page load from 32 MB to 3.9 MB and met WCAG AA contrast." },
      { project: "Un De Plus", text: "International visitors get 19 languages, read-aloud, adjustable text size and a high-contrast mode." },
    ],
    question: "Who would struggle with this, and what would stop them?",
  },
  {
    step: "03",
    title: "Build what users can trust",
    principle: "The parts nobody sees decide whether people can rely on it.",
    what:
      "I put access rules in the database instead of only hiding buttons, test the paths where things go wrong, and show an honest empty state rather than invent content.",
    proof: [
      { project: "iHub Comms", text: "Found and closed a hole that let any learner make themselves admin. Roles are now enforced by the database itself." },
      { project: "Airbnb Clone", text: "43 API tests check that guests and hosts can only change what's theirs." },
      { project: "St Frusquin", text: "Fixtures show \"coming soon\" instead of made-up results, because a wrong fixture is worse than none." },
    ],
    question: "What happens when someone does the wrong thing, by accident or on purpose?",
  },
  {
    step: "04",
    title: "Ship it and hand it over",
    principle: "It isn't done until it's live and can keep running without me.",
    what:
      "I deploy to the client's own accounts and write the handover so the next person can run it.",
    proof: [
      { project: "Un De Plus", text: "Live on the client's own domain, with hosting billed to him, so the site never depends on me to stay online." },
      { project: "St Frusquin", text: "Handed over with a README the club can follow to keep fixtures and squads up to date." },
      { project: "iHub Comms", text: "Pitched to iHub for internal use, with setup and admin guides written for non-technical staff." },
    ],
    question: "Can this keep working, and keep improving, without me in the room?",
  },
]

export default processSteps
