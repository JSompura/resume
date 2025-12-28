<template>
    <div class="mx-auto my-6 w-11/12 sm:w-10/12 md:w-3/4 h-0.5 rounded-full bg-gradient-to-r from-transparent via-emerald-500 to-transparent shadow-md"></div>
    <footer class="px-6 bg-white/0 backdrop-blur-sm py-8 sm:py-10">
        <div
            class="max-w-5xl mx-auto px-4 flex flex-col sm:flex-row items-center sm:items-center justify-between gap-4"
        >
            <div class="flex items-center gap-3">
                <p class="text-sm text-gray-600">© {{ year }} Jigar Sompura.</p>
                <span class="hidden sm:inline-block h-4 border-l border-emerald-500 ml-3 mr-3" />
                <p class="text-sm text-gray-500">All rights reserved</p>
            </div>

            <nav class="flex items-center gap-4 text-sm">
                <a
                    href="mailto:hello@example.com"
                    class="text-gray-600 hover:text-emerald-600 transition"
                    >hello@example.com</a
                >
                <a
                    href="https://github.com/JSompura"
                    target="_blank"
                    rel="noopener"
                    class="text-gray-600 hover:text-emerald-600 transition"
                    >GitHub</a
                >
                <a href="/#contact" class="text-gray-600 hover:text-emerald-600 transition"
                    >Contact</a
                >
            </nav>
        </div>
    </footer>
</template>

<script setup>
const year = new Date().getFullYear();
</script>
