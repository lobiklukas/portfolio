/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			fontFamily: {
				mono: ['Fira Code', 'ui-monospace', 'SFMono-Regular']
			}
		}
	},
	plugins: [require('daisyui')]
};
