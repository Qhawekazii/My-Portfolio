import { useState } from "react"
import { FaGithub, FaLinkedin, FaEnvelope, FaDiscord } from "react-icons/fa"
import { Briefcase, Code2, Globe, MapPin, FileText, Copy, Check } from "lucide-react"
import { CV_PATH } from "../data/cv.js"
import { CONTACT } from "../data/contact.js"

const AVAILABLE_FOR = [
  { Icon: Briefcase, title: "Full-time roles", text: "Junior product engineer, full-stack or front-end." },
  { Icon: Code2, title: "Freelance projects", text: "Websites, web apps and redesigns for small businesses and teams." },
  { Icon: Globe, title: "Remote or on-site", text: "Remote anywhere, or on-site in Johannesburg." },
]

// Labelled rows instead of bare icons, so nobody has to guess what a logo is.
const CHANNELS = [
  { label: "Email", value: CONTACT.email, href: `mailto:${CONTACT.email}`, Icon: FaEnvelope },
  { label: "LinkedIn", value: "emily-maramani", href: CONTACT.linkedin, Icon: FaLinkedin, external: true },
  { label: "GitHub", value: "Qhawekazii", href: CONTACT.github, Icon: FaGithub, external: true },
  { label: "Discord", value: CONTACT.discord, copy: CONTACT.discord, Icon: FaDiscord },
]

const TOPICS = ["A full-time role", "A freelance project", "Something else"]

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", topic: TOPICS[0], message: "" })
  const [status, setStatus] = useState({ text: "", type: "" })
  const [sending, setSending] = useState(false)
  const [copied, setCopied] = useState("")

  const copyToClipboard = async (label, value) => {
    try {
      await navigator.clipboard.writeText(value)
    } catch {
      window.prompt("Copy this:", value)
    }
    setCopied(label)
    setTimeout(() => setCopied(""), 1800)
  }

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const { name, email, topic, message } = form
    if (!name.trim() || !email.trim() || !message.trim()) {
      setStatus({ text: "Please fill in your name, email and message.", type: "error" })
      return
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailPattern.test(email)) {
      setStatus({ text: "Please enter a valid email address.", type: "error" })
      return
    }

    setSending(true)
    setStatus({ text: "Sending your message...", type: "sending" })

    try {
      const response = await fetch("https://formsubmit.co/ajax/" + CONTACT.email, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          Accept: "application/json",
        },
        body: new URLSearchParams({
          name,
          email,
          topic,
          message,
          _subject: `Portfolio: ${topic} — ${name}`,
        }).toString(),
      })

      if (!response.ok) throw new Error("Unable to send message right now.")

      setForm({ name: "", email: "", topic: TOPICS[0], message: "" })
      setStatus({ text: "Thanks! Your message was sent. I'll get back to you soon.", type: "success" })
    } catch {
      const subject = encodeURIComponent(`Portfolio: ${topic} — ${name}`)
      const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\nAbout: ${topic}\n\n${message}`)
      window.location.href = `mailto:${CONTACT.email}?subject=${subject}&body=${body}`
      setStatus({
        text: "Your email app should open with your message. Please send it from there.",
        type: "success",
      })
    } finally {
      setSending(false)
    }
  }

  return (
    <section id="contact">
      <div className="contact-intro">
        <span className="eyebrow">Contact</span>
        <h2>Let's work together.</h2>
        <p className="contact-tagline">
          Hiring for a role, or need a website or web app built? Tell me what
          you're working on. I read every message myself.
        </p>
      </div>

      <div className="contact-grid">
        <div className="contact-side">
          <div className="contact-card">
            <h3 className="contact-card-title">Available for</h3>
            <ul className="available-list">
              {AVAILABLE_FOR.map(({ Icon, title, text }) => (
                <li key={title}>
                  <Icon size={18} strokeWidth={2} aria-hidden="true" />
                  <div>
                    <strong>{title}</strong>
                    <span>{text}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="contact-card">
            <h3 className="contact-card-title">Reach me directly</h3>
            <ul className="channel-list">
              {CHANNELS.map(({ label, value, href, copy, Icon, external }) => (
                <li key={label}>
                  {copy ? (
                    <button
                      type="button"
                      className="channel"
                      onClick={() => copyToClipboard(label, copy)}
                      data-cursor="hover"
                    >
                      <Icon size={18} aria-hidden="true" />
                      <span className="channel-label">{label}</span>
                      <span className="channel-value">{value}</span>
                      <span className="channel-action" aria-live="polite">
                        {copied === label ? (
                          <><Check size={15} aria-hidden="true" /> Copied</>
                        ) : (
                          <><Copy size={15} aria-hidden="true" /> Copy</>
                        )}
                      </span>
                    </button>
                  ) : (
                    <a
                      className="channel"
                      href={href}
                      target={external ? "_blank" : undefined}
                      rel={external ? "noreferrer" : undefined}
                      data-cursor="hover"
                    >
                      <Icon size={18} aria-hidden="true" />
                      <span className="channel-label">{label}</span>
                      <span className="channel-value">{value}</span>
                      <span className="channel-action" aria-hidden="true">↗</span>
                    </a>
                  )}
                </li>
              ))}
              <li>
                <div className="channel channel--static">
                  <MapPin size={18} aria-hidden="true" />
                  <span className="channel-label">Based in</span>
                  <span className="channel-value">Johannesburg, South Africa</span>
                </div>
              </li>
            </ul>

            <a className="cv-btn secondary contact-cv-btn" href={CV_PATH} target="_blank" rel="noreferrer" data-cursor="hover">
              <FileText size={16} aria-hidden="true" />
              View my CV ↗
            </a>
          </div>
        </div>

        <form className="contact-form contact-card" onSubmit={handleSubmit} noValidate>
          <h3 className="contact-card-title">Send a message</h3>

          <div className="field-row">
            <label className="field">
              <span>Name</span>
              <input type="text" name="name" value={form.name} onChange={handleChange} autoComplete="name" />
            </label>
            <label className="field">
              <span>Email</span>
              <input type="email" name="email" value={form.email} onChange={handleChange} autoComplete="email" />
            </label>
          </div>

          <label className="field">
            <span>What's this about?</span>
            <select name="topic" value={form.topic} onChange={handleChange}>
              {TOPICS.map((t) => <option key={t}>{t}</option>)}
            </select>
          </label>

          <label className="field field--grow">
            <span>Message</span>
            <textarea
              name="message"
              rows={6}
              value={form.message}
              onChange={handleChange}
              placeholder="A few lines about the role or project is plenty."
            />
          </label>

          <button type="submit" className="contact-submit" disabled={sending}>
            {sending ? "Sending..." : "Send message"}
          </button>
          <p className={`form-status ${status.type}`} role="status" aria-live="polite">
            {status.text}
          </p>
        </form>
      </div>
    </section>
  )
}

export default Contact
