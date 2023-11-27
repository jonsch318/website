import type { CustomThemeConfig } from '@skeletonlabs/tw-plugin';

export const JonschTheme: CustomThemeConfig = {
    name: 'my-custom-theme',
    properties: {
		// =~= Theme Properties =~=
		"--theme-font-family-base": `Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'`,
		"--theme-font-family-heading": `Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'`,
		"--theme-font-color-base": "var(--color-surface-500)",
		"--theme-font-color-dark": "var(--color-tertiary-500)",
		"--theme-rounded-base": "9999px",
		"--theme-rounded-container": "8px",
		"--theme-border-base": "1px",
		// =~= Theme On-X Colors =~=
		"--on-primary": "var(--color-tertiary-500)",
		"--on-secondary": "var(--color-tertiary-500)",
		"--on-tertiary": "var(--color-surface-500)",
		"--on-success": "var(--color-surface-500)",
		"--on-warning": "var(--color-tertiary-500)",
		"--on-error": "var(--color-tertiary-500)",
		"--on-surface": "var(--color-tertiary-500)",
		// =~= Theme Colors  =~=
		// primary | #3A9A3B 
		"--color-primary-50": "225 240 226", // #e1f0e2
		"--color-primary-100": "216 235 216", // #d8ebd8
		"--color-primary-200": "206 230 206", // #cee6ce
		"--color-primary-300": "176 215 177", // #b0d7b1
		"--color-primary-400": "117 184 118", // #75b876
		"--color-primary-500": "58 154 59", // #3A9A3B
		"--color-primary-600": "52 139 53", // #348b35
		"--color-primary-700": "44 116 44", // #2c742c
		"--color-primary-800": "35 92 35", // #235c23
		"--color-primary-900": "28 75 29", // #1c4b1d
		// secondary | #1C4A1D 
		"--color-secondary-50": "221 228 221", // #dde4dd
		"--color-secondary-100": "210 219 210", // #d2dbd2
		"--color-secondary-200": "198 210 199", // #c6d2c7
		"--color-secondary-300": "164 183 165", // #a4b7a5
		"--color-secondary-400": "96 128 97", // #608061
		"--color-secondary-500": "28 74 29", // #1C4A1D
		"--color-secondary-600": "25 67 26", // #19431a
		"--color-secondary-700": "21 56 22", // #153816
		"--color-secondary-800": "17 44 17", // #112c11
		"--color-secondary-900": "14 36 14", // #0e240e
		// tertiary | #E2F3E2 
		"--color-tertiary-50": "251 253 251", // #fbfdfb
		"--color-tertiary-100": "249 253 249", // #f9fdf9
		"--color-tertiary-200": "248 252 248", // #f8fcf8
		"--color-tertiary-300": "243 250 243", // #f3faf3
		"--color-tertiary-400": "235 247 235", // #ebf7eb
		"--color-tertiary-500": "226 243 226", // #E2F3E2
		"--color-tertiary-600": "203 219 203", // #cbdbcb
		"--color-tertiary-700": "170 182 170", // #aab6aa
		"--color-tertiary-800": "136 146 136", // #889288
		"--color-tertiary-900": "111 119 111", // #6f776f
		// success | #80ff00 
		"--color-success-50": "236 255 217", // #ecffd9
		"--color-success-100": "230 255 204", // #e6ffcc
		"--color-success-200": "223 255 191", // #dfffbf
		"--color-success-300": "204 255 153", // #ccff99
		"--color-success-400": "166 255 77", // #a6ff4d
		"--color-success-500": "128 255 0", // #80ff00
		"--color-success-600": "115 230 0", // #73e600
		"--color-success-700": "96 191 0", // #60bf00
		"--color-success-800": "77 153 0", // #4d9900
		"--color-success-900": "63 125 0", // #3f7d00
		// warning | #ffae00 
		"--color-warning-50": "255 243 217", // #fff3d9
		"--color-warning-100": "255 239 204", // #ffefcc
		"--color-warning-200": "255 235 191", // #ffebbf
		"--color-warning-300": "255 223 153", // #ffdf99
		"--color-warning-400": "255 198 77", // #ffc64d
		"--color-warning-500": "255 174 0", // #ffae00
		"--color-warning-600": "230 157 0", // #e69d00
		"--color-warning-700": "191 131 0", // #bf8300
		"--color-warning-800": "153 104 0", // #996800
		"--color-warning-900": "125 85 0", // #7d5500
		// error | #a50909 
		"--color-error-50": "242 218 218", // #f2dada
		"--color-error-100": "237 206 206", // #edcece
		"--color-error-200": "233 194 194", // #e9c2c2
		"--color-error-300": "219 157 157", // #db9d9d
		"--color-error-400": "192 83 83", // #c05353
		"--color-error-500": "165 9 9", // #a50909
		"--color-error-600": "149 8 8", // #950808
		"--color-error-700": "124 7 7", // #7c0707
		"--color-error-800": "99 5 5", // #630505
		"--color-error-900": "81 4 4", // #510404
		// surface | #060E06 
		"--color-surface-50": "218 219 218", // #dadbda
		"--color-surface-100": "205 207 205", // #cdcfcd
		"--color-surface-200": "193 195 193", // #c1c3c1
		"--color-surface-300": "155 159 155", // #9b9f9b
		"--color-surface-400": "81 86 81", // #515651
		"--color-surface-500": "6 14 6", // #060E06
		"--color-surface-600": "5 13 5", // #050d05
		"--color-surface-700": "5 11 5", // #050b05
		"--color-surface-800": "4 8 4", // #040804
		"--color-surface-900": "3 7 3", // #030703
		
	}
}