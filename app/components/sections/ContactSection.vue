<script setup lang="ts">
const contactInfo = [
  {
    icon: 'i-lucide-mail',
    label: 'Email',
    value: 'arckie.jadulco@gmail.com',
    href: 'mailto:arckie.jadulco@gmail.com',
  },
  {
    icon: 'i-lucide-map-pin',
    label: 'Location',
    value: 'Cebu, Philippines',
    href: '',
  },
  {
    icon: 'i-lucide-clock',
    label: 'Availability',
    value: 'Open to opportunities',
    href: '',
  },
]

const form = reactive({
  name: '',
  email: '',
  message: '',
})

const isSubmitting = ref(false)
const isSuccess = ref(false)
const errorMessage = ref('')

const handleSubmit = async () => {
  isSubmitting.value = true
  errorMessage.value = ''

  // Basic validation
  if (!form.name || !form.email || !form.message) {
    errorMessage.value = 'Please fill in all fields'
    isSubmitting.value = false
    return
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    errorMessage.value = 'Please enter a valid email address'
    isSubmitting.value = false
    return
  }

  try {
    // Placeholder for form submission
    console.log('Form submitted:', form)

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))

    isSuccess.value = true
    form.name = ''
    form.email = ''
    form.message = ''

    // Reset success message after 5 seconds
    setTimeout(() => {
      isSuccess.value = false
    }, 5000)
  } catch {
    errorMessage.value = 'Something went wrong. Please try again.'
  } finally {
    isSubmitting.value = false
  }
}
</script>

<template>
  <section id="contact" class="section-spacing">
    <div class="container-narrow">
      <!-- Section Header -->
      <div class="text-center">
        <p class="font-mono text-sm text-[var(--color-accent-primary)]">
          // Get In Touch
        </p>
        <h2 class="heading-section mt-4">
          Let's work together
        </h2>
        <p class="mx-auto mt-4 max-w-2xl text-body md:text-body-lg">
          Have a project in mind or just want to say hello? I'd love to hear from you.
          Fill out the form below or reach out directly.
        </p>
      </div>

      <div class="mt-8 grid gap-8 lg:mt-12 lg:grid-cols-2 lg:gap-12">
        <!-- Contact Info -->
        <div class="space-y-6">
          <div
            v-for="info in contactInfo"
            :key="info.label"
            class="flex items-start gap-4 rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-secondary)] p-5"
          >
            <div
              class="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-[var(--color-bg-tertiary)] text-[var(--color-accent-primary)]"
            >
              <UIcon :name="info.icon" class="h-6 w-6" />
            </div>
            <div>
              <p class="text-sm text-[var(--color-text-muted)]">
                {{ info.label }}
              </p>
              <component
                :is="info.href ? 'a' : 'p'"
                :href="info.href || undefined"
                class="mt-1 font-medium text-[var(--color-text-primary)]"
                :class="{ 'transition-colors hover:text-[var(--color-accent-primary)]': info.href }"
              >
                {{ info.value }}
              </component>
            </div>
          </div>

          <!-- Social Reminder -->
          <p class="text-sm text-[var(--color-text-muted)]">
            You can also find me on
            <a
              href="https://github.com/zethcode"
              target="_blank"
              rel="noopener noreferrer"
              class="text-[var(--color-accent-primary)] hover:underline"
            >GitHub</a> and
            <a
              href="https://www.linkedin.com/in/arckie-jadulco/"
              target="_blank"
              rel="noopener noreferrer"
              class="text-[var(--color-accent-primary)] hover:underline"
            >LinkedIn</a>.
          </p>
        </div>

        <!-- Contact Form -->
        <form
          class="space-y-6 rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-secondary)] p-6 lg:p-8"
          @submit.prevent="handleSubmit"
        >
          <!-- Success Message -->
          <div
            v-if="isSuccess"
            class="rounded-lg bg-green-500/10 p-4 text-sm text-green-400"
          >
            Thanks for reaching out! I'll get back to you soon.
          </div>

          <!-- Error Message -->
          <div
            v-if="errorMessage"
            class="rounded-lg bg-red-500/10 p-4 text-sm text-red-400"
          >
            {{ errorMessage }}
          </div>

          <!-- Name Field -->
          <div>
            <label
              for="name"
              class="mb-2 block text-sm font-medium text-[var(--color-text-primary)]"
            >
              Name
            </label>
            <input
              id="name"
              v-model="form.name"
              type="text"
              placeholder="John Doe"
              class="w-full rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-primary)] px-4 py-3 text-[var(--color-text-primary)] placeholder-[var(--color-text-muted)] transition-colors focus:border-[var(--color-accent-primary)] focus:outline-none"
            />
          </div>

          <!-- Email Field -->
          <div>
            <label
              for="email"
              class="mb-2 block text-sm font-medium text-[var(--color-text-primary)]"
            >
              Email
            </label>
            <input
              id="email"
              v-model="form.email"
              type="email"
              placeholder="john@example.com"
              class="w-full rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-primary)] px-4 py-3 text-[var(--color-text-primary)] placeholder-[var(--color-text-muted)] transition-colors focus:border-[var(--color-accent-primary)] focus:outline-none"
            />
          </div>

          <!-- Message Field -->
          <div>
            <label
              for="message"
              class="mb-2 block text-sm font-medium text-[var(--color-text-primary)]"
            >
              Message
            </label>
            <textarea
              id="message"
              v-model="form.message"
              rows="4"
              placeholder="Tell me about your project..."
              class="w-full resize-none rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-primary)] px-4 py-3 text-[var(--color-text-primary)] placeholder-[var(--color-text-muted)] transition-colors focus:border-[var(--color-accent-primary)] focus:outline-none"
            />
          </div>

          <!-- Submit Button -->
          <button
            type="submit"
            class="btn-primary w-full"
            :disabled="isSubmitting"
          >
            <UIcon
              v-if="isSubmitting"
              name="i-lucide-loader-2"
              class="h-5 w-5 animate-spin"
            />
            <UIcon
              v-else
              name="i-lucide-send"
              class="h-5 w-5"
            />
            {{ isSubmitting ? 'Sending...' : 'Send Message' }}
          </button>
        </form>
      </div>
    </div>
  </section>
</template>
