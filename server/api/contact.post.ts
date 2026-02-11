export default defineEventHandler(async (event) => {
  const { name, email, message } = await readBody(event)

  if (!name || !email || !message) {
    throw createError({ statusCode: 400, statusMessage: 'All fields are required' })
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    throw createError({ statusCode: 400, statusMessage: 'Invalid email address' })
  }

  const cfEnv = event.context.cloudflare?.env as Record<string, string> | undefined
  const apiKey = useRuntimeConfig(event).resendApiKey
    || cfEnv?.NUXT_RESEND_API_KEY
    || cfEnv?.RESEND_API_KEY
    || process.env.NUXT_RESEND_API_KEY
  if (!apiKey) {
    throw createError({ statusCode: 500, statusMessage: 'Email service not configured' })
  }

  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'Portfolio Contact <noreply@arckiejadulco.dev>',
        to: ['arckie.jadulco@gmail.com'],
        reply_to: email,
        subject: `Portfolio Contact: ${name}`,
        text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      }),
    })

    if (!response.ok) {
      const error = await response.json()
      throw new Error(error.message || 'Failed to send email')
    }

    return { success: true }
  } catch {
    throw createError({ statusCode: 500, statusMessage: 'Failed to send message' })
  }
})
