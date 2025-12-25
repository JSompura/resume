<template>
    <div class="relative min-h-screen">
        <!-- Fixed background -->
        <div class="fixed inset-0 -z-10 bg-gradient-to-br from-emerald-500 to-slate-100" />

        <!-- Navbar -->
        <Navbar />

        <!-- Scrollable content -->
        <main class="relative">
            <slot />
        </main>
    </div>
</template>
