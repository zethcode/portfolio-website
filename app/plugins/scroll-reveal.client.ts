export default defineNuxtPlugin(() => {
  if (typeof window === 'undefined') return

  const observerCallback: IntersectionObserverCallback = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible')
      }
    })
  }

  const observerOptions: IntersectionObserverInit = {
    root: null,
    rootMargin: '0px 0px -50px 0px',
    threshold: 0.1,
  }

  const observer = new IntersectionObserver(observerCallback, observerOptions)

  // Function to observe elements
  const observeElements = () => {
    const elements = document.querySelectorAll('.reveal')
    elements.forEach((el) => observer.observe(el))
  }

  // Initial observation
  setTimeout(observeElements, 100)

  // Re-observe on route change
  const nuxtApp = useNuxtApp()
  nuxtApp.hook('page:finish', () => {
    setTimeout(observeElements, 100)
  })
})
