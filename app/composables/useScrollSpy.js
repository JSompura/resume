import { ref, onMounted, onBeforeUnmount } from 'vue';

export function useScrollSpy(sectionIds) {
    const activeSection = ref(sectionIds[0]);
    let observer;

    onMounted(() => {
        observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        activeSection.value = entry.target.id;
                    }
                });
            },
            { rootMargin: '-40% 0px -40% 0px' }
        );

        sectionIds.forEach((id) => {
            const el = document.getElementById(id);
            if (el) observer.observe(el);
        });
    });

    onBeforeUnmount(() => observer?.disconnect());

    return { activeSection };
}
