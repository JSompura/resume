<script setup>
const sections = ['home', 'about', 'skills', 'experience', 'projects', 'contact me'];
const { activeSection } = useScrollSpy(sections);
</script>
<template>
    <nav class="fixed top-6 inset-x-0 flex justify-center z-50">
        <ul class="flex gap-6 bg-white/60 backdrop-blur px-6 py-3 rounded-full shadow-xl">
            <li v-for="id in sections" :key="id">
                <a
                    :href="`#${id}`"
                    class="transition-all duration-200"
                    :class="
                        activeSection === id
                            ? 'text-emerald-600 font-semibold'
                            : 'text-gray-600 hover:text-emerald-500'
                    "
                    >{{ id.charAt(0).toUpperCase() + id.slice(1) }}
                </a>
            </li>
        </ul>
    </nav>
</template>
