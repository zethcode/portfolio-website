<script setup lang="ts">
useSeoMeta({
  title: 'Software Engineer',
  description: 'Software Engineer crafting elegant digital experiences with clean code and thoughtful design. Explore my portfolio of projects and get in touch.',
  ogTitle: 'Arckie Jadulco | Software Engineer',
  ogDescription: 'Software Engineer crafting elegant digital experiences with clean code and thoughtful design.',
  ogImage: '/og-image.png',
  twitterCard: 'summary_large_image',
})

useSchemaOrg([
  defineWebPage({ '@type': 'ProfilePage' }),
])
</script>

<template>
  <div>
    <SectionsHeroSection />
    <SectionsAboutSection />
    <SectionsSkillsSection />
    <SectionsProjectsSection />
    <SectionsExperienceSection />
    <SectionsContactSection />
  </div>
</template>
