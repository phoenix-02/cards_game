module.exports = {
    env: {
        node: true,
    },
    extends: [
        "prettier",
        'eslint:recommended',
        'plugin:vue/vue3-recommended',
    ],
    rules: {
        'vue/script-setup-uses-vars': 'error',
    }
}