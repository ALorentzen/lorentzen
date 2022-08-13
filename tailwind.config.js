module.exports = {
  content: [
    './resources/**/*.antlers.html',
    './resources/**/*.blade.php',
    './resources/**/*.vue',
    './content/**/*.md'
  ],
  theme: {
    extend: {
      margin: {
        'center' : '0 auto',
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
