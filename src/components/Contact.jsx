import { useState } from "react"
import { FaGithub, FaLinkedin, FaEnvelope, FaDiscord } from "react-icons/fa"

const EMAIL = "emilym01@gmail.com"
const GITHUB = "https://github.com/Qhawekazii"
// TODO: swap in the real profile links once available
const LINKEDIN = ""
const DISCORD = ""

const SOCIALS = [
  { label: "Email", href: `mailto:${EMAIL}`, Icon: FaEnvelope, external: false },
  { label: "GitHub", href: GITHUB, Icon: FaGithub, external: true },
  { label: "LinkedIn", href: LINKEDIN, Icon: FaLinkedin, external: true },
  { label: "Discord", href: DISCORD, Icon: FaDiscord, external: true },
].filter((social) => social.href)

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" })
  const [status, setStatus] = useState({ text: "", type: "" })
  const [sending, setSending] = useState(false)

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
      <div className="contact-head">
        <span className="eyebrow">Contact</span>
        <h2>
          Let's<br />build<br />something.
        </h2>
      </div>

      <div className="contact-grid">
        <div className="contact-block">
          <h4>Email</h4>
          <a href={`mailto:${EMAIL}`} data-cursor="hover">{EMAIL}</a>

          <h4 style={{ marginTop: 28 }}>Find me here</h4>
          <div className="contact-socials">
            {SOCIALS.map(({ label, href, Icon, external }) => (
              <a
                key={label}
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
            ))}
          </div>
        </div>
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

      <div className="footer-bar">
        <span>© 2026 Emily Qhawekazi Maramani</span>
        <span>Designed & built by me, end to end.</span>
      </div>
    </section>
  )
}

export default Contact
