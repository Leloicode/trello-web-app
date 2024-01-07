import { blue, pink } from '@mui/material/colors';
import { CssVarsTheme, experimental_extendTheme as extendTheme} from '@mui/material/styles';
// Create a theme instance.

export const Trello_Custom = {
  layout: {
    appBarHeight: '48px',
    boardBarHeight: '56px'
  },
}
const theme: CssVarsTheme = extendTheme({
  colorSchemes: {
    light: {
      palette: {
        primary: {
          main: blue[100],
        },
      },
    },
    dark: {
      palette: {
        primary: {
          main: pink[400],
        },
      },
    },
  },
})

export default theme;