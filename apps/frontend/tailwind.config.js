import konstaConfig from 'konsta/config';

// wrap your config with konstaConfig
export default konstaConfig({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'media',
  theme: {
    extend: {},
  },
  plugins: [],
  konsta: {
    colors: {
      primary: '#FFA500',
    }
  }
});