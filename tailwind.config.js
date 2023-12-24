export default {
	content: ['./index.html', './src/**/*.{js,jsx}'],
	theme: {
		extend: {
			fontFamily: {
				plus: ['Plus Jakarta Sans', 'sans-serif'],
			},
			colors: {
				blue: '#1E90FF',
				black: '#000000',
				white: '#FFFFFF',
				darkGray: '#6B6B6B',
				lightGray: '#A9A9A9',
			},
			keyframes: {
				rotateIn: {
					'0%': { transform: 'rotate(0deg)' },
					'100%': { transform: 'rotate(180deg)' },
				},
				rotate180: {
					'0%': { transform: 'rotate(0deg)' },
					'100%': { transform: 'rotate(180deg)' },
				},
			},
			animation: {
				rotateIn: 'rotateIn 0.35s ease-in-out 1',
				rotate180: 'rotate180 0.35s ease-in-out 1',
			},
		},
	},
	plugins: [],
};
