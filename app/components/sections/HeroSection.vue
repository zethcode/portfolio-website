<script setup lang="ts">
const roles = ['Software Engineer', 'Lifelong Learner', 'Problem Solver', 'Tech Enthusiast']
const currentRoleIndex = ref(0)
const displayedRole = ref('')
const isTyping = ref(true)

let typingInterval: ReturnType<typeof setInterval> | null = null

const typeRole = () => {
  const currentRole = roles[currentRoleIndex.value]
  if (!currentRole) return
  let charIndex = 0
  isTyping.value = true
  displayedRole.value = ''

  typingInterval = setInterval(() => {
    if (charIndex < currentRole.length) {
      displayedRole.value += currentRole[charIndex]
      charIndex++
    } else {
      clearInterval(typingInterval!)
      isTyping.value = false

      // Wait before deleting
      setTimeout(() => {
        deleteRole()
      }, 2000)
    }
  }, 100)
}

const deleteRole = () => {
  isTyping.value = true

  typingInterval = setInterval(() => {
    if (displayedRole.value.length > 0) {
      displayedRole.value = displayedRole.value.slice(0, -1)
    } else {
      clearInterval(typingInterval!)
      currentRoleIndex.value = (currentRoleIndex.value + 1) % roles.length
      setTimeout(() => {
        typeRole()
      }, 500)
    }
  }, 50)
}

onMounted(() => {
  typeRole()
})

onUnmounted(() => {
  if (typingInterval) {
    clearInterval(typingInterval)
  }
})
</script>

<template>
  <section
    id="hero"
    class="relative flex min-h-[100svh] items-center justify-center overflow-hidden"
  >
    <!-- Floating Background Blobs -->
    <div class="pointer-events-none absolute inset-0" aria-hidden="true">
      <div
        class="absolute left-1/4 top-1/4 h-72 w-72 animate-[float_6s_ease-in-out_infinite] rounded-full bg-[var(--color-accent-primary)] opacity-[0.05] blur-[80px]"
      />
      <div
        class="absolute bottom-1/4 right-1/4 h-96 w-96 animate-[float_8s_ease-in-out_infinite_reverse] rounded-full bg-[var(--color-accent-secondary)] opacity-[0.05] blur-[100px]"
      />
    </div>

    <div class="container-narrow relative text-center">
      <!-- Greeting -->
      <p class="text-lg text-[var(--color-text-secondary)]">
        Hello, I'm
      </p>

      <!-- Name -->
      <h1 class="heading-display mt-4">
        Arckie Jadulco<span class="text-[var(--color-accent-primary)]">.</span>
      </h1>

      <!-- Typing Animation -->
      <div class="mt-6 flex h-10 items-center justify-center">
        <span class="font-mono text-xl text-[var(--color-accent-primary)] md:text-2xl">
          {{ displayedRole }}<span
            class="ml-0.5 inline-block w-0.5 animate-[blink_1s_step-end_infinite] bg-[var(--color-accent-primary)]"
            :class="{ 'h-6': true }"
          />
        </span>
      </div>

      <!-- Tagline -->
      <p class="mx-auto mt-8 max-w-2xl text-body md:text-body-lg">
        Senior Software Engineer with expertise on building web applications and backend systems.
        From startup environments to enterprise solutions. Based in Cebu, Philippines.
      </p>

      <!-- CTA Buttons -->
      <div class="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
        <a href="#projects" class="btn-primary">
          <UIcon name="i-lucide-folder-open" class="h-5 w-5" />
          View My Work
        </a>
        <a href="#contact" class="btn-secondary">
          <UIcon name="i-lucide-mail" class="h-5 w-5" />
          Get In Touch
        </a>
      </div>
    </div>

    <!-- Scroll Indicator -->
    <div class="absolute bottom-8 left-1/2 -translate-x-1/2">
      <a
        href="#about"
        class="flex flex-col items-center gap-2 text-[var(--color-text-muted)] transition-colors hover:text-[var(--color-accent-primary)]"
        aria-label="Scroll to about section"
      >
        <span class="text-xs uppercase tracking-widest">Scroll</span>
        <UIcon
          name="i-lucide-chevron-down"
          class="h-5 w-5 animate-bounce"
        />
      </a>
    </div>
  </section>
</template>
