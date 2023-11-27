import { join } from "path"
import type { Config } from "tailwindcss"
import forms from "@tailwindcss/forms";
import typography from "@tailwindcss/typography";
import { skeleton } from "@skeletonlabs/tw-plugin"
import { JonschTheme } from "./src/theme"

export default {
	darkMode: "class",
	content: ["./src/**/*.{html,js,svelte,ts}", join(require.resolve("@skeletonlabs/skeleton"), "../**/*.{html,js,svelte,ts}")],
	theme: {
		fontFamily: {
			"sans": ["poppins", "system-ui", "Aral", "sans-serif"]	
		},
		extend: {
			colors: {
				gruene: "#3A9A3B"
			}
		},
	},
	plugins: [
		forms,
		typography,
		skeleton({
			themes: {
				custom: [
					JonschTheme
				],
			},
		}),
	],
} satisfies Config;
