/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'cupcacke-1': '#98BAB3',
				'cupcacke-2': '#5981B1',
				'cupcacke-3': '#365475',
				'cupcacke-4': '#15273C',
				'cupcacke-5': '#020408',
			},
			backgroundImage: {
				'code': "url('/images/presentation/code.jpg')",
			}
		},
	},
	plugins: [],
}
