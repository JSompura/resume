// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs';

export default withNuxt({
    rules: {
        indent: ['error', 'space', 4],
        quotes: ['error', 'single', { avoidEscape: true }],
        semi: ['error', 'always'],
    },
});
