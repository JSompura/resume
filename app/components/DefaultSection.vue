<script setup>
defineProps({
    reverse: {
        type: Boolean,
        default: false,
    },
});
</script>

<template>
    <div class="relative max-w-6xl mx-auto px-12 py-12 bg-white/20 rounded-3xl shadow-xl">
        <div
            class="flex flex-col items-center gap-10"
            :class="reverse ? 'md:flex-row-reverse' : 'md:flex-row'"
        >
            <!-- Text / Image Column 1 -->
            <div class="flex-1">
                <slot name="text-column" />
            </div>

            <!-- Text / Image Column 2 -->
            <div class="flex-1 flex justify-center">
                <slot name="image-column" />
            </div>
        </div>
    </div>
</template>
