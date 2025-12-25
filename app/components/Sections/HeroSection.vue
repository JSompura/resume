<template>
    <div class="mt-24">
        <DefaultSection>
            <template #text-column>
                <h1 class="text-5xl md:text-6xl font-extrabold mb-6">Hi, I'm Jigar Sompura,</h1>
                <p class="text-lg md:text-xl mb-8 leading-relaxed">
                    A Full Stack Developer specializing in creating dynamic and responsive web
                    applications. Explore my work and skills below.
                </p>
                <a
                    href="#about"
                    class="inline-block bg-emerald-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-emerald-600 transition"
                >
                    Learn More About Me
                </a>
            </template>
            <template #image-column>
                <img
                    src="/images/home_pose.png"
                    alt="Hero Image"
                    class="size-96 rounded-full object-cover"
                />
            </template>
        </DefaultSection>
    </div>
</template>
