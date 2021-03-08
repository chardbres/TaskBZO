import { extendTheme } from '@chakra-ui/react'
import { createBreakpoints } from '@chakra-ui/theme-tools'

const fonts = { mono: `'Menlo', monospace` }

const breakpoints = createBreakpoints({
  sm: '40em',
  md: '52em',
  lg: '64em',
  xl: '80em',
})

const colors = {
  taskBZO: {
    500: '#2A4365'
  }
}

const theme = extendTheme({
  colors,
  fonts,
  breakpoints,
})

export default theme
