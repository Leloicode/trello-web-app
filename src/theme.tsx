import { cyan, deepOrange, orange, teal } from '@mui/material/colors';
import { CssVarsTheme, experimental_extendTheme as extendTheme} from '@mui/material/styles';
// Create a theme instance.

export const Trello_Custom = {
  layout: {
    appBarHeight: '48px',
    boardBarHeight: '56px',
    boardContentHeight:  (): string => {
      return `calc(100vh - ${Trello_Custom.layout.appBarHeight} - ${Trello_Custom.layout.boardBarHeight})`;
    },
    boardContentTitleHeight: '50px',
    boardContentFooterHeight: '56px',
  },
}

const theme: CssVarsTheme = extendTheme({
  typography: {
    fontFamily:  '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Noto Sans, Ubuntu, Droid Sans, Helvetica Neue, sans-serif',
    fontSize: 14,
  },
  colorSchemes: {
    light: {
      palette: {
        primary: teal,
        secondary: deepOrange
      },
    },
    dark: {
      palette: {
        primary: cyan,
        secondary: orange
      },
    },
  },
  components: {
    // Name of the component
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
        disableTouchRipple: true
      },
    },
    MuiButton: {
      styleOverrides: {
        // Name of the slot
        root: {
          // Some CSS
          fontSize: 14,
          textTransform: 'none',
          paddingBlock: '0.2rem',
          fontWeight: 500,
          color: '#172B4D',
          '&:focus': {
            backgroundColor: '#e5e5e5'
          },
  
          '&:hover': {
            backgroundColor: '#cccccc'
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        // Name of the slot
        root: {
          fontSize: 14,
          backgroundColor: 'transparent',
          fontWeight: 500,
          borderRadius: 5,
          cursor: 'pointer',
          color: '#172B4D',
          '&:hover': {
            backgroundColor: '#d8a3c357',
          },
        },
      },
    },
    MuiAvatarGroup: {
      styleOverrides: {
        // Name of the slot
        avatar: {
          // width and height (avatar sẽ set width and height riêng)
          // width: 26,
          // height: 26,
          fontSize: 12,
          color: '#333',
          marginLeft: -3,
          border: 'none',
          backgroundColor: '#d8a3c357',
          cursor: 'pointer',
        },
      },
    },
  },
})

export default theme;