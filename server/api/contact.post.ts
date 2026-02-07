import { Resend } from 'resend'

export default defineEventHandler(async (event) => {
  const { name, email, message } = await readBody(event)

  if (!name || !email || !message) {
    throw createError({ statusCode: 400, statusMessage: 'All fields are required' })
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    throw createError({ statusCode: 400, statusMessage: 'Invalid email address' })
  }

  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) {
    throw createError({ statusCode: 500, statusMessage: 'Email service not configured' })
  }

  try {
    const resend = new Resend(apiKey)
    await resend.emails.send({
      from: 'Portfolio Contact <noreply@arckiejadulco.dev>',
      to: 'arckie.jadulco@gmail.com',
      replyTo: email,
      subject: `Portfolio Contact: ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    })
    return { success: true }
  } catch {
    throw createError({ statusCode: 500, statusMessage: 'Failed to send message' })
  }
})
