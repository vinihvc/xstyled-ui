import { aliasColor, defaultTheme } from '@xstyled/styled-components'

export const theme = {
  ...defaultTheme,
  defaultColorModeName: 'dark',
  colors: {
    ...defaultTheme.colors,
    ...aliasColor('primary', 'rose'),
    bg: defaultTheme.colors.white,
    inverseBg: '#10171d',
    text: '#333',
    inverseText: '#dfdfdf',
    modes: {
      dark: {
        bg: defaultTheme.colors['gray-800'],
        inverseBg: '#fff',
        text: '#efefef',
        inverseText: '#333',
      },
    },
  },
  fontFamilies: {
    mono: `Asap, ${defaultTheme.fonts.mono}`,
    serif: `Asap, ${defaultTheme.fonts.serif}`,
    sans: `Asap, ${defaultTheme.fonts.sans}`,
  },
}
