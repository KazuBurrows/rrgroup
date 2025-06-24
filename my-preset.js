// Example preset
module.exports = {
    theme: {
      colors: {
        blue: {
          light: '#001b3c',
          DEFAULT: '#01326d',
          dark: '#000a15',
        },
        white: {
          light: '#eee',
          DEFAULT: '#fff',
          dark: '#ff16d1',
        },
        gray: {
          darkest: '#1f2d3d',
          dark: '#3c4858',
          DEFAULT: '#c0ccda',
          light: '#e0e6ed',
          lightest: '#f9fafc',
            },
        green: {
            DEFAULT: 'rgb(74 222 128)'
        }
      },
      extend: {
        flexGrow: {
          2: '2',
          3: '3',
        },
        zIndex: {
          60: '60',
          70: '70',
          80: '80',
          90: '90',
          100: '100',
        },
        fontSize: {
            sm: '0.8rem',
            base: '1.25rem',
            lg: '2.5vw',
            xl: '3.5vw',
            '2xl': '6vw',
            '3xl': '8vw',
            '4xl': '12vw',
            '5xl': '15vw',
          }
      }
    },
    plugins: [

    ],
  }