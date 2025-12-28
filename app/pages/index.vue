<script setup lang="ts">
import AboutSection from '~/components/Sections/AboutSection.vue';
import HeroSection from '~/components/Sections/HeroSection.vue';
import SkillsSection from '~/components/Sections/SkillsSection.vue';
import ExperienceSection from '~/components/Sections/ExperienceSection.vue';
import ProjectsSection from '~/components/Sections/ProjectsSection.vue';
import ContactSection from '~/components/Sections/ContactSection.vue';
</script>

<template>
    <section id="home" class="scroll-mt-[120px]"><HeroSection /></section>
    <section id="about"> <AboutSection /> </section>
    <section id="skills"> <SkillsSection /> </section>
    <section id="experience"> <ExperienceSection /> </section>
    <section id="projects"> <ProjectsSection /> </section>
    <section id="contact"> <ContactSection /> </section>
</template>
