import { useState } from "react"
import { FaGithub, FaLinkedin, FaEnvelope, FaDiscord } from "react-icons/fa"

const EMAIL = "emilyqm01@gmail.com"
const GITHUB = "https://github.com/Qhawekazii"
const LINKEDIN = "https://www.linkedin.com/in/emily-maramani-ab0765320"
// Discord has no public profile URL from a username alone (only from a
// numeric user ID), so this one copies the username instead of linking.
const DISCORD_USERNAME = "emilyqhawekazim"

const SOCIALS = [
  { label: "Email", href: `mailto:${EMAIL}`, Icon: FaEnvelope, external: false },
  { label: "GitHub", href: GITHUB, Icon: FaGithub, external: true },
  { label: "LinkedIn", href: LINKEDIN, Icon: FaLinkedin, external: true },
  { label: "Discord", copy: DISCORD_USERNAME, Icon: FaDiscord },
].filter((social) => social.href || social.copy)

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" })
  const [status, setStatus] = useState({ text: "", type: "" })
  const [sending, setSending] = useState(false)
  const [copiedLabel, setCopiedLabel] = useState("")

  const copyToClipboard = async (label, value) => {
    try {
      await navigator.clipboard.writeText(value)
    } catch {
      window.prompt("Copy this:", value)
    }
    setCopiedLabel(label)
    setTimeout(() => setCopiedLabel(""), 1800)
  }

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const { name, email, message } = form
    if (!name.trim() || !email.trim() || !message.trim()) {
      setStatus({ text: "Please fill in all the fields before sending.", type: "error" })
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
      const response = await fetch("https://formsubmit.co/ajax/" + EMAIL, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          Accept: "application/json",
        },
        body: new URLSearchParams({
          name,
          email,
          message,
          _subject: "New portfolio contact message",
        }).toString(),
      })

      if (!response.ok) throw new Error("Unable to send message right now.")

      setForm({ name: "", email: "", message: "" })
      setStatus({ text: "Thanks! Your message was sent successfully.", type: "success" })
    } catch {
      const subject = encodeURIComponent(`Portfolio contact from ${name}`)
      const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`)
      window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`
      setStatus({
        text: "Your email app should open with your message. Please send it from there if needed.",
        type: "success",
      })
    } finally {
      setSending(false)
    }
  }

  return (
    <section id="contact">
      <div className="contact-grid">
        <div className="contact-head">
          <span className="eyebrow">Contact</span>
          <h2>
            Let's<br />build<br />something.
          </h2>
          <p className="contact-tagline">
            Got a role, a project, or just want to say hi? I read every message
            myself — reach out directly or send it through the form.
          </p>
        </div>

        <form className="contact-form" onSubmit={handleSubmit} noValidate>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            autoComplete="name"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            autoComplete="email"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows={5}
            value={form.message}
            onChange={handleChange}
          />
          <button type="submit" className="contact-submit" disabled={sending}>
            {sending ? "Sending..." : "Send Message"}
          </button>
          <p className={`form-status ${status.type}`} role="status" aria-live="polite">
            {status.text}
          </p>
        </form>
      </div>

      <div className="contact-block">
        <h4>Find me here</h4>
        <div className="contact-socials">
          {SOCIALS.map(({ label, href, copy, Icon, external }) => (
            <div className="contact-social-wrap" key={label}>
              {copy ? (
                <button
                  type="button"
                  className="contact-social"
                  aria-label={`Copy ${label} username`}
                  title={`Copy ${label} username`}
                  data-cursor="hover"
                  onClick={() => copyToClipboard(label, copy)}
                >
                  <Icon size={20} />
                </button>
              ) : (
                <a
                  href={href}
                  target={external ? "_blank" : undefined}
                  rel={external ? "noreferrer" : undefined}
                  className="contact-social"
                  aria-label={label}
                  title={label}
                  data-cursor="hover"
                >
                  <Icon size={20} />
                </a>
              )}
              {copiedLabel === label && <span className="contact-social-copied">Copied!</span>}
            </div>
          ))}
        </div>
      </div>

      <div className="footer-bar">
        <span>© 2026 Emily Qhawekazi Maramani</span>
        <span>Designed & built by me, end to end.</span>
      </div>
    </section>
  )
}

export default Contact
